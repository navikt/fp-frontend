var sm=Object.defineProperty;var im=(e,t,r)=>t in e?sm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var X=(e,t,r)=>im(e,typeof t!="symbol"?t+"":t,r);import{g as nd,r as m,u as tr,_ as Bi,s as Vi,c as at,a as ee,R as c,b as Ra,m as om,d as Nr,S as st,e as rd,j as E,f as it,h as Pn,q as lm,o as td,t as Vs,i as Pe,P as dr,n as Ft,Y as na,k as ad,B as sd,l as id,Q as ys,p as Ka,v as od,w as dm,x as um,A as ps,y as gm,z as mm,C as km}from"./iframe-D5Ym14Ks.js";import{r as fm}from"./index-BdI6RNvC.js";var Ls=fm();const ld=nd(Ls);function cm(e,t){var r=e.values,n=Bi(e,["values"]),a=t.values,s=Bi(t,["values"]);return Vi(a,r)&&Vi(n,s)}function dd(e){var t=tr(),r=t.formatMessage,n=t.textComponent,a=n===void 0?m.Fragment:n,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,d=e.children,u=e.tagName,g=u===void 0?a:u,k=e.ignoreTag,f={id:s,description:i,defaultMessage:o},v=r(f,l,{ignoreTag:k});return typeof d=="function"?d(Array.isArray(v)?v:[v]):g?m.createElement(g,null,v):m.createElement(m.Fragment,null,v)}dd.displayName="FormattedMessage";var oe=m.memo(dd,cm);oe.displayName="MemoizedFormattedMessage";var Ve=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(Ve||{}),ud=(e=>(e.MANUELL="MANU",e.AUTOPUNKT="AUTO",e.OVERSTYRING="OVST",e.SAKSBEHANDLEROVERSTYRING="SAOV",e))(ud||{}),Ks=(e=>(e.KVINNE="K",e.MANN="M",e.UDEFINERT="-",e))(Ks||{}),Cn=(e=>(e.INGEN="INGEN",e.UTTAK_MØDREKVOTE_ANNEN_FORELDER="UTTAK_MØDREKVOTE_ANNEN_FORELDER",e.UTTAK_FEDREKVOTE_ANNEN_FORELDER="UTTAK_FEDREKVOTE_ANNEN_FORELDER",e.UTTAK_FELLESP_ANNEN_FORELDER="UTTAK_FELLESP_ANNEN_FORELDER",e.UTTAK_FORELDREPENGER_ANNEN_FORELDER="UTTAK_FORELDREPENGER_ANNEN_FORELDER",e.UDEFINERT="-",e))(Cn||{}),Je=(e=>(e.INNVILGET="INNVILGET",e.AVSLATT="AVSLÅTT",e.IKKE_FASTSATT="IKKE_FASTSATT",e.GYLDIG_UTSETTELSE="GYLDIG_UTSETTELSE",e.UGYLDIG_UTSETTELSE="UGYLDIG_UTSETTELSE",e.MANUELL_BEHANDLING="MANUELL_BEHANDLING",e))(Je||{}),gd=(e=>(e.FODSEL="ST-001",e.ADOPSJON="ST-002",e))(gd||{}),Q=(e=>(e.FELLESPERIODE="FELLESPERIODE",e.MØDREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FORELDREPENGER="FORELDREPENGER",e.UTEN_AKTIVITETSKRAV="UTEN_AKTIVITETSKRAV",e.MINSTERETT_NESTE_STØNADSPERIODE="MINSTERETT_NESTE_STØNADSPERIODE",e.MINSTERETT="MINSTERETT",e.FLERBARNSDAGER="FLERBARNSDAGER",e.FORELDREPENGER_FØR_FØDSEL="FORELDREPENGER_FØR_FØDSEL",e.UDEFINERT="-",e))(Q||{}),md=(e=>(e.ARBEID="ARBEID",e.LOVBESTEMT_FERIE="LOVBESTEMT_FERIE",e.SYKDOM="SYKDOM",e.INSTITUSJONSOPPHOLD_SØKER="INSTITUSJONSOPPHOLD_SØKER",e.INSTITUSJONSOPPHOLD_BARNET="INSTITUSJONSOPPHOLD_BARNET",e.HV_OVELSE="HV_OVELSE",e.NAV_TILTAK="NAV_TILTAK",e.UDEFINERT="-",e))(md||{}),Aa=(e=>(e.ORDINÆRT_ARBEID="ORDINÆRT_ARBEID",e.FRILANS="FRILANS",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.ANNET="ANNET",e))(Aa||{}),en=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(en||{}),be=(e=>(e.STØNADSKONTO_TOM_FOR_STØNADSDAGER="5001",e.ÅRSAK_5002="5002",e.ÅRSAK_5010="5010",e.UDEFINERT="-",e))(be||{}),Ee=(e=>(e.SYKDOM_SKADE="SYKDOM_SKADE",e.ARBEID="ARBEID",e.UDEFINERT="-",e))(Ee||{}),Re=(e=>(e.SØKERS_SYKDOM_IKKE_OPPFYLT="4038",e.ÅRSAK_4103="4103",e.ÅRSAK_4082="4082",e.ÅRSAK_4084="4084",e.ÅRSAK_4002="4002",e.ÅRSAK_2002="2002",e.ÅRSAK_2003="2003",e.ÅRSAK_2006="2006",e.ÅRSAK_2011="2011",e.ÅRSAK_2021="2021",e.ÅRSAK_2027="2027",e.ÅRSAK_2031="2031",e.UDEFINERT="-",e))(Re||{}),Ae=(e=>(e.ARBEID_100_ELLER_MER="4523",e.ÅRSAK_4501="4501",e.UDEFINERT="-",e))(Ae||{});const ot=e=>at({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ym=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const kd=m.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=ym(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=ee();return c.createElement(a,Object.assign({},g,{ref:t,className:k(r,"navds-body-long",`navds-body-long--${n}`,ot({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var pm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const _e=m.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=pm(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=ee();return c.createElement(a,Object.assign({},g,{ref:t,className:k(r,"navds-body-short",`navds-body-short--${n}`,ot({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var vm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const er=m.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:d,visuallyHidden:u,textColor:g}=e,k=vm(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=ee();return c.createElement(i,Object.assign({},k,{ref:t,className:f(r,"navds-detail",ot({spacing:a,truncate:o,weight:l,align:d,visuallyHidden:u,textColor:g,uppercase:s}),{"navds-detail--small":n==="small"})}))});var bm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const lt=m.forwardRef((e,t)=>{var{children:r,className:n,size:a,spacing:s,as:i="p",showIcon:o=!1}=e,l=bm(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=ee();return c.createElement(i,Object.assign({},l,{ref:t,className:d("navds-error-message","navds-label",n,ot({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&c.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var hm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Cs=m.forwardRef((e,t)=>{var{level:r="1",size:n,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:d}=e,u=hm(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=ee(),k=s??`h${r}`;return c.createElement(k,Object.assign({},u,{ref:t,className:g(a,"navds-heading",`navds-heading--${n}`,ot({spacing:i,align:o,visuallyHidden:l,textColor:d}))}))});var Tm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};m.forwardRef((e,t)=>{var{className:r,spacing:n,as:a="p"}=e,s=Tm(e,["className","spacing","as"]);const{cn:i}=ee();return c.createElement(a,Object.assign({},s,{ref:t,className:i(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Em=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const qn=m.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Em(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=ee();return c.createElement(a,Object.assign({},l,{ref:t,className:d(r,"navds-label",ot({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":n==="small"})}))});function fd(e,t=166,r=!1){let n;function a(...s){const i=()=>{n=void 0,e.apply(this,s)};!n&&r&&i(),clearTimeout(n),n=setTimeout(i,t)}return a.clear=()=>{clearTimeout(n)},a}function Ke(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const Zr=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{};let Li=0;function Rm(e){const[t,r]=m.useState(e),n=e||t;return m.useEffect(()=>{t==null&&(Li+=1,r(`aksel-id-${Li}`))},[t]),n}const Ki=c.useId;function _n(e){var t;if(Ki!==void 0){const r=Ki();return e??r.replace(/(:)/g,"")}return(t=Rm(e))!==null&&t!==void 0?t:""}function Rt(e,t=[]){const r=m.useRef(e);return m.useEffect(()=>{r.current=e}),m.useCallback((...n)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...n)},t)}function ra({value:e,defaultValue:t,onChange:r}){const n=Rt(r),[a,s]=m.useState(t),i=e!==void 0,o=i?e:a,l=Rt(d=>{const g=typeof d=="function"?d(o):d;i||s(g),n(g)},[i,n,o]);return[o,l]}let Ci=0;function Am(e){const[t,r]=m.useState(e),n=e||t;return m.useEffect(()=>{t==null&&(Ci+=1,r(`aksel-icon-${Ci}`))},[t]),n}const Gi=c.useId;function Ne(e){var t;return Gi!==void 0?Gi().replace(/(:)/g,""):(t=Am(e))!==null&&t!==void 0?t:""}var wm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Gs=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=wm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var Om=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Hs=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Om(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var Sm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Dm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Sm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Im=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const qm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Im(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var _m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Nm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=_m(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Pm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const cd=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Pm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var jm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Fm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=jm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.545 2.404a.75.75 0 0 1 .505-.152l.05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596M12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}))});var xm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Mm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=xm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Um=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Bm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Um(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.55 3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.8 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m3.5 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v7.106a.75.75 0 0 1-.75.75H14.8V21a.75.75 0 0 1-1.5 0v-4.894a.75.75 0 0 1 .75-.75h1.25V9.75h-1.25A.75.75 0 0 1 13.3 9m-2.78.916a.25.25 0 0 1 .235-.166h.295a.75.75 0 0 0 0-1.5h-.295c-.74 0-1.4.465-1.648 1.161l-2.263 6.337a.75.75 0 0 0 .706 1.002h2.75V21a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75H8.614z",clipRule:"evenodd"}))});var Vm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Lm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Vm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.557 9.411a1.75 1.75 0 0 1 1.648-1.161h3.59c.74 0 1.4.465 1.648 1.161l2.263 6.337A.75.75 0 0 1 17 16.75h-2.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H7a.75.75 0 0 1-.706-1.002z",clipRule:"evenodd"}))});var Km=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Cm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Km(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Gm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Hm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Gm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var $m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ym=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=$m(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var Wm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const zm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Wm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.75 12a.75.75 0 0 1 .75-.75h13a.75.75 0 1 1 0 1.5h-13a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Xm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const yd=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Xm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Qm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Jm=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Qm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 6.25a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75zm.75 10v-8.5h1.5v8.5zm6.25-10a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75zm.75 10v-8.5h1.5v8.5z",clipRule:"evenodd"}))});var Zm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ek=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Zm(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var nk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const rk=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=nk(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M12 15.75A5.25 5.25 0 0 0 6.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 7.875-6.656.75.75 0 0 1-.25 1.48A5 5 0 0 0 12 15.75m8.53-.28a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06m-2 1.06a.664.664 0 0 1 .94.94l-2.34 2.339-1.174.235.235-1.174z",clipRule:"evenodd"}))});var tk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ak=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=tk(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var sk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ik=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=sk(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1 7.5c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-1.5 0v-8c0-1.013-1.088-2.25-2.75-2.25S9.25 11.987 9.25 13v1.75H8.5c-.793 0-1.32.287-1.664.719-.364.454-.586 1.145-.586 2.031s.222 1.577.586 2.032c.345.431.871.718 1.664.718a.75.75 0 0 1 0 1.5c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968s.278-2.173.914-2.969c.513-.64 1.222-1.064 2.086-1.217zm2.634 3.116a1.25 1.25 0 0 0-1.768 1.768l1.884 1.884 1.884-1.884a1.25 1.25 0 0 0-1.768-1.768l-.116.116z",clipRule:"evenodd"}))});var ok=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const lk=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=ok(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",d:"M12.75 5.5a.75.75 0 0 0-1.5 0v5.75H5.5a.75.75 0 0 0 0 1.5h5.75v5.75a.75.75 0 0 0 1.5 0v-5.75h5.75a.75.75 0 0 0 0-1.5h-5.75z"}))});var dk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const uk=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=dk(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.97 10.085A3.25 3.25 0 1 1 9.1 8.478l1.456.822 6.506-1.952a1.75 1.75 0 0 1 .79-.05l2.771.462a.75.75 0 0 1 .234 1.4l-5.336 2.89 5.326 2.785a.75.75 0 0 1-.224 1.405l-2.77.462a1.75 1.75 0 0 1-.791-.05l-6.46-1.938-1.5.813q.146.462.148.973a3.25 3.25 0 1 1-1.28-2.585 3.25 3.25 0 0 0 0-3.83M4.25 7.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m8.214 6.206 1.467-.795 4.24 2.217-.565.094a.25.25 0 0 1-.113-.007zM7.39 15.438l.018.023a1.75 1.75 0 1 1-.017-.023m2.493-2.04a4.8 4.8 0 0 0 .11-2.363l7.499-2.25a.25.25 0 0 1 .113-.007l.616.103z",clipRule:"evenodd"}))});var gk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const mk=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=gk(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1-.75-.75z",clipRule:"evenodd"}))});var kk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fk=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=kk(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var ck=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const yk=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=ck(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var pk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const xt=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=pk(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.47 2.97a.75.75 0 0 1 .53-.22c2.018 0 3.74.242 4.95 1.15 1.269.952 1.8 2.486 1.8 4.6V9c0 1.557-.255 2.997-1.015 4.06-.796 1.115-2.05 1.69-3.735 1.69h-6c-1.685 0-2.94-.575-3.735-1.69C5.505 11.998 5.25 10.558 5.25 9V6.5A1.75 1.75 0 0 0 3.5 4.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 6.75 6.5v.75h6.5V3.5a.75.75 0 0 1 .22-.53M14.75 8a.75.75 0 0 1-.75.75H6.75V9c0 1.443.245 2.503.735 3.19.454.635 1.2 1.06 2.515 1.06h6c1.315 0 2.06-.425 2.515-1.06.49-.687.735-1.747.735-3.19v-.5c0-1.886-.469-2.852-1.2-3.4-.685-.514-1.739-.776-3.3-.836zM9.5 17.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6.75 18.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m9.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",clipRule:"evenodd"}))});var vk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const $s=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=vk(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var bk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const hk=m.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=bk(e,["title","titleId"]);let s=Ne();return s=r?n||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?m.createElement("title",{id:s},r):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Wr(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}const[Tk,wa]=Ra({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),Ek=typeof window<"u"&&window.matchMedia===void 0,Rk=(e,t)=>{const[r,n]=m.useState(t);return m.useEffect(()=>{if(Ek)return;const a=window.matchMedia(e);n(a.matches);const s=i=>{n(i.matches)};return a.addEventListener("change",s),()=>{a.removeEventListener("change",s)}},[e]),r};function In(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function un(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=r!=null&&r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=r!=null&&r.width?String(r.width):e.defaultWidth;a=e.values[o]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(t):t;return a[s]}}function gn(e){return(t,r={})=>{const n=r.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(a);if(!s)return null;const i=s[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?wk(o,g=>g.test(i)):Ak(o,g=>g.test(i));let d;d=e.valueCallback?e.valueCallback(l):l,d=r.valueCallback?r.valueCallback(d):d;const u=t.slice(i.length);return{value:d,rest:u}}}function Ak(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function wk(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Ys(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0],s=t.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=r.valueCallback?r.valueCallback(i):i;const o=t.slice(a.length);return{value:i,rest:o}}}const pd=6048e5,Ok=864e5,Sk=6e4,Dk=36e5,Ik=1e3,Hi=Symbol.for("constructDateFrom");function De(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Hi in e?e[Hi](t):e instanceof Date?new e.constructor(t):new Date(t)}function Yn(e,...t){const r=De.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}let qk={};function Pr(){return qk}function de(e,t){return De(t||e,e)}function nr(e,t){var o,l,d,u;const r=Pr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,a=de(e,t==null?void 0:t.in),s=a.getDay(),i=(s<n?7:0)+s-n;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const _k={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},vd=(e,t,r)=>{let n;const a=_k[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},Nk={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},bd=(e,t,r,n)=>Nk[e],Pk={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jk={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Fk={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xk={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Mk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Uk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Bk=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},hd={ordinalNumber:Bk,era:un({values:Pk,defaultWidth:"wide"}),quarter:un({values:jk,defaultWidth:"wide",argumentCallback:e=>e-1}),month:un({values:Fk,defaultWidth:"wide"}),day:un({values:xk,defaultWidth:"wide"}),dayPeriod:un({values:Mk,defaultWidth:"wide",formattingValues:Uk,defaultFormattingWidth:"wide"})},Vk=/^(\d+)(th|st|nd|rd)?/i,Lk=/\d+/i,Kk={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ck={any:[/^b/i,/^(a|c)/i]},Gk={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Hk={any:[/1/i,/2/i,/3/i,/4/i]},$k={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Yk={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wk={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},zk={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Xk={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Qk={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Td={ordinalNumber:Ys({matchPattern:Vk,parsePattern:Lk,valueCallback:e=>parseInt(e,10)}),era:gn({matchPatterns:Kk,defaultMatchWidth:"wide",parsePatterns:Ck,defaultParseWidth:"any"}),quarter:gn({matchPatterns:Gk,defaultMatchWidth:"wide",parsePatterns:Hk,defaultParseWidth:"any",valueCallback:e=>e+1}),month:gn({matchPatterns:$k,defaultMatchWidth:"wide",parsePatterns:Yk,defaultParseWidth:"any"}),day:gn({matchPatterns:Wk,defaultMatchWidth:"wide",parsePatterns:zk,defaultParseWidth:"any"}),dayPeriod:gn({matchPatterns:Xk,defaultMatchWidth:"any",parsePatterns:Qk,defaultParseWidth:"any"})},Jk={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Zk={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ef={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},nf={date:In({formats:Jk,defaultWidth:"full"}),time:In({formats:Zk,defaultWidth:"full"}),dateTime:In({formats:ef,defaultWidth:"full"})},Ed={code:"en-GB",formatDistance:vd,formatLong:nf,formatRelative:bd,localize:hd,match:Td,options:{weekStartsOn:1,firstWeekContainsDate:4}},rf={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},tf={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},af={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},sf={date:In({formats:rf,defaultWidth:"full"}),time:In({formats:tf,defaultWidth:"full"}),dateTime:In({formats:af,defaultWidth:"full"})},Oa={code:"en-US",formatDistance:vd,formatLong:sf,formatRelative:bd,localize:hd,match:Td,options:{weekStartsOn:0,firstWeekContainsDate:1}},of={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},lf=(e,t,r)=>{let n;const a=of[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},df={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},uf={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},gf={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},mf={date:In({formats:df,defaultWidth:"full"}),time:In({formats:uf,defaultWidth:"full"}),dateTime:In({formats:gf,defaultWidth:"full"})},kf={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},ff=(e,t,r,n)=>kf[e],cf={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},yf={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},pf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},vf={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},bf={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},hf=(e,t)=>Number(e)+".",Tf={ordinalNumber:hf,era:un({values:cf,defaultWidth:"wide"}),quarter:un({values:yf,defaultWidth:"wide",argumentCallback:e=>e-1}),month:un({values:pf,defaultWidth:"wide"}),day:un({values:vf,defaultWidth:"wide"}),dayPeriod:un({values:bf,defaultWidth:"wide"})},Ef=/^(\d+)\.?/i,Rf=/\d+/i,Af={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},wf={any:[/^f/i,/^e/i]},Of={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Sf={any:[/1/i,/2/i,/3/i,/4/i]},Df={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},If={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},qf={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},_f={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Nf={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Pf={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},jf={ordinalNumber:Ys({matchPattern:Ef,parsePattern:Rf,valueCallback:e=>parseInt(e,10)}),era:gn({matchPatterns:Af,defaultMatchWidth:"wide",parsePatterns:wf,defaultParseWidth:"any"}),quarter:gn({matchPatterns:Of,defaultMatchWidth:"wide",parsePatterns:Sf,defaultParseWidth:"any",valueCallback:e=>e+1}),month:gn({matchPatterns:Df,defaultMatchWidth:"wide",parsePatterns:If,defaultParseWidth:"any"}),day:gn({matchPatterns:qf,defaultMatchWidth:"wide",parsePatterns:_f,defaultParseWidth:"any"}),dayPeriod:gn({matchPatterns:Nf,defaultMatchWidth:"any",parsePatterns:Pf,defaultParseWidth:"any"})},Rd={code:"nb",formatDistance:lf,formatLong:mf,formatRelative:ff,localize:Tf,match:jf,options:{weekStartsOn:1,firstWeekContainsDate:4}},Ff={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},xf=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Mf=(e,t,r)=>{let n;const a=Ff[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",t<13?xf[t]:String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" sidan":n},Uf={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Bf={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Vf={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Lf={date:In({formats:Uf,defaultWidth:"full"}),time:In({formats:Bf,defaultWidth:"full"}),dateTime:In({formats:Vf,defaultWidth:"full"})},Kf={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Cf=(e,t,r,n)=>Kf[e],Gf={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Hf={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},$f={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Yf={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},Wf={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},zf=(e,t)=>Number(e)+".",Xf={ordinalNumber:zf,era:un({values:Gf,defaultWidth:"wide"}),quarter:un({values:Hf,defaultWidth:"wide",argumentCallback:e=>e-1}),month:un({values:$f,defaultWidth:"wide"}),day:un({values:Yf,defaultWidth:"wide"}),dayPeriod:un({values:Wf,defaultWidth:"wide"})},Qf=/^(\d+)\.?/i,Jf=/\d+/i,Zf={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ec={any:[/^f/i,/^e/i]},nc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},rc={any:[/1/i,/2/i,/3/i,/4/i]},tc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ac={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},sc={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},ic={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},oc={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},lc={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},dc={ordinalNumber:Ys({matchPattern:Qf,parsePattern:Jf,valueCallback:e=>parseInt(e,10)}),era:gn({matchPatterns:Zf,defaultMatchWidth:"wide",parsePatterns:ec,defaultParseWidth:"any"}),quarter:gn({matchPatterns:nc,defaultMatchWidth:"wide",parsePatterns:rc,defaultParseWidth:"any",valueCallback:e=>e+1}),month:gn({matchPatterns:tc,defaultMatchWidth:"wide",parsePatterns:ac,defaultParseWidth:"any"}),day:gn({matchPatterns:sc,defaultMatchWidth:"wide",parsePatterns:ic,defaultParseWidth:"any"}),dayPeriod:gn({matchPatterns:oc,defaultMatchWidth:"any",parsePatterns:lc,defaultParseWidth:"any"})},Ad={code:"nn",formatDistance:Mf,formatLong:Lf,formatRelative:Cf,localize:Xf,match:dc,options:{weekStartsOn:1,firstWeekContainsDate:4}},uc={global:{dateLocale:Rd,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},gc=m.createContext({locale:uc}),Ws=()=>m.useContext(gc);function $i(e){return e.sort((t,r)=>{const n=t.compareDocumentPosition(r);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const mc=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Yi(e,t,r){let n=e+1;return r&&n>=t&&(n=0),n}function Wi(e,t,r){let n=e-1;return r&&n<0&&(n=t),n}const Ca=e=>e;class kc{constructor(){this.descendants=new Map,this.register=t=>{if(t!=null)return mc(t)?this.registerNode(t):r=>{this.registerNode(r,t)}},this.unregister=t=>{this.descendants.delete(t);const r=$i(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=t=>{this.descendants.forEach(r=>{const n=t.indexOf(r.node);r.index=n,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,n)=>r.index-n.index),this.enabledValues=()=>this.values().filter(t=>!t.disabled),this.item=t=>{if(this.count()!==0)return this.values()[t]},this.enabledItem=t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)},this.indexOf=t=>{var r,n;return t&&(n=(r=this.descendants.get(t))===null||r===void 0?void 0:r.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=t=>t==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(t)),this.next=(t,r=!0)=>{const n=Yi(t,this.count(),r);return this.item(n)},this.nextEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const a=this.enabledIndexOf(n.node),s=Yi(a,this.enabledCount(),r);return this.enabledItem(s)},this.prev=(t,r=!0)=>{const n=Wi(t,this.count()-1,r);return this.item(n)},this.prevEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const a=this.enabledIndexOf(n.node),s=Wi(a,this.enabledCount()-1,r);return this.enabledItem(s)},this.registerNode=(t,r)=>{if(!t)return;const n=this.descendants.get(t);if(n){this.descendants.set(t,Object.assign({index:n.index,node:t},r));return}const a=Array.from(this.descendants.keys()).concat(t),s=$i(a);r!=null&&r.disabled&&(r.disabled=!!r.disabled);const i=Object.assign({node:t,index:-1},r);this.descendants.set(t,i),this.assignIndex(s)}}}function fc(){const[e,t]=Ra({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=Ca(s=>c.createElement(e,Object.assign({},s.value),s.children));function n(s){const i=t(),[o,l]=m.useState(-1),d=m.useRef(null);Zr(()=>()=>{d.current&&i.unregister(d.current)},[]),Zr(()=>{if(!d.current)return;const g=Number(d.current.dataset.index);o!==g&&!Number.isNaN(g)&&l(g)});const u=Ca(s?i.register(s):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(d.current),register:om([u,d])}}function a(){return m.useRef(new kc).current}return[r,t,a,n]}function cc(e,t=globalThis==null?void 0:globalThis.document){const r=Rt(e);m.useEffect(()=>{const n=a=>{a.key==="Escape"&&r(a)};return t.addEventListener("keydown",n,!0),()=>t.removeEventListener("keydown",n,!0)},[r,t])}const wd={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function Od(e,t,r,{discrete:n}={discrete:!1}){if(!t)return;const a=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});a.addEventListener(e,t,{once:!0}),n&&a?ld.flushSync(()=>a.dispatchEvent(s)):a.dispatchEvent(s)}function yc(e,t=globalThis==null?void 0:globalThis.document){const r=Rt(e),n=m.useRef(!1);return m.useEffect(()=>{const a=s=>{if(s.target&&!n.current){const i={originalEvent:s};Od(wd.FOCUS_OUTSIDE,r,i)}};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,r]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function pc(e,t=globalThis==null?void 0:globalThis.document){const r=Rt(e),n=m.useRef(!1),a=m.useRef(()=>{});return m.useEffect(()=>{const s=o=>{function l(){Od(wd.POINTER_DOWN_OUTSIDE,r,{originalEvent:o},{discrete:!0})}o.target&&!n.current?o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=l,t.addEventListener("click",a.current,{once:!0})):l():t.removeEventListener("click",a.current),n.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",s),t.removeEventListener("click",a.current)}},[t,r]),{onPointerDownCapture:()=>{n.current=!0}}}var vc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const[bc,hc,Tc,Ec]=fc();let Vr=0,zi;const Rc=m.forwardRef((e,t)=>hc(!1)?c.createElement(Xi,Object.assign({ref:t},e)):c.createElement(Ac,null,c.createElement(Xi,Object.assign({ref:t},e)))),Ac=({children:e})=>{const t=Tc();return c.createElement(bc,{value:t},e)},Xi=m.forwardRef((e,t)=>{var r,{children:n,asChild:a,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:l,onDismiss:d,safeZone:u,disableOutsidePointerEvents:g=!1,enabled:k=!0}=e,f=vc(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,v]=m.useState({}),{register:b,index:y,descendants:T}=Ec({disableOutsidePointerEvents:g,disabled:!k,forceUpdate:()=>v({})}),[p,h]=m.useState(null),A=Nr(h,b,t),D=(r=p==null?void 0:p.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,O=m.useRef(!1),S=m.useRef(!1),I=(()=>{let w=-1;return T.enabledValues().forEach((j,L)=>{j.disableOutsidePointerEvents&&(w=L)}),{isPointerEventsEnabled:y>=w,isBodyPointerEventsDisabled:Vr>0,pointerStyle:y>=w&&Vr>0?"auto":void 0}})();function _(w){var N,j;if(!(u!=null&&u.anchor)&&!(u!=null&&u.dismissable)||!k)return;w.defaultPrevented||(O.current=!0,w.detail.originalEvent.type==="pointerdown"&&(S.current=!0));const L=w.target;w.detail.originalEvent.type==="pointerdown"?(!((N=u==null?void 0:u.anchor)===null||N===void 0)&&N.contains(L)||L===(u==null?void 0:u.anchor))&&w.preventDefault():!(L instanceof HTMLElement&&![u==null?void 0:u.anchor,u==null?void 0:u.dismissable].some(V=>V==null?void 0:V.contains(L))&&!L.contains((j=u==null?void 0:u.dismissable)!==null&&j!==void 0?j:null))&&w.preventDefault(),w.detail.originalEvent.type==="focusin"&&S.current&&w.preventDefault(),S.current=!1,O.current=!1}const x=pc(w=>{!I.isPointerEventsEnabled||!k||(i==null||i(w),l==null||l(w),u&&_(w),!w.defaultPrevented&&d&&d())},D),F=yc(w=>{k&&(o==null||o(w),l==null||l(w),u&&_(w),!w.defaultPrevented&&d&&d())},D);cc(w=>{!k||!(y===T.enabledCount()-1)||(s==null||s(w),!w.defaultPrevented&&d&&(w.preventDefault(),d()))},D),m.useEffect(()=>{if(!(!p||!k||!g))return Vr===0&&(zi=D.body.style.pointerEvents,D.body.style.pointerEvents="none"),Vr++,()=>{Vr===1&&(D.body.style.pointerEvents=zi),Vr--}},[p,D,g,T,k]),m.useEffect(()=>()=>T.values().forEach(w=>w.forceUpdate()),[T,p]);const q=a?st:"div";return c.createElement(q,Object.assign({ref:A},f,{onFocusCapture:F.onFocusCapture,onBlurCapture:F.onBlurCapture,onPointerDownCapture:x.onPointerDownCapture,style:Object.assign({pointerEvents:I.pointerStyle},f.style)}),n)}),et=Math.min,Ar=Math.max,ta=Math.round,Mt=Math.floor,$n=e=>({x:e,y:e}),wc={left:"right",right:"left",bottom:"top",top:"bottom"},Oc={start:"end",end:"start"};function vs(e,t,r){return Ar(e,et(t,r))}function wt(e,t){return typeof e=="function"?e(t):e}function wr(e){return e.split("-")[0]}function Ot(e){return e.split("-")[1]}function Sd(e){return e==="x"?"y":"x"}function zs(e){return e==="y"?"height":"width"}function nt(e){return["top","bottom"].includes(wr(e))?"y":"x"}function Xs(e){return Sd(nt(e))}function Sc(e,t,r){r===void 0&&(r=!1);const n=Ot(e),a=Xs(e),s=zs(a);let i=a==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=aa(i)),[i,aa(i)]}function Dc(e){const t=aa(e);return[bs(e),t,bs(t)]}function bs(e){return e.replace(/start|end/g,t=>Oc[t])}function Ic(e,t,r){const n=["left","right"],a=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return r?t?a:n:t?n:a;case"left":case"right":return t?s:i;default:return[]}}function qc(e,t,r,n){const a=Ot(e);let s=Ic(wr(e),r==="start",n);return a&&(s=s.map(i=>i+"-"+a),t&&(s=s.concat(s.map(bs)))),s}function aa(e){return e.replace(/left|right|bottom|top/g,t=>wc[t])}function _c(e){return{top:0,right:0,bottom:0,left:0,...e}}function Dd(e){return typeof e!="number"?_c(e):{top:e,right:e,bottom:e,left:e}}function sa(e){const{x:t,y:r,width:n,height:a}=e;return{width:n,height:a,top:r,left:t,right:t+n,bottom:r+a,x:t,y:r}}function Qi(e,t,r){let{reference:n,floating:a}=e;const s=nt(t),i=Xs(t),o=zs(i),l=wr(t),d=s==="y",u=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,k=n[o]/2-a[o]/2;let f;switch(l){case"top":f={x:u,y:n.y-a.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:g};break;case"left":f={x:n.x-a.width,y:g};break;default:f={x:n.x,y:n.y}}switch(Ot(t)){case"start":f[i]-=k*(r&&d?-1:1);break;case"end":f[i]+=k*(r&&d?-1:1);break}return f}const Nc=async(e,t,r)=>{const{placement:n="bottom",strategy:a="absolute",middleware:s=[],platform:i}=r,o=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let d=await i.getElementRects({reference:e,floating:t,strategy:a}),{x:u,y:g}=Qi(d,n,l),k=n,f={},v=0;for(let b=0;b<o.length;b++){const{name:y,fn:T}=o[b],{x:p,y:h,data:A,reset:D}=await T({x:u,y:g,initialPlacement:n,placement:k,strategy:a,middlewareData:f,rects:d,platform:i,elements:{reference:e,floating:t}});u=p??u,g=h??g,f={...f,[y]:{...f[y],...A}},D&&v<=50&&(v++,typeof D=="object"&&(D.placement&&(k=D.placement),D.rects&&(d=D.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:a}):D.rects),{x:u,y:g}=Qi(d,k,l)),b=-1)}return{x:u,y:g,placement:k,strategy:a,middlewareData:f}};async function Id(e,t){var r;t===void 0&&(t={});const{x:n,y:a,platform:s,rects:i,elements:o,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:k=!1,padding:f=0}=wt(t,e),v=Dd(f),y=o[k?g==="floating"?"reference":"floating":g],T=sa(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(y)))==null||r?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(o.floating)),boundary:d,rootBoundary:u,strategy:l})),p=g==="floating"?{x:n,y:a,width:i.floating.width,height:i.floating.height}:i.reference,h=await(s.getOffsetParent==null?void 0:s.getOffsetParent(o.floating)),A=await(s.isElement==null?void 0:s.isElement(h))?await(s.getScale==null?void 0:s.getScale(h))||{x:1,y:1}:{x:1,y:1},D=sa(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:p,offsetParent:h,strategy:l}):p);return{top:(T.top-D.top+v.top)/A.y,bottom:(D.bottom-T.bottom+v.bottom)/A.y,left:(T.left-D.left+v.left)/A.x,right:(D.right-T.right+v.right)/A.x}}const Pc=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:a,rects:s,platform:i,elements:o,middlewareData:l}=t,{element:d,padding:u=0}=wt(e,t)||{};if(d==null)return{};const g=Dd(u),k={x:r,y:n},f=Xs(a),v=zs(f),b=await i.getDimensions(d),y=f==="y",T=y?"top":"left",p=y?"bottom":"right",h=y?"clientHeight":"clientWidth",A=s.reference[v]+s.reference[f]-k[f]-s.floating[v],D=k[f]-s.reference[f],O=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let S=O?O[h]:0;(!S||!await(i.isElement==null?void 0:i.isElement(O)))&&(S=o.floating[h]||s.floating[v]);const I=A/2-D/2,_=S/2-b[v]/2-1,x=et(g[T],_),F=et(g[p],_),q=x,w=S-b[v]-F,N=S/2-b[v]/2+I,j=vs(q,N,w),L=!l.arrow&&Ot(a)!=null&&N!==j&&s.reference[v]/2-(N<q?x:F)-b[v]/2<0,B=L?N<q?N-q:N-w:0;return{[f]:k[f]+B,data:{[f]:j,centerOffset:N-j-B,...L&&{alignmentOffset:B}},reset:L}}}),jc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:a,middlewareData:s,rects:i,initialPlacement:o,platform:l,elements:d}=t,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:k,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:b=!0,...y}=wt(e,t);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const T=wr(a),p=nt(o),h=wr(o)===o,A=await(l.isRTL==null?void 0:l.isRTL(d.floating)),D=k||(h||!b?[aa(o)]:Dc(o)),O=v!=="none";!k&&O&&D.push(...qc(o,b,v,A));const S=[o,...D],I=await Id(t,y),_=[];let x=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&_.push(I[T]),g){const N=Sc(a,i,A);_.push(I[N[0]],I[N[1]])}if(x=[...x,{placement:a,overflows:_}],!_.every(N=>N<=0)){var F,q;const N=(((F=s.flip)==null?void 0:F.index)||0)+1,j=S[N];if(j)return{data:{index:N,overflows:x},reset:{placement:j}};let L=(q=x.filter(B=>B.overflows[0]<=0).sort((B,V)=>B.overflows[1]-V.overflows[1])[0])==null?void 0:q.placement;if(!L)switch(f){case"bestFit":{var w;const B=(w=x.filter(V=>{if(O){const U=nt(V.placement);return U===p||U==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(U=>U>0).reduce((U,$)=>U+$,0)]).sort((V,U)=>V[1]-U[1])[0])==null?void 0:w[0];B&&(L=B);break}case"initialPlacement":L=o;break}if(a!==L)return{reset:{placement:L}}}return{}}}};async function Fc(e,t){const{placement:r,platform:n,elements:a}=e,s=await(n.isRTL==null?void 0:n.isRTL(a.floating)),i=wr(r),o=Ot(r),l=nt(r)==="y",d=["left","top"].includes(i)?-1:1,u=s&&l?-1:1,g=wt(t,e);let{mainAxis:k,crossAxis:f,alignmentAxis:v}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return o&&typeof v=="number"&&(f=o==="end"?v*-1:v),l?{x:f*u,y:k*d}:{x:k*d,y:f*u}}const xc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:a,y:s,placement:i,middlewareData:o}=t,l=await Fc(t,e);return i===((r=o.offset)==null?void 0:r.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:a+l.x,y:s+l.y,data:{...l,placement:i}}}}},Mc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:a}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:o={fn:y=>{let{x:T,y:p}=y;return{x:T,y:p}}},...l}=wt(e,t),d={x:r,y:n},u=await Id(t,l),g=nt(wr(a)),k=Sd(g);let f=d[k],v=d[g];if(s){const y=k==="y"?"top":"left",T=k==="y"?"bottom":"right",p=f+u[y],h=f-u[T];f=vs(p,f,h)}if(i){const y=g==="y"?"top":"left",T=g==="y"?"bottom":"right",p=v+u[y],h=v-u[T];v=vs(p,v,h)}const b=o.fn({...t,[k]:f,[g]:v});return{...b,data:{x:b.x-r,y:b.y-n,enabled:{[k]:s,[g]:i}}}}}};function Sa(){return typeof window<"u"}function pr(e){return qd(e)?(e.nodeName||"").toLowerCase():"#document"}function pn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Wn(e){var t;return(t=(qd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qd(e){return Sa()?e instanceof Node||e instanceof pn(e).Node:!1}function je(e){return Sa()?e instanceof Element||e instanceof pn(e).Element:!1}function Qe(e){return Sa()?e instanceof HTMLElement||e instanceof pn(e).HTMLElement:!1}function ia(e){return!Sa()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof pn(e).ShadowRoot}function St(e){const{overflow:t,overflowX:r,overflowY:n,display:a}=Nn(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(a)}function Uc(e){return["table","td","th"].includes(pr(e))}function Da(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Qs(e){const t=Ia(),r=je(e)?Nn(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Bc(e){let t=rr(e);for(;Qe(t)&&!Zn(t);){if(Qs(t))return t;if(Da(t))return null;t=rr(t)}return null}function Ia(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Zn(e){return["html","body","#document"].includes(pr(e))}function Nn(e){return pn(e).getComputedStyle(e)}function qa(e){return je(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function rr(e){if(pr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ia(e)&&e.host||Wn(e);return ia(t)?t.host:t}function _d(e){const t=rr(e);return Zn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Qe(t)&&St(t)?t:_d(t)}function cr(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const a=_d(e),s=a===((n=e.ownerDocument)==null?void 0:n.body),i=pn(a);if(s){const o=hs(i);return t.concat(i,i.visualViewport||[],St(a)?a:[],o&&r?cr(o):[])}return t.concat(a,cr(a,[],r))}function hs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Nd(e){const t=Nn(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const a=Qe(e),s=a?e.offsetWidth:r,i=a?e.offsetHeight:n,o=ta(r)!==s||ta(n)!==i;return o&&(r=s,n=i),{width:r,height:n,$:o}}function Js(e){return je(e)?e:e.contextElement}function zr(e){const t=Js(e);if(!Qe(t))return $n(1);const r=t.getBoundingClientRect(),{width:n,height:a,$:s}=Nd(t);let i=(s?ta(r.width):r.width)/n,o=(s?ta(r.height):r.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const Vc=$n(0);function Pd(e){const t=pn(e);return!Ia()||!t.visualViewport?Vc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Lc(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==pn(e)?!1:t}function Or(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),s=Js(e);let i=$n(1);t&&(n?je(n)&&(i=zr(n)):i=zr(e));const o=Lc(s,r,n)?Pd(s):$n(0);let l=(a.left+o.x)/i.x,d=(a.top+o.y)/i.y,u=a.width/i.x,g=a.height/i.y;if(s){const k=pn(s),f=n&&je(n)?pn(n):n;let v=k,b=hs(v);for(;b&&n&&f!==v;){const y=zr(b),T=b.getBoundingClientRect(),p=Nn(b),h=T.left+(b.clientLeft+parseFloat(p.paddingLeft))*y.x,A=T.top+(b.clientTop+parseFloat(p.paddingTop))*y.y;l*=y.x,d*=y.y,u*=y.x,g*=y.y,l+=h,d+=A,v=pn(b),b=hs(v)}}return sa({width:u,height:g,x:l,y:d})}function Zs(e,t){const r=qa(e).scrollLeft;return t?t.left+r:Or(Wn(e)).left+r}function jd(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),a=n.left+t.scrollLeft-(r?0:Zs(e,n)),s=n.top+t.scrollTop;return{x:a,y:s}}function Kc(e){let{elements:t,rect:r,offsetParent:n,strategy:a}=e;const s=a==="fixed",i=Wn(n),o=t?Da(t.floating):!1;if(n===i||o&&s)return r;let l={scrollLeft:0,scrollTop:0},d=$n(1);const u=$n(0),g=Qe(n);if((g||!g&&!s)&&((pr(n)!=="body"||St(i))&&(l=qa(n)),Qe(n))){const f=Or(n);d=zr(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}const k=i&&!g&&!s?jd(i,l,!0):$n(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-l.scrollLeft*d.x+u.x+k.x,y:r.y*d.y-l.scrollTop*d.y+u.y+k.y}}function Cc(e){return Array.from(e.getClientRects())}function Gc(e){const t=Wn(e),r=qa(e),n=e.ownerDocument.body,a=Ar(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=Ar(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let i=-r.scrollLeft+Zs(e);const o=-r.scrollTop;return Nn(n).direction==="rtl"&&(i+=Ar(t.clientWidth,n.clientWidth)-a),{width:a,height:s,x:i,y:o}}function Hc(e,t){const r=pn(e),n=Wn(e),a=r.visualViewport;let s=n.clientWidth,i=n.clientHeight,o=0,l=0;if(a){s=a.width,i=a.height;const d=Ia();(!d||d&&t==="fixed")&&(o=a.offsetLeft,l=a.offsetTop)}return{width:s,height:i,x:o,y:l}}function $c(e,t){const r=Or(e,!0,t==="fixed"),n=r.top+e.clientTop,a=r.left+e.clientLeft,s=Qe(e)?zr(e):$n(1),i=e.clientWidth*s.x,o=e.clientHeight*s.y,l=a*s.x,d=n*s.y;return{width:i,height:o,x:l,y:d}}function Ji(e,t,r){let n;if(t==="viewport")n=Hc(e,r);else if(t==="document")n=Gc(Wn(e));else if(je(t))n=$c(t,r);else{const a=Pd(e);n={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return sa(n)}function Fd(e,t){const r=rr(e);return r===t||!je(r)||Zn(r)?!1:Nn(r).position==="fixed"||Fd(r,t)}function Yc(e,t){const r=t.get(e);if(r)return r;let n=cr(e,[],!1).filter(o=>je(o)&&pr(o)!=="body"),a=null;const s=Nn(e).position==="fixed";let i=s?rr(e):e;for(;je(i)&&!Zn(i);){const o=Nn(i),l=Qs(i);!l&&o.position==="fixed"&&(a=null),(s?!l&&!a:!l&&o.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||St(i)&&!l&&Fd(e,i))?n=n.filter(u=>u!==i):a=o,i=rr(i)}return t.set(e,n),n}function Wc(e){let{element:t,boundary:r,rootBoundary:n,strategy:a}=e;const i=[...r==="clippingAncestors"?Da(t)?[]:Yc(t,this._c):[].concat(r),n],o=i[0],l=i.reduce((d,u)=>{const g=Ji(t,u,a);return d.top=Ar(g.top,d.top),d.right=et(g.right,d.right),d.bottom=et(g.bottom,d.bottom),d.left=Ar(g.left,d.left),d},Ji(t,o,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function zc(e){const{width:t,height:r}=Nd(e);return{width:t,height:r}}function Xc(e,t,r){const n=Qe(t),a=Wn(t),s=r==="fixed",i=Or(e,!0,s,t);let o={scrollLeft:0,scrollTop:0};const l=$n(0);if(n||!n&&!s)if((pr(t)!=="body"||St(a))&&(o=qa(t)),n){const k=Or(t,!0,s,t);l.x=k.x+t.clientLeft,l.y=k.y+t.clientTop}else a&&(l.x=Zs(a));const d=a&&!n&&!s?jd(a,o):$n(0),u=i.left+o.scrollLeft-l.x-d.x,g=i.top+o.scrollTop-l.y-d.y;return{x:u,y:g,width:i.width,height:i.height}}function Ga(e){return Nn(e).position==="static"}function Zi(e,t){if(!Qe(e)||Nn(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Wn(e)===r&&(r=r.ownerDocument.body),r}function xd(e,t){const r=pn(e);if(Da(e))return r;if(!Qe(e)){let a=rr(e);for(;a&&!Zn(a);){if(je(a)&&!Ga(a))return a;a=rr(a)}return r}let n=Zi(e,t);for(;n&&Uc(n)&&Ga(n);)n=Zi(n,t);return n&&Zn(n)&&Ga(n)&&!Qs(n)?r:n||Bc(e)||r}const Qc=async function(e){const t=this.getOffsetParent||xd,r=this.getDimensions,n=await r(e.floating);return{reference:Xc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Jc(e){return Nn(e).direction==="rtl"}const Zc={convertOffsetParentRelativeRectToViewportRelativeRect:Kc,getDocumentElement:Wn,getClippingRect:Wc,getOffsetParent:xd,getElementRects:Qc,getClientRects:Cc,getDimensions:zc,getScale:zr,isElement:je,isRTL:Jc};function Md(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ey(e,t){let r=null,n;const a=Wn(e);function s(){var o;clearTimeout(n),(o=r)==null||o.disconnect(),r=null}function i(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),s();const d=e.getBoundingClientRect(),{left:u,top:g,width:k,height:f}=d;if(o||t(),!k||!f)return;const v=Mt(g),b=Mt(a.clientWidth-(u+k)),y=Mt(a.clientHeight-(g+f)),T=Mt(u),h={rootMargin:-v+"px "+-b+"px "+-y+"px "+-T+"px",threshold:Ar(0,et(1,l))||1};let A=!0;function D(O){const S=O[0].intersectionRatio;if(S!==l){if(!A)return i();S?i(!1,S):n=setTimeout(()=>{i(!1,1e-7)},1e3)}S===1&&!Md(d,e.getBoundingClientRect())&&i(),A=!1}try{r=new IntersectionObserver(D,{...h,root:a.ownerDocument})}catch{r=new IntersectionObserver(D,h)}r.observe(e)}return i(!0),s}function ei(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,d=Js(e),u=a||s?[...d?cr(d):[],...cr(t)]:[];u.forEach(T=>{a&&T.addEventListener("scroll",r,{passive:!0}),s&&T.addEventListener("resize",r)});const g=d&&o?ey(d,r):null;let k=-1,f=null;i&&(f=new ResizeObserver(T=>{let[p]=T;p&&p.target===d&&f&&(f.unobserve(t),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var h;(h=f)==null||h.observe(t)})),r()}),d&&!l&&f.observe(d),f.observe(t));let v,b=l?Or(e):null;l&&y();function y(){const T=Or(e);b&&!Md(b,T)&&r(),b=T,v=requestAnimationFrame(y)}return r(),()=>{var T;u.forEach(p=>{a&&p.removeEventListener("scroll",r),s&&p.removeEventListener("resize",r)}),g==null||g(),(T=f)==null||T.disconnect(),f=null,l&&cancelAnimationFrame(v)}}const ny=xc,ry=Mc,ty=jc,eo=Pc,ay=(e,t,r)=>{const n=new Map,a={platform:Zc,...r},s={...a.platform,_c:n};return Nc(e,t,{...a,platform:s})};var Jt=typeof document<"u"?m.useLayoutEffect:m.useEffect;function oa(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!oa(e[n],t[n]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,a[n]))return!1;for(n=r;n--!==0;){const s=a[n];if(!(s==="_owner"&&e.$$typeof)&&!oa(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function Ud(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function no(e,t){const r=Ud(e);return Math.round(t*r)/r}function Ha(e){const t=m.useRef(e);return Jt(()=>{t.current=e}),t}function sy(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:a,elements:{reference:s,floating:i}={},transform:o=!0,whileElementsMounted:l,open:d}=e,[u,g]=m.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[k,f]=m.useState(n);oa(k,n)||f(n);const[v,b]=m.useState(null),[y,T]=m.useState(null),p=m.useCallback(V=>{V!==O.current&&(O.current=V,b(V))},[]),h=m.useCallback(V=>{V!==S.current&&(S.current=V,T(V))},[]),A=s||v,D=i||y,O=m.useRef(null),S=m.useRef(null),I=m.useRef(u),_=l!=null,x=Ha(l),F=Ha(a),q=Ha(d),w=m.useCallback(()=>{if(!O.current||!S.current)return;const V={placement:t,strategy:r,middleware:k};F.current&&(V.platform=F.current),ay(O.current,S.current,V).then(U=>{const $={...U,isPositioned:q.current!==!1};N.current&&!oa(I.current,$)&&(I.current=$,Ls.flushSync(()=>{g($)}))})},[k,t,r,F,q]);Jt(()=>{d===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,g(V=>({...V,isPositioned:!1})))},[d]);const N=m.useRef(!1);Jt(()=>(N.current=!0,()=>{N.current=!1}),[]),Jt(()=>{if(A&&(O.current=A),D&&(S.current=D),A&&D){if(x.current)return x.current(A,D,w);w()}},[A,D,w,x,_]);const j=m.useMemo(()=>({reference:O,floating:S,setReference:p,setFloating:h}),[p,h]),L=m.useMemo(()=>({reference:A,floating:D}),[A,D]),B=m.useMemo(()=>{const V={position:r,left:0,top:0};if(!L.floating)return V;const U=no(L.floating,u.x),$=no(L.floating,u.y);return o?{...V,transform:"translate("+U+"px, "+$+"px)",...Ud(L.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:U,top:$}},[r,o,L.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:w,refs:j,elements:L,floatingStyles:B}),[u,w,j,L,B])}const iy=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:a}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?eo({element:n.current,padding:a}).fn(r):{}:n?eo({element:n,padding:a}).fn(r):{}}}},ni=(e,t)=>({...ny(e),options:[e,t]}),ri=(e,t)=>({...ry(e),options:[e,t]}),ti=(e,t)=>({...ty(e),options:[e,t]}),ai=(e,t)=>({...iy(e),options:[e,t]}),ro=/(\w+)/g;function oy(e,t){const r=Array.isArray(e)?e:ly(e);for(const n of t){if(!n)continue;let a=n;for(let s=0;s<r.length;s++){const i=a[r[s]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function ly(e){const t=[];let r=ro.exec(e);for(;r;){const[,n,a]=r;t.push(n||a),r=ro.exec(e)}return t}const dy=/{[^}]*}/g;function mn(e,...t){const r=Ws(),n=r.translations||[],a=[...t,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],r.locale[e]];return(i,o)=>{const l=oy(i,a);return o?l.replace(dy,d=>{const u=d.substring(1,d.length-1);if(o[u]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${g}'`)}return o[u]}):l}}function si(){const e=Ws(),t=e.translations||[],r=Array.isArray(t)?t.map(n=>n.global):[t.global];r.push(e.locale.global);for(const n of r)if(n!=null&&n.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var uy=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const gy=m.forwardRef((e,t)=>{var{className:r,size:n="medium",title:a,transparent:s=!1,variant:i="neutral",id:o}=e,l=uy(e,["className","size","title","transparent","variant","id"]);const{cn:d}=ee(),u=_n(),g=mn("Loader");return c.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${u}`,ref:t,className:d("navds-loader",r,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Ke(l,["children"])),c.createElement("title",{id:o??`loader-${u}`},a||g("title")),c.createElement("circle",{className:d("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),c.createElement("circle",{className:d("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var my=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Xe=m.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,icon:d,iconPosition:u="left",onKeyUp:g}=e,k=my(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:f}=ee(),v=l||o?Ke(k,["href"]):k,b=y=>{y.key===" "&&!l&&!o&&y.currentTarget.click()};return c.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},v,{ref:t,onKeyUp:Wr(g,b),className:f(a,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),d&&u==="left"&&c.createElement("span",{className:f("navds-button__icon")},d),o&&c.createElement(gy,{size:i}),s&&c.createElement(qn,{as:"span",size:i==="medium"?"medium":"small"},s),d&&u==="right"&&c.createElement("span",{className:f("navds-button__icon")},d))});var ky=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fy={error:hk,warning:Mm,info:Cm,success:Nm},ii=m.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:s="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:d=!1,onClose:u}=e,g=ky(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:k}=ee(),f=mn("Alert"),v=fy[a];return c.createElement("div",Object.assign({},g,{ref:t,className:k(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":d})}),c.createElement(v,{title:f(a),className:k("navds-alert__icon")}),c.createElement(kd,{as:"div",size:s,className:k("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},r),d&&!l&&c.createElement("div",{className:k("navds-alert__button-wrapper")},c.createElement(Xe,{className:k("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:c.createElement($s,{title:["error","warning"].includes(a)?f("closeAlert"):f("closeMessage")})})))});function jr(e,t,r){const n=de(e,r==null?void 0:r.in);return isNaN(t)?De((r==null?void 0:r.in)||e,NaN):(t&&n.setDate(n.getDate()+t),n)}function rt(e,t,r){const n=de(e,r==null?void 0:r.in);if(isNaN(t))return De(e,NaN);if(!t)return n;const a=n.getDate(),s=De(e,n.getTime());s.setMonth(n.getMonth()+t+1,0);const i=s.getDate();return a>=i?s:(n.setFullYear(s.getFullYear(),s.getMonth(),a),n)}function la(e,t){const r=de(e,t==null?void 0:t.in).getDay();return r===0||r===6}function Sr(e,t){return nr(e,{...t,weekStartsOn:1})}function Bd(e,t){const r=de(e,t==null?void 0:t.in),n=r.getFullYear(),a=De(r,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const s=Sr(a),i=De(r,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=Sr(i);return r.getTime()>=s.getTime()?n+1:r.getTime()>=o.getTime()?n:n-1}function da(e){const t=de(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Rn(e,t){const r=de(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function Qn(e,t,r){const[n,a]=Yn(r==null?void 0:r.in,e,t),s=Rn(n),i=Rn(a),o=+s-da(s),l=+i-da(i);return Math.round((o-l)/Ok)}function cy(e,t){const r=Bd(e,t),n=De(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),Sr(n)}function yy(e,t,r){return jr(e,t*7,r)}function Dr(e,t,r){return rt(e,t*12,r)}function py(e,t){let r,n=t==null?void 0:t.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=De.bind(null,a));const s=de(a,n);(!r||r<s||isNaN(+s))&&(r=s)}),De(n,r||NaN)}function vy(e,t){let r,n=t==null?void 0:t.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=De.bind(null,a));const s=de(a,n);(!r||r>s||isNaN(+s))&&(r=s)}),De(n,r||NaN)}function vt(e,t){const r=+de(e)-+de(t);return r<0?-1:r>0?1:r}function Ir(e,t,r){const[n,a]=Yn(r==null?void 0:r.in,e,t);return+Rn(n)==+Rn(a)}function Vd(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function by(e){return!(!Vd(e)&&typeof e!="number"||isNaN(+de(e)))}function Ld(e,t,r){const[n,a]=Yn(r==null?void 0:r.in,e,t),s=n.getFullYear()-a.getFullYear(),i=n.getMonth()-a.getMonth();return s*12+i}function hy(e,t,r){const[n,a]=Yn(r==null?void 0:r.in,e,t);return n.getFullYear()-a.getFullYear()}function Kd(e,t,r){const[n,a]=Yn(r==null?void 0:r.in,e,t),s=to(n,a),i=Math.abs(Qn(n,a));n.setDate(n.getDate()-s*i);const o=+(to(n,a)===-s),l=s*(i-o);return l===0?0:l}function to(e,t){const r=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return r<0?-1:r>0?1:r}function ao(e,t){return+de(e)-+de(t)}function ua(e,t){const r=de(e,t==null?void 0:t.in);return r.setHours(23,59,59,999),r}function _a(e,t){const r=de(e,t==null?void 0:t.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function Ty(e,t){const r=de(e,t==null?void 0:t.in);return+ua(r,t)==+_a(r,t)}function Ey(e,t,r){const[n,a,s]=Yn(r==null?void 0:r.in,e,e,t),i=vt(a,s),o=Math.abs(Ld(a,s));if(o<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-i*o);let l=vt(a,s)===-i;Ty(n)&&o===1&&vt(n,s)===1&&(l=!1);const d=i*(o-+l);return d===0?0:d}function Ry(e,t,r){const[n,a]=Yn(r==null?void 0:r.in,e,t),s=vt(n,a),i=Math.abs(hy(n,a));n.setFullYear(1584),a.setFullYear(1584);const o=vt(n,a)===-s,l=s*(i-+o);return l===0?0:l}function Ay(e,t){const[r,n]=Yn(e,t.start,t.end);return{start:r,end:n}}function Cd(e,t){const{start:r,end:n}=Ay(t==null?void 0:t.in,e);let a=+r>+n;const s=a?+r:+n,i=a?n:r;i.setHours(0,0,0,0),i.setDate(1);let o=1;const l=[];for(;+i<=s;)l.push(De(r,i)),i.setMonth(i.getMonth()+o);return a?l.reverse():l}function yr(e,t){const r=de(e,t==null?void 0:t.in);return r.setDate(1),r.setHours(0,0,0,0),r}function Dt(e,t){const r=de(e,t==null?void 0:t.in),n=r.getFullYear();return r.setFullYear(n+1,0,0),r.setHours(23,59,59,999),r}function dt(e,t){const r=de(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Gd(e,t){var o,l,d,u;const r=Pr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,a=de(e,t==null?void 0:t.in),s=a.getDay(),i=(s<n?-7:0)+6-(s-n);return a.setDate(a.getDate()+i),a.setHours(23,59,59,999),a}function wy(e,t){return Gd(e,{...t,weekStartsOn:1})}function Oy(e,t){const r=de(e,t==null?void 0:t.in);return Qn(r,dt(r))+1}function oi(e,t){const r=de(e,t==null?void 0:t.in),n=+Sr(r)-+cy(r);return Math.round(n/pd)+1}function li(e,t){var u,g,k,f;const r=de(e,t==null?void 0:t.in),n=r.getFullYear(),a=Pr(),s=(t==null?void 0:t.firstWeekContainsDate)??((g=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((f=(k=a.locale)==null?void 0:k.options)==null?void 0:f.firstWeekContainsDate)??1,i=De((t==null?void 0:t.in)||e,0);i.setFullYear(n+1,0,s),i.setHours(0,0,0,0);const o=nr(i,t),l=De((t==null?void 0:t.in)||e,0);l.setFullYear(n,0,s),l.setHours(0,0,0,0);const d=nr(l,t);return+r>=+o?n+1:+r>=+d?n:n-1}function Sy(e,t){var o,l,d,u;const r=Pr(),n=(t==null?void 0:t.firstWeekContainsDate)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??1,a=li(e,t),s=De((t==null?void 0:t.in)||e,0);return s.setFullYear(a,0,n),s.setHours(0,0,0,0),nr(s,t)}function di(e,t){const r=de(e,t==null?void 0:t.in),n=+nr(r,t)-+Sy(r,t);return Math.round(n/pd)+1}function Se(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const ir={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return Se(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):Se(r+1,2)},d(e,t){return Se(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return Se(e.getHours()%12||12,t.length)},H(e,t){return Se(e.getHours(),t.length)},m(e,t){return Se(e.getMinutes(),t.length)},s(e,t){return Se(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),a=Math.trunc(n*Math.pow(10,r-3));return Se(a,t.length)}},Lr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},so={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return ir.y(e,t)},Y:function(e,t,r,n){const a=li(e,n),s=a>0?a:1-a;if(t==="YY"){const i=s%100;return Se(i,2)}return t==="Yo"?r.ordinalNumber(s,{unit:"year"}):Se(s,t.length)},R:function(e,t){const r=Bd(e);return Se(r,t.length)},u:function(e,t){const r=e.getFullYear();return Se(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return Se(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return Se(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return ir.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return Se(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const a=di(e,n);return t==="wo"?r.ordinalNumber(a,{unit:"week"}):Se(a,t.length)},I:function(e,t,r){const n=oi(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):Se(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):ir.d(e,t)},D:function(e,t,r){const n=Oy(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):Se(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return Se(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return Se(s,t.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),a=n===0?7:n;switch(t){case"i":return String(a);case"ii":return Se(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let a;switch(n===12?a=Lr.noon:n===0?a=Lr.midnight:a=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let a;switch(n>=17?a=Lr.evening:n>=12?a=Lr.afternoon:n>=4?a=Lr.morning:a=Lr.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return ir.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):ir.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):Se(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):Se(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):ir.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):ir.s(e,t)},S:function(e,t){return ir.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return oo(n);case"XXXX":case"XX":return br(n);case"XXXXX":case"XXX":default:return br(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return oo(n);case"xxxx":case"xx":return br(n);case"xxxxx":case"xxx":default:return br(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+io(n,":");case"OOOO":default:return"GMT"+br(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+io(n,":");case"zzzz":default:return"GMT"+br(n,":")}},t:function(e,t,r){const n=Math.trunc(+e/1e3);return Se(n,t.length)},T:function(e,t,r){return Se(+e,t.length)}};function io(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),a=Math.trunc(n/60),s=n%60;return s===0?r+String(a):r+String(a)+t+Se(s,2)}function oo(e,t){return e%60===0?(e>0?"-":"+")+Se(Math.abs(e)/60,2):br(e,t)}function br(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),a=Se(Math.trunc(n/60),2),s=Se(n%60,2);return r+a+t+s}const lo=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Hd=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Dy=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],a=r[2];if(!a)return lo(e,t);let s;switch(n){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",lo(n,t)).replace("{{time}}",Hd(a,t))},Ts={p:Hd,P:Dy},Iy=/^D+$/,qy=/^Y+$/,_y=["D","DD","YY","YYYY"];function $d(e){return Iy.test(e)}function Yd(e){return qy.test(e)}function Es(e,t,r){const n=Ny(e,t,r);if(console.warn(n),_y.includes(e))throw new RangeError(n)}function Ny(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Py=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,jy=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Fy=/^'([^]*?)'?$/,xy=/''/g,My=/[a-zA-Z]/;function nn(e,t,r){var u,g,k,f,v,b,y,T;const n=Pr(),a=(r==null?void 0:r.locale)??n.locale??Oa,s=(r==null?void 0:r.firstWeekContainsDate)??((g=(u=r==null?void 0:r.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(k=n.locale)==null?void 0:k.options)==null?void 0:f.firstWeekContainsDate)??1,i=(r==null?void 0:r.weekStartsOn)??((b=(v=r==null?void 0:r.locale)==null?void 0:v.options)==null?void 0:b.weekStartsOn)??n.weekStartsOn??((T=(y=n.locale)==null?void 0:y.options)==null?void 0:T.weekStartsOn)??0,o=de(e,r==null?void 0:r.in);if(!by(o))throw new RangeError("Invalid time value");let l=t.match(jy).map(p=>{const h=p[0];if(h==="p"||h==="P"){const A=Ts[h];return A(p,a.formatLong)}return p}).join("").match(Py).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const h=p[0];if(h==="'")return{isToken:!1,value:Uy(p)};if(so[h])return{isToken:!0,value:p};if(h.match(My))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:p}});a.localize.preprocessor&&(l=a.localize.preprocessor(o,l));const d={firstWeekContainsDate:s,weekStartsOn:i,locale:a};return l.map(p=>{if(!p.isToken)return p.value;const h=p.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&Yd(h)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&$d(h))&&Es(h,t,String(e));const A=so[h[0]];return A(o,h,a.localize,d)}).join("")}function Uy(e){const t=e.match(Fy);return t?t[1].replace(xy,"'"):e}function By(e,t){const r=de(e,t==null?void 0:t.in),n=r.getFullYear(),a=r.getMonth(),s=De(r,0);return s.setFullYear(n,a+1,0),s.setHours(0,0,0,0),s.getDate()}function Vy(){return Object.assign({},Pr())}function Ly(e,t){const r=de(e,t==null?void 0:t.in).getDay();return r===0?7:r}function ui(e,t){return de(e,t==null?void 0:t.in).getMonth()}function gi(e,t){return de(e,t==null?void 0:t.in).getFullYear()}function mi(e,t){return+de(e)>+de(t)}function It(e,t){return+de(e)<+de(t)}function Ky(e,t){const r=Cy(t)?new t(0):De(t,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function Cy(e){var t;return typeof e=="function"&&((t=e.prototype)==null?void 0:t.constructor)===e}const Gy=10;class Wd{constructor(){X(this,"subPriority",0)}validate(t,r){return!0}}class Hy extends Wd{constructor(t,r,n,a,s){super(),this.value=t,this.validateValue=r,this.setValue=n,this.priority=a,s&&(this.subPriority=s)}validate(t,r){return this.validateValue(t,this.value,r)}set(t,r,n){return this.setValue(t,r,this.value,n)}}class $y extends Wd{constructor(r,n){super();X(this,"priority",Gy);X(this,"subPriority",-1);this.context=r||(a=>De(n,a))}set(r,n){return n.timestampIsSet?r:De(r,Ky(r,this.context))}}class he{run(t,r,n,a){const s=this.parse(t,r,n,a);return s?{setter:new Hy(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(t,r,n){return!0}}class Yy extends he{constructor(){super(...arguments);X(this,"priority",140);X(this,"incompatibleTokens",["R","u","t","T"])}parse(r,n,a){switch(n){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})||a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"})}}set(r,n,a){return n.era=a,r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}}const $e={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Ln={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Ye(e,t){return e&&{value:t(e.value),rest:e.rest}}function Le(e,t){const r=t.match(e);return r?{value:parseInt(r[0],10),rest:t.slice(r[0].length)}:null}function Kn(e,t){const r=t.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:t.slice(1)};const n=r[1]==="+"?1:-1,a=r[2]?parseInt(r[2],10):0,s=r[3]?parseInt(r[3],10):0,i=r[5]?parseInt(r[5],10):0;return{value:n*(a*Dk+s*Sk+i*Ik),rest:t.slice(r[0].length)}}function zd(e){return Le($e.anyDigitsSigned,e)}function Ge(e,t){switch(e){case 1:return Le($e.singleDigit,t);case 2:return Le($e.twoDigits,t);case 3:return Le($e.threeDigits,t);case 4:return Le($e.fourDigits,t);default:return Le(new RegExp("^\\d{1,"+e+"}"),t)}}function ga(e,t){switch(e){case 1:return Le($e.singleDigitSigned,t);case 2:return Le($e.twoDigitsSigned,t);case 3:return Le($e.threeDigitsSigned,t);case 4:return Le($e.fourDigitsSigned,t);default:return Le(new RegExp("^-?\\d{1,"+e+"}"),t)}}function ki(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Xd(e,t){const r=t>0,n=r?t:1-t;let a;if(n<=50)a=e||100;else{const s=n+50,i=Math.trunc(s/100)*100,o=e>=s%100;a=e+i-(o?100:0)}return r?a:1-a}function Qd(e){return e%400===0||e%4===0&&e%100!==0}class Wy extends he{constructor(){super(...arguments);X(this,"priority",130);X(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(r,n,a){const s=i=>({year:i,isTwoDigitYear:n==="yy"});switch(n){case"y":return Ye(Ge(4,r),s);case"yo":return Ye(a.ordinalNumber(r,{unit:"year"}),s);default:return Ye(Ge(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,a){const s=r.getFullYear();if(a.isTwoDigitYear){const o=Xd(a.year,s);return r.setFullYear(o,0,1),r.setHours(0,0,0,0),r}const i=!("era"in n)||n.era===1?a.year:1-a.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}}class zy extends he{constructor(){super(...arguments);X(this,"priority",130);X(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(r,n,a){const s=i=>({year:i,isTwoDigitYear:n==="YY"});switch(n){case"Y":return Ye(Ge(4,r),s);case"Yo":return Ye(a.ordinalNumber(r,{unit:"year"}),s);default:return Ye(Ge(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,a,s){const i=li(r,s);if(a.isTwoDigitYear){const l=Xd(a.year,i);return r.setFullYear(l,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),nr(r,s)}const o=!("era"in n)||n.era===1?a.year:1-a.year;return r.setFullYear(o,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),nr(r,s)}}class Xy extends he{constructor(){super(...arguments);X(this,"priority",130);X(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(r,n){return ga(n==="R"?4:n.length,r)}set(r,n,a){const s=De(r,0);return s.setFullYear(a,0,4),s.setHours(0,0,0,0),Sr(s)}}class Qy extends he{constructor(){super(...arguments);X(this,"priority",130);X(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(r,n){return ga(n==="u"?4:n.length,r)}set(r,n,a){return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}}class Jy extends he{constructor(){super(...arguments);X(this,"priority",120);X(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"Q":case"QQ":return Ge(n.length,r);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})||a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=1&&n<=4}set(r,n,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}}class Zy extends he{constructor(){super(...arguments);X(this,"priority",120);X(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"q":case"qq":return Ge(n.length,r);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})||a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=1&&n<=4}set(r,n,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}}class ep extends he{constructor(){super(...arguments);X(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);X(this,"priority",110)}parse(r,n,a){const s=i=>i-1;switch(n){case"M":return Ye(Le($e.month,r),s);case"MM":return Ye(Ge(2,r),s);case"Mo":return Ye(a.ordinalNumber(r,{unit:"month"}),s);case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})||a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}}class np extends he{constructor(){super(...arguments);X(this,"priority",110);X(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(r,n,a){const s=i=>i-1;switch(n){case"L":return Ye(Le($e.month,r),s);case"LL":return Ye(Ge(2,r),s);case"Lo":return Ye(a.ordinalNumber(r,{unit:"month"}),s);case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})||a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}}function rp(e,t,r){const n=de(e,r==null?void 0:r.in),a=di(n,r)-t;return n.setDate(n.getDate()-a*7),de(n,r==null?void 0:r.in)}class tp extends he{constructor(){super(...arguments);X(this,"priority",100);X(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(r,n,a){switch(n){case"w":return Le($e.week,r);case"wo":return a.ordinalNumber(r,{unit:"week"});default:return Ge(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,a,s){return nr(rp(r,a,s),s)}}function ap(e,t,r){const n=de(e,r==null?void 0:r.in),a=oi(n,r)-t;return n.setDate(n.getDate()-a*7),n}class sp extends he{constructor(){super(...arguments);X(this,"priority",100);X(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(r,n,a){switch(n){case"I":return Le($e.week,r);case"Io":return a.ordinalNumber(r,{unit:"week"});default:return Ge(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,a){return Sr(ap(r,a))}}const ip=[31,28,31,30,31,30,31,31,30,31,30,31],op=[31,29,31,30,31,30,31,31,30,31,30,31];class lp extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"subPriority",1);X(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"d":return Le($e.date,r);case"do":return a.ordinalNumber(r,{unit:"date"});default:return Ge(n.length,r)}}validate(r,n){const a=r.getFullYear(),s=Qd(a),i=r.getMonth();return s?n>=1&&n<=op[i]:n>=1&&n<=ip[i]}set(r,n,a){return r.setDate(a),r.setHours(0,0,0,0),r}}class dp extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"subpriority",1);X(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(r,n,a){switch(n){case"D":case"DD":return Le($e.dayOfYear,r);case"Do":return a.ordinalNumber(r,{unit:"date"});default:return Ge(n.length,r)}}validate(r,n){const a=r.getFullYear();return Qd(a)?n>=1&&n<=366:n>=1&&n<=365}set(r,n,a){return r.setMonth(0,a),r.setHours(0,0,0,0),r}}function fi(e,t,r){var g,k,f,v;const n=Pr(),a=(r==null?void 0:r.weekStartsOn)??((k=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:k.weekStartsOn)??n.weekStartsOn??((v=(f=n.locale)==null?void 0:f.options)==null?void 0:v.weekStartsOn)??0,s=de(e,r==null?void 0:r.in),i=s.getDay(),l=(t%7+7)%7,d=7-a,u=t<0||t>6?t-(i+d)%7:(l+d)%7-(i+d)%7;return jr(s,u,r)}class up extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,s){return r=fi(r,a,s),r.setHours(0,0,0,0),r}}class gp extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(r,n,a,s){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+l};switch(n){case"e":case"ee":return Ye(Ge(n.length,r),i);case"eo":return Ye(a.ordinalNumber(r,{unit:"day"}),i);case"eee":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,s){return r=fi(r,a,s),r.setHours(0,0,0,0),r}}class mp extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(r,n,a,s){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+l};switch(n){case"c":case"cc":return Ye(Ge(n.length,r),i);case"co":return Ye(a.ordinalNumber(r,{unit:"day"}),i);case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})||a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,s){return r=fi(r,a,s),r.setHours(0,0,0,0),r}}function kp(e,t,r){const n=de(e,r==null?void 0:r.in),a=Ly(n,r),s=t-a;return jr(n,s,r)}class fp extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(r,n,a){const s=i=>i===0?7:i;switch(n){case"i":case"ii":return Ge(n.length,r);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return Ye(a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s);case"iiiii":return Ye(a.day(r,{width:"narrow",context:"formatting"}),s);case"iiiiii":return Ye(a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s);case"iiii":default:return Ye(a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s)}}validate(r,n){return n>=1&&n<=7}set(r,n,a){return r=kp(r,a),r.setHours(0,0,0,0),r}}class cp extends he{constructor(){super(...arguments);X(this,"priority",80);X(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(r,n,a){switch(n){case"a":case"aa":case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(ki(a),0,0,0),r}}class yp extends he{constructor(){super(...arguments);X(this,"priority",80);X(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(r,n,a){switch(n){case"b":case"bb":case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(ki(a),0,0,0),r}}class pp extends he{constructor(){super(...arguments);X(this,"priority",80);X(this,"incompatibleTokens",["a","b","t","T"])}parse(r,n,a){switch(n){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(ki(a),0,0,0),r}}class vp extends he{constructor(){super(...arguments);X(this,"priority",70);X(this,"incompatibleTokens",["H","K","k","t","T"])}parse(r,n,a){switch(n){case"h":return Le($e.hour12h,r);case"ho":return a.ordinalNumber(r,{unit:"hour"});default:return Ge(n.length,r)}}validate(r,n){return n>=1&&n<=12}set(r,n,a){const s=r.getHours()>=12;return s&&a<12?r.setHours(a+12,0,0,0):!s&&a===12?r.setHours(0,0,0,0):r.setHours(a,0,0,0),r}}class bp extends he{constructor(){super(...arguments);X(this,"priority",70);X(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(r,n,a){switch(n){case"H":return Le($e.hour23h,r);case"Ho":return a.ordinalNumber(r,{unit:"hour"});default:return Ge(n.length,r)}}validate(r,n){return n>=0&&n<=23}set(r,n,a){return r.setHours(a,0,0,0),r}}class hp extends he{constructor(){super(...arguments);X(this,"priority",70);X(this,"incompatibleTokens",["h","H","k","t","T"])}parse(r,n,a){switch(n){case"K":return Le($e.hour11h,r);case"Ko":return a.ordinalNumber(r,{unit:"hour"});default:return Ge(n.length,r)}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.getHours()>=12&&a<12?r.setHours(a+12,0,0,0):r.setHours(a,0,0,0),r}}class Tp extends he{constructor(){super(...arguments);X(this,"priority",70);X(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(r,n,a){switch(n){case"k":return Le($e.hour24h,r);case"ko":return a.ordinalNumber(r,{unit:"hour"});default:return Ge(n.length,r)}}validate(r,n){return n>=1&&n<=24}set(r,n,a){const s=a<=24?a%24:a;return r.setHours(s,0,0,0),r}}class Ep extends he{constructor(){super(...arguments);X(this,"priority",60);X(this,"incompatibleTokens",["t","T"])}parse(r,n,a){switch(n){case"m":return Le($e.minute,r);case"mo":return a.ordinalNumber(r,{unit:"minute"});default:return Ge(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,a){return r.setMinutes(a,0,0),r}}class Rp extends he{constructor(){super(...arguments);X(this,"priority",50);X(this,"incompatibleTokens",["t","T"])}parse(r,n,a){switch(n){case"s":return Le($e.second,r);case"so":return a.ordinalNumber(r,{unit:"second"});default:return Ge(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,a){return r.setSeconds(a,0),r}}class Ap extends he{constructor(){super(...arguments);X(this,"priority",30);X(this,"incompatibleTokens",["t","T"])}parse(r,n){const a=s=>Math.trunc(s*Math.pow(10,-n.length+3));return Ye(Ge(n.length,r),a)}set(r,n,a){return r.setMilliseconds(a),r}}class wp extends he{constructor(){super(...arguments);X(this,"priority",10);X(this,"incompatibleTokens",["t","T","x"])}parse(r,n){switch(n){case"X":return Kn(Ln.basicOptionalMinutes,r);case"XX":return Kn(Ln.basic,r);case"XXXX":return Kn(Ln.basicOptionalSeconds,r);case"XXXXX":return Kn(Ln.extendedOptionalSeconds,r);case"XXX":default:return Kn(Ln.extended,r)}}set(r,n,a){return n.timestampIsSet?r:De(r,r.getTime()-da(r)-a)}}class Op extends he{constructor(){super(...arguments);X(this,"priority",10);X(this,"incompatibleTokens",["t","T","X"])}parse(r,n){switch(n){case"x":return Kn(Ln.basicOptionalMinutes,r);case"xx":return Kn(Ln.basic,r);case"xxxx":return Kn(Ln.basicOptionalSeconds,r);case"xxxxx":return Kn(Ln.extendedOptionalSeconds,r);case"xxx":default:return Kn(Ln.extended,r)}}set(r,n,a){return n.timestampIsSet?r:De(r,r.getTime()-da(r)-a)}}class Sp extends he{constructor(){super(...arguments);X(this,"priority",40);X(this,"incompatibleTokens","*")}parse(r){return zd(r)}set(r,n,a){return[De(r,a*1e3),{timestampIsSet:!0}]}}class Dp extends he{constructor(){super(...arguments);X(this,"priority",20);X(this,"incompatibleTokens","*")}parse(r){return zd(r)}set(r,n,a){return[De(r,a),{timestampIsSet:!0}]}}const Ip={G:new Yy,y:new Wy,Y:new zy,R:new Xy,u:new Qy,Q:new Jy,q:new Zy,M:new ep,L:new np,w:new tp,I:new sp,d:new lp,D:new dp,E:new up,e:new gp,c:new mp,i:new fp,a:new cp,b:new yp,B:new pp,h:new vp,H:new bp,K:new hp,k:new Tp,m:new Ep,s:new Rp,S:new Ap,X:new wp,x:new Op,t:new Sp,T:new Dp},qp=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_p=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Np=/^'([^]*?)'?$/,Pp=/''/g,jp=/\S/,Fp=/[a-zA-Z]/;function Xr(e,t,r,n){var y,T,p,h,A,D,O,S;const a=()=>De((n==null?void 0:n.in)||r,NaN),s=Vy(),i=(n==null?void 0:n.locale)??s.locale??Oa,o=(n==null?void 0:n.firstWeekContainsDate)??((T=(y=n==null?void 0:n.locale)==null?void 0:y.options)==null?void 0:T.firstWeekContainsDate)??s.firstWeekContainsDate??((h=(p=s.locale)==null?void 0:p.options)==null?void 0:h.firstWeekContainsDate)??1,l=(n==null?void 0:n.weekStartsOn)??((D=(A=n==null?void 0:n.locale)==null?void 0:A.options)==null?void 0:D.weekStartsOn)??s.weekStartsOn??((S=(O=s.locale)==null?void 0:O.options)==null?void 0:S.weekStartsOn)??0;if(!t)return e?a():de(r,n==null?void 0:n.in);const d={firstWeekContainsDate:o,weekStartsOn:l,locale:i},u=[new $y(n==null?void 0:n.in,r)],g=t.match(_p).map(I=>{const _=I[0];if(_ in Ts){const x=Ts[_];return x(I,i.formatLong)}return I}).join("").match(qp),k=[];for(let I of g){!(n!=null&&n.useAdditionalWeekYearTokens)&&Yd(I)&&Es(I,t,e),!(n!=null&&n.useAdditionalDayOfYearTokens)&&$d(I)&&Es(I,t,e);const _=I[0],x=Ip[_];if(x){const{incompatibleTokens:F}=x;if(Array.isArray(F)){const w=k.find(N=>F.includes(N.token)||N.token===_);if(w)throw new RangeError(`The format string mustn't contain \`${w.fullToken}\` and \`${I}\` at the same time`)}else if(x.incompatibleTokens==="*"&&k.length>0)throw new RangeError(`The format string mustn't contain \`${I}\` and any other token at the same time`);k.push({token:_,fullToken:I});const q=x.run(e,I,i.match,d);if(!q)return a();u.push(q.setter),e=q.rest}else{if(_.match(Fp))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");if(I==="''"?I="'":_==="'"&&(I=xp(I)),e.indexOf(I)===0)e=e.slice(I.length);else return a()}}if(e.length>0&&jp.test(e))return a();const f=u.map(I=>I.priority).sort((I,_)=>_-I).filter((I,_,x)=>x.indexOf(I)===_).map(I=>u.filter(_=>_.priority===I).sort((_,x)=>x.subPriority-_.subPriority)).map(I=>I[0]);let v=de(r,n==null?void 0:n.in);if(isNaN(+v))return a();const b={};for(const I of f){if(!I.validate(v,d))return a();const _=I.set(v,b,d);Array.isArray(_)?(v=_[0],Object.assign(b,_[1])):v=_}return v}function xp(e){return e.match(Np)[1].replace(Pp,"'")}function Mp(e,t,r){const[n,a]=Yn(r==null?void 0:r.in,e,t);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}function Jd(e,t,r){const[n,a]=Yn(r==null?void 0:r.in,e,t);return n.getFullYear()===a.getFullYear()}function ci(e,t,r){return jr(e,-t,r)}function Zd(e,t,r){const n=de(e,r==null?void 0:r.in),a=n.getFullYear(),s=n.getDate(),i=De(e,0);i.setFullYear(a,t,15),i.setHours(0,0,0,0);const o=By(i);return n.setMonth(t,Math.min(s,o)),n}function eu(e,t,r){const n=de(e,r==null?void 0:r.in);return isNaN(+n)?De(e,NaN):(n.setFullYear(t),n)}function nu(e,t,r){return rt(e,-t,r)}function Up(e,t,r){const{years:n=0,months:a=0,weeks:s=0,days:i=0,hours:o=0,minutes:l=0,seconds:d=0}=t,u=nu(e,a+n*12,r),g=ci(u,i+s*7,r),k=l+o*60,v=(d+k*60)*1e3;return De(e,+g-v)}function Bp(e,t,r){return Dr(e,-t,r)}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Vp=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],ma=Vp.join(","),ru=typeof Element>"u",tt=ru?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ka=!ru&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},fa=function e(t,r){var n;r===void 0&&(r=!0);var a=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"inert"),s=a===""||a==="true",i=s||r&&t&&e(t.parentNode);return i},Lp=function(t){var r,n=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"contenteditable");return n===""||n==="true"},tu=function(t,r,n){if(fa(t))return[];var a=Array.prototype.slice.apply(t.querySelectorAll(ma));return r&&tt.call(t,ma)&&a.unshift(t),a=a.filter(n),a},au=function e(t,r,n){for(var a=[],s=Array.from(t);s.length;){var i=s.shift();if(!fa(i,!1))if(i.tagName==="SLOT"){var o=i.assignedElements(),l=o.length?o:i.children,d=e(l,!0,n);n.flatten?a.push.apply(a,d):a.push({scopeParent:i,candidates:d})}else{var u=tt.call(i,ma);u&&n.filter(i)&&(r||!t.includes(i))&&a.push(i);var g=i.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(i),k=!fa(g,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(i));if(g&&k){var f=e(g===!0?i.children:g.children,!0,n);n.flatten?a.push.apply(a,f):a.push({scopeParent:i,candidates:f})}else s.unshift.apply(s,i.children)}}return a},su=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},iu=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Lp(t))&&!su(t)?0:t.tabIndex},Kp=function(t,r){var n=iu(t);return n<0&&r&&!su(t)?0:n},Cp=function(t,r){return t.tabIndex===r.tabIndex?t.documentOrder-r.documentOrder:t.tabIndex-r.tabIndex},ou=function(t){return t.tagName==="INPUT"},Gp=function(t){return ou(t)&&t.type==="hidden"},Hp=function(t){var r=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(n){return n.tagName==="SUMMARY"});return r},$p=function(t,r){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===r)return t[n]},Yp=function(t){if(!t.name)return!0;var r=t.form||ka(t),n=function(o){return r.querySelectorAll('input[type="radio"][name="'+o+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=n(window.CSS.escape(t.name));else try{a=n(t.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var s=$p(a,t.form);return!s||s===t},Wp=function(t){return ou(t)&&t.type==="radio"},zp=function(t){return Wp(t)&&!Yp(t)},Xp=function(t){var r,n=t&&ka(t),a=(r=n)===null||r===void 0?void 0:r.host,s=!1;if(n&&n!==t){var i,o,l;for(s=!!((i=a)!==null&&i!==void 0&&(o=i.ownerDocument)!==null&&o!==void 0&&o.contains(a)||t!=null&&(l=t.ownerDocument)!==null&&l!==void 0&&l.contains(t));!s&&a;){var d,u,g;n=ka(a),a=(d=n)===null||d===void 0?void 0:d.host,s=!!((u=a)!==null&&u!==void 0&&(g=u.ownerDocument)!==null&&g!==void 0&&g.contains(a))}}return s},uo=function(t){var r=t.getBoundingClientRect(),n=r.width,a=r.height;return n===0&&a===0},Qp=function(t,r){var n=r.displayCheck,a=r.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var s=tt.call(t,"details>summary:first-of-type"),i=s?t.parentElement:t;if(tt.call(i,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="legacy-full"){if(typeof a=="function"){for(var o=t;t;){var l=t.parentElement,d=ka(t);if(l&&!l.shadowRoot&&a(l)===!0)return uo(t);t.assignedSlot?t=t.assignedSlot:!l&&d!==t.ownerDocument?t=d.host:t=l}t=o}if(Xp(t))return!t.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return uo(t);return!1},Jp=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var r=t.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var n=0;n<r.children.length;n++){var a=r.children.item(n);if(a.tagName==="LEGEND")return tt.call(r,"fieldset[disabled] *")?!0:!a.contains(t)}return!0}r=r.parentElement}return!1},Rs=function(t,r){return!(r.disabled||fa(r)||Gp(r)||Qp(r,t)||Hp(r)||Jp(r))},As=function(t,r){return!(zp(r)||iu(r)<0||!Rs(t,r))},Zp=function(t){var r=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(r)||r>=0)},ev=function e(t){var r=[],n=[];return t.forEach(function(a,s){var i=!!a.scopeParent,o=i?a.scopeParent:a,l=Kp(o,i),d=i?e(a.candidates):o;l===0?i?r.push.apply(r,d):r.push(o):n.push({documentOrder:s,tabIndex:l,item:a,isScope:i,content:d})}),n.sort(Cp).reduce(function(a,s){return s.isScope?a.push.apply(a,s.content):a.push(s.content),a},[]).concat(r)},yi=function(t,r){r=r||{};var n;return r.getShadowRoot?n=au([t],r.includeContainer,{filter:As.bind(null,r),flatten:!1,getShadowRoot:r.getShadowRoot,shadowRootFilter:Zp}):n=tu(t,r.includeContainer,As.bind(null,r)),ev(n)},nv=function(t,r){r=r||{};var n;return r.getShadowRoot?n=au([t],r.includeContainer,{filter:Rs.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):n=tu(t,r.includeContainer,Rs.bind(null,r)),n},lu=function(t,r){if(r=r||{},!t)throw new Error("No node provided");return tt.call(t,ma)===!1?!1:As(r,t)};function du(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function uu(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:r,version:n}=t;return r+"/"+n}).join(" "):navigator.userAgent}function gu(){return/apple/i.test(navigator.vendor)}function ws(){const e=/android/i;return e.test(du())||e.test(uu())}function rv(){return du().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function mu(){return uu().includes("jsdom/")}const go="data-floating-ui-focusable",tv="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function ur(e){let t=e.activeElement;for(;((r=t)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;t=t.shadowRoot.activeElement}return t}function an(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&ia(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function gr(e){return"composedPath"in e?e.composedPath()[0]:e.target}function $a(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}function av(e){return e.matches("html,body")}function sn(e){return(e==null?void 0:e.ownerDocument)||document}function ku(e){return Qe(e)&&e.matches(tv)}function mo(e){return e?e.getAttribute("role")==="combobox"&&ku(e):!1}function sv(e){if(!e||mu())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Os(e){return e?e.hasAttribute(go)?e:e.querySelector("["+go+"]")||e:null}function bt(e,t,r){r===void 0&&(r=!0);let n=e.filter(s=>{var i;return s.parentId===t&&((i=s.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=r?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(o=>{var l;return s.parentId===o.id&&((l=s.context)==null?void 0:l.open)})}):e,n=n.concat(a);return n}function ko(e,t){var r;let n=[],a=(r=e.find(s=>s.id===t))==null?void 0:r.parentId;for(;a;){const s=e.find(i=>i.id===a);a=s==null?void 0:s.parentId,s&&(n=n.concat(s))}return n}function Ya(e){e.preventDefault(),e.stopPropagation()}function iv(e){return"nativeEvent"in e}function ov(e){return e.mozInputSource===0&&e.isTrusted?!0:ws()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function lv(e){return mu()?!1:!ws()&&e.width===0&&e.height===0||ws()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Ss(e,t){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var cn=typeof document<"u"?m.useLayoutEffect:m.useEffect;const dv={...rd};function Tr(e){const t=m.useRef(e);return cn(()=>{t.current=e}),t}const uv=dv.useInsertionEffect,gv=uv||(e=>e());function En(e){const t=m.useRef(()=>{});return gv(()=>{t.current=e}),m.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current==null?void 0:t.current(...n)},[])}const Na=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function fu(e,t){const r=yi(e,Na()),n=r.length;if(n===0)return;const a=ur(sn(e)),s=r.indexOf(a),i=s===-1?t===1?0:n-1:s+t;return r[i]}function mv(e){return fu(sn(e).body,1)||e}function kv(e){return fu(sn(e).body,-1)||e}function fo(e,t){const r=t||e.currentTarget,n=e.relatedTarget;return!n||!an(r,n)}const fv="data-floating-ui-focusable",co="active",yo="selected",cv={...rd};let po=!1,yv=0;const vo=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+yv++;function pv(){const[e,t]=m.useState(()=>po?vo():void 0);return cn(()=>{e==null&&t(vo())},[]),m.useEffect(()=>{po=!0},[]),e}const vv=cv.useId,pi=vv||pv;function bv(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(a=>a(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){var n;(n=e.get(t))==null||n.delete(r)}}}const hv=m.createContext(null),Tv=m.createContext(null),vi=()=>{var e;return((e=m.useContext(hv))==null?void 0:e.id)||null},Pa=()=>m.useContext(Tv);function qr(e){return"data-floating-ui-"+e}function wn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const bo=qr("safe-polygon");function Wa(e,t,r){if(r&&!Ss(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n==null?void 0:n[t]}return e==null?void 0:e[t]}function za(e){return typeof e=="function"?e():e}function cu(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:a,events:s,elements:i}=e,{enabled:o=!0,delay:l=0,handleClose:d=null,mouseOnly:u=!1,restMs:g=0,move:k=!0}=t,f=Pa(),v=vi(),b=Tr(d),y=Tr(l),T=Tr(r),p=Tr(g),h=m.useRef(),A=m.useRef(-1),D=m.useRef(),O=m.useRef(-1),S=m.useRef(!0),I=m.useRef(!1),_=m.useRef(()=>{}),x=m.useRef(!1),F=m.useCallback(()=>{var B;const V=(B=a.current.openEvent)==null?void 0:B.type;return(V==null?void 0:V.includes("mouse"))&&V!=="mousedown"},[a]);m.useEffect(()=>{if(!o)return;function B(V){let{open:U}=V;U||(wn(A),wn(O),S.current=!0,x.current=!1)}return s.on("openchange",B),()=>{s.off("openchange",B)}},[o,s]),m.useEffect(()=>{if(!o||!b.current||!r)return;function B(U){F()&&n(!1,U,"hover")}const V=sn(i.floating).documentElement;return V.addEventListener("mouseleave",B),()=>{V.removeEventListener("mouseleave",B)}},[i.floating,r,n,o,b,F]);const q=m.useCallback(function(B,V,U){V===void 0&&(V=!0),U===void 0&&(U="hover");const $=Wa(y.current,"close",h.current);$&&!D.current?(wn(A),A.current=window.setTimeout(()=>n(!1,B,U),$)):V&&(wn(A),n(!1,B,U))},[y,n]),w=En(()=>{_.current(),D.current=void 0}),N=En(()=>{if(I.current){const B=sn(i.floating).body;B.style.pointerEvents="",B.removeAttribute(bo),I.current=!1}}),j=En(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);m.useEffect(()=>{if(!o)return;function B(K){if(wn(A),S.current=!1,u&&!Ss(h.current)||za(p.current)>0&&!Wa(y.current,"open"))return;const re=Wa(y.current,"open",h.current);re?A.current=window.setTimeout(()=>{T.current||n(!0,K,"hover")},re):r||n(!0,K,"hover")}function V(K){if(j()){N();return}_.current();const re=sn(i.floating);if(wn(O),x.current=!1,b.current&&a.current.floatingContext){r||wn(A),D.current=b.current({...a.current.floatingContext,tree:f,x:K.clientX,y:K.clientY,onClose(){N(),w(),j()||q(K,!0,"safe-polygon")}});const z=D.current;re.addEventListener("mousemove",z),_.current=()=>{re.removeEventListener("mousemove",z)};return}(h.current==="touch"?!an(i.floating,K.relatedTarget):!0)&&q(K)}function U(K){j()||a.current.floatingContext&&(b.current==null||b.current({...a.current.floatingContext,tree:f,x:K.clientX,y:K.clientY,onClose(){N(),w(),j()||q(K)}})(K))}function $(){wn(A)}function Z(K){j()||q(K,!1)}if(je(i.domReference)){const K=i.domReference,re=i.floating;return r&&K.addEventListener("mouseleave",U),k&&K.addEventListener("mousemove",B,{once:!0}),K.addEventListener("mouseenter",B),K.addEventListener("mouseleave",V),re&&(re.addEventListener("mouseleave",U),re.addEventListener("mouseenter",$),re.addEventListener("mouseleave",Z)),()=>{r&&K.removeEventListener("mouseleave",U),k&&K.removeEventListener("mousemove",B),K.removeEventListener("mouseenter",B),K.removeEventListener("mouseleave",V),re&&(re.removeEventListener("mouseleave",U),re.removeEventListener("mouseenter",$),re.removeEventListener("mouseleave",Z))}}},[i,o,e,u,k,q,w,N,n,r,T,f,y,b,a,j,p]),cn(()=>{var B;if(o&&r&&(B=b.current)!=null&&B.__options.blockPointerEvents&&F()){I.current=!0;const U=i.floating;if(je(i.domReference)&&U){var V;const $=sn(i.floating).body;$.setAttribute(bo,"");const Z=i.domReference,K=f==null||(V=f.nodesRef.current.find(re=>re.id===v))==null||(V=V.context)==null?void 0:V.elements.floating;return K&&(K.style.pointerEvents=""),$.style.pointerEvents="none",Z.style.pointerEvents="auto",U.style.pointerEvents="auto",()=>{$.style.pointerEvents="",Z.style.pointerEvents="",U.style.pointerEvents=""}}}},[o,r,v,i,f,b,F]),cn(()=>{r||(h.current=void 0,x.current=!1,w(),N())},[r,w,N]),m.useEffect(()=>()=>{w(),wn(A),wn(O),N()},[o,i.domReference,w,N]);const L=m.useMemo(()=>{function B(V){h.current=V.pointerType}return{onPointerDown:B,onPointerEnter:B,onMouseMove(V){const{nativeEvent:U}=V;function $(){!S.current&&!T.current&&n(!0,U,"hover")}u&&!Ss(h.current)||r||za(p.current)===0||x.current&&V.movementX**2+V.movementY**2<2||(wn(O),h.current==="touch"?$():(x.current=!0,O.current=window.setTimeout($,za(p.current))))}}},[u,n,r,T,p]);return m.useMemo(()=>o?{reference:L}:{},[o,L])}let ho=0;function Kr(e,t){t===void 0&&(t={});const{preventScroll:r=!1,cancelPrevious:n=!0,sync:a=!1}=t;n&&cancelAnimationFrame(ho);const s=()=>e==null?void 0:e.focus({preventScroll:r});a?s():ho=requestAnimationFrame(s)}function Xa(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&ia(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Ev(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Rv(e){return(e==null?void 0:e.ownerDocument)||document}let Cr=new WeakMap,Ut=new WeakSet,Bt={},Qa=0;const Av=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,yu=e=>e&&(e.host||yu(e.parentNode)),wv=(e,t)=>t.map(r=>{if(e.contains(r))return r;const n=yu(r);return e.contains(n)?n:null}).filter(r=>r!=null);function Ov(e,t,r,n){const a="data-floating-ui-inert",s=n?"inert":r?"aria-hidden":null,i=wv(t,e),o=new Set,l=new Set(i),d=[];Bt[a]||(Bt[a]=new WeakMap);const u=Bt[a];i.forEach(g),k(t),o.clear();function g(f){!f||o.has(f)||(o.add(f),f.parentNode&&g(f.parentNode))}function k(f){!f||l.has(f)||[].forEach.call(f.children,v=>{if(pr(v)!=="script")if(o.has(v))k(v);else{const b=s?v.getAttribute(s):null,y=b!==null&&b!=="false",T=Cr.get(v)||0,p=s?T+1:T,h=(u.get(v)||0)+1;Cr.set(v,p),u.set(v,h),d.push(v),p===1&&y&&Ut.add(v),h===1&&v.setAttribute(a,""),!y&&s&&v.setAttribute(s,s==="inert"?"":"true")}})}return Qa++,()=>{d.forEach(f=>{const v=Cr.get(f)||0,b=s?v-1:v,y=(u.get(f)||0)-1;Cr.set(f,b),u.set(f,y),b||(!Ut.has(f)&&s&&f.removeAttribute(s),Ut.delete(f)),y||f.removeAttribute(a)}),Qa--,Qa||(Cr=new WeakMap,Cr=new WeakMap,Ut=new WeakSet,Bt={})}}function To(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);const n=Rv(e[0]).body;return Ov(e.concat(Array.from(n.querySelectorAll("[aria-live]"))),n,t,r)}const bi={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0},Eo=m.forwardRef(function(t,r){const[n,a]=m.useState();cn(()=>{gu()&&a("button")},[]);const s={ref:r,tabIndex:0,role:n,"aria-hidden":n?void 0:!0,[qr("focus-guard")]:"",style:bi};return E.jsx("span",{...t,...s})}),Sv=m.createContext(null),Ro=qr("portal");function Dv(e){e===void 0&&(e={});const{id:t,root:r}=e,n=pi(),a=pu(),[s,i]=m.useState(null),o=m.useRef(null);return cn(()=>()=>{s==null||s.remove(),queueMicrotask(()=>{o.current=null})},[s]),cn(()=>{if(!n||o.current)return;const l=t?document.getElementById(t):null;if(!l)return;const d=document.createElement("div");d.id=n,d.setAttribute(Ro,""),l.appendChild(d),o.current=d,i(d)},[t,n]),cn(()=>{if(r===null||!n||o.current)return;let l=r||(a==null?void 0:a.portalNode);l&&!je(l)&&(l=l.current),l=l||document.body;let d=null;t&&(d=document.createElement("div"),d.id=t,l.appendChild(d));const u=document.createElement("div");u.id=n,u.setAttribute(Ro,""),l=d||l,l.appendChild(u),o.current=u,i(u)},[t,r,n,a]),s}const pu=()=>m.useContext(Sv);function Ao(e){return m.useMemo(()=>t=>{e.forEach(r=>{r&&(r.current=t)})},e)}const Iv=20;let hr=[];function qv(e){hr=hr.filter(t=>t.isConnected),e&&pr(e)!=="body"&&(hr.push(e),hr.length>Iv&&(hr=hr.slice(-20)))}function wo(){return hr.slice().reverse().find(e=>e.isConnected)}function _v(e){const t=Na();return lu(e,t)?e:yi(e,t)[0]||e}function Oo(e,t){var r;if(!t.current.includes("floating")&&!((r=e.getAttribute("role"))!=null&&r.includes("dialog")))return;const n=Na(),s=nv(e,n).filter(o=>{const l=o.getAttribute("data-tabindex")||"";return lu(o,n)||o.hasAttribute("data-tabindex")&&!l.startsWith("-")}),i=e.getAttribute("tabindex");t.current.includes("floating")||s.length===0?i!=="0"&&e.setAttribute("tabindex","0"):(i!=="-1"||e.hasAttribute("data-tabindex")&&e.getAttribute("data-tabindex")!=="-1")&&(e.setAttribute("tabindex","-1"),e.setAttribute("data-tabindex","-1"))}const Nv=m.forwardRef(function(t,r){return E.jsx("button",{...t,type:"button",ref:r,tabIndex:-1,style:bi})});function vu(e){const{context:t,children:r,disabled:n=!1,order:a=["content"],guards:s=!0,initialFocus:i=0,returnFocus:o=!0,restoreFocus:l=!1,modal:d=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:g=!0,outsideElementsInert:k=!1,getInsideElements:f=()=>[]}=e,{open:v,onOpenChange:b,events:y,dataRef:T,elements:{domReference:p,floating:h}}=t,A=En(()=>{var te;return(te=T.current.floatingContext)==null?void 0:te.nodeId}),D=En(f),O=typeof i=="number"&&i<0,S=mo(p)&&O,I=Av(),_=I?s:!0,x=!_||I&&k,F=Tr(a),q=Tr(i),w=Tr(o),N=Pa(),j=pu(),L=m.useRef(null),B=m.useRef(null),V=m.useRef(!1),U=m.useRef(!1),$=m.useRef(-1),Z=j!=null,K=Os(h),re=En(function(te){return te===void 0&&(te=K),te?yi(te,Na()):[]}),J=En(te=>{const se=re(te);return F.current.map(ue=>p&&ue==="reference"?p:K&&ue==="floating"?K:se).filter(Boolean).flat()});m.useEffect(()=>{if(n||!d)return;function te(ue){if(ue.key==="Tab"){an(K,ur(sn(K)))&&re().length===0&&!S&&Ya(ue);const ge=J(),ce=gr(ue);F.current[0]==="reference"&&ce===p&&(Ya(ue),ue.shiftKey?Kr(ge[ge.length-1]):Kr(ge[1])),F.current[1]==="floating"&&ce===K&&ue.shiftKey&&(Ya(ue),Kr(ge[0]))}}const se=sn(K);return se.addEventListener("keydown",te),()=>{se.removeEventListener("keydown",te)}},[n,p,K,d,F,S,re,J]),m.useEffect(()=>{if(n||!h)return;function te(se){const ue=gr(se),ce=re().indexOf(ue);ce!==-1&&($.current=ce)}return h.addEventListener("focusin",te),()=>{h.removeEventListener("focusin",te)}},[n,h,re]),m.useEffect(()=>{if(n||!g)return;function te(){U.current=!0,setTimeout(()=>{U.current=!1})}function se(ue){const ge=ue.relatedTarget,ce=ue.currentTarget;queueMicrotask(()=>{const rn=A(),xe=!(an(p,ge)||an(h,ge)||an(ge,h)||an(j==null?void 0:j.portalNode,ge)||ge!=null&&ge.hasAttribute(qr("focus-guard"))||N&&(bt(N.nodesRef.current,rn).find(Ce=>{var Te,R;return an((Te=Ce.context)==null?void 0:Te.elements.floating,ge)||an((R=Ce.context)==null?void 0:R.elements.domReference,ge)})||ko(N.nodesRef.current,rn).find(Ce=>{var Te,R,P;return[(Te=Ce.context)==null?void 0:Te.elements.floating,Os((R=Ce.context)==null?void 0:R.elements.floating)].includes(ge)||((P=Ce.context)==null?void 0:P.elements.domReference)===ge})));if(ce===p&&K&&Oo(K,F),l&&xe&&ur(sn(K))===sn(K).body){Qe(K)&&K.focus();const Ce=$.current,Te=re(),R=Te[Ce]||Te[Te.length-1]||K;Qe(R)&&R.focus()}(S||!d)&&ge&&xe&&!U.current&&ge!==wo()&&(V.current=!0,b(!1,ue,"focus-out"))})}if(h&&Qe(p))return p.addEventListener("focusout",se),p.addEventListener("pointerdown",te),h.addEventListener("focusout",se),()=>{p.removeEventListener("focusout",se),p.removeEventListener("pointerdown",te),h.removeEventListener("focusout",se)}},[n,p,h,K,d,N,j,b,g,l,re,S,A,F]);const z=m.useRef(null),Y=m.useRef(null),le=Ao([z,j==null?void 0:j.beforeInsideRef]),ie=Ao([Y,j==null?void 0:j.afterInsideRef]);m.useEffect(()=>{var te,se;if(n||!h)return;const ue=Array.from((j==null||(te=j.portalNode)==null?void 0:te.querySelectorAll("["+qr("portal")+"]"))||[]),ge=N?ko(N.nodesRef.current,A()):[],ce=N&&!d?ge.map(Te=>{var R;return(R=Te.context)==null?void 0:R.elements.floating}):[],rn=(se=ge.find(Te=>{var R;return mo(((R=Te.context)==null?void 0:R.elements.domReference)||null)}))==null||(se=se.context)==null?void 0:se.elements.domReference,xe=[h,rn,...ue,...ce,...D(),L.current,B.current,z.current,Y.current,j==null?void 0:j.beforeOutsideRef.current,j==null?void 0:j.afterOutsideRef.current,F.current.includes("reference")||S?p:null].filter(Te=>Te!=null),Ce=d||S?To(xe,!x,x):To(xe);return()=>{Ce()}},[n,p,h,d,F,j,S,_,x,N,A,D]),cn(()=>{if(n||!Qe(K))return;const te=sn(K),se=ur(te);queueMicrotask(()=>{const ue=J(K),ge=q.current,ce=(typeof ge=="number"?ue[ge]:ge.current)||K,rn=an(K,se);!O&&!rn&&v&&Kr(ce,{preventScroll:ce===K})})},[n,v,K,O,J,q]),cn(()=>{if(n||!K)return;let te=!1;const se=sn(K),ue=ur(se);qv(ue);function ge(xe){let{reason:Ce,event:Te,nested:R}=xe;if(["hover","safe-polygon"].includes(Ce)&&Te.type==="mouseleave"&&(V.current=!0),Ce==="outside-press")if(R)V.current=!1,te=!0;else if(ov(Te)||lv(Te))V.current=!1;else{let P=!1;document.createElement("div").focus({get preventScroll(){return P=!0,!1}}),P?(V.current=!1,te=!0):V.current=!0}}y.on("openchange",ge);const ce=se.createElement("span");ce.setAttribute("tabindex","-1"),ce.setAttribute("aria-hidden","true"),Object.assign(ce.style,bi),Z&&p&&p.insertAdjacentElement("afterend",ce);function rn(){if(typeof w.current=="boolean"){const xe=p||wo();return xe&&xe.isConnected?xe:ce}return w.current.current||ce}return()=>{y.off("openchange",ge);const xe=ur(se),Ce=an(h,xe)||N&&bt(N.nodesRef.current,A()).some(R=>{var P;return an((P=R.context)==null?void 0:P.elements.floating,xe)}),Te=rn();queueMicrotask(()=>{const R=_v(Te);w.current&&!V.current&&Qe(R)&&(!(R!==xe&&xe!==se.body)||Ce)&&R.focus({preventScroll:te}),ce.remove()})}},[n,h,K,w,T,y,N,Z,p,A]),m.useEffect(()=>{queueMicrotask(()=>{V.current=!1})},[n]),cn(()=>{if(!n&&j)return j.setFocusManagerState({modal:d,closeOnFocusOut:g,open:v,onOpenChange:b,domReference:p}),()=>{j.setFocusManagerState(null)}},[n,j,d,v,b,g,p]),cn(()=>{n||K&&Oo(K,F)},[n,K,F]);function fe(te){return n||!u||!d?null:E.jsx(Nv,{ref:te==="start"?L:B,onClick:se=>b(!1,se.nativeEvent),children:typeof u=="string"?u:"Dismiss"})}const He=!n&&_&&(d?!S:!0)&&(Z||d);return E.jsxs(E.Fragment,{children:[He&&E.jsx(Eo,{"data-type":"inside",ref:le,onFocus:te=>{if(d){const ue=J();Kr(a[0]==="reference"?ue[0]:ue[ue.length-1])}else if(j!=null&&j.preserveTabOrder&&j.portalNode)if(V.current=!1,fo(te,j.portalNode)){const ue=mv(p);ue==null||ue.focus()}else{var se;(se=j.beforeOutsideRef.current)==null||se.focus()}}}),!S&&fe("start"),r,fe("end"),He&&E.jsx(Eo,{"data-type":"inside",ref:ie,onFocus:te=>{if(d)Kr(J()[0]);else if(j!=null&&j.preserveTabOrder&&j.portalNode)if(g&&(V.current=!0),fo(te,j.portalNode)){const ue=kv(p);ue==null||ue.focus()}else{var se;(se=j.afterOutsideRef.current)==null||se.focus()}}})]})}const Pv={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},jv={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},So=e=>{var t,r;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e==null?void 0:e.outsidePress)!=null?r:!0}};function bu(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,elements:a,dataRef:s}=e,{enabled:i=!0,escapeKey:o=!0,outsidePress:l=!0,outsidePressEvent:d="pointerdown",referencePress:u=!1,referencePressEvent:g="pointerdown",ancestorScroll:k=!1,bubbles:f,capture:v}=t,b=Pa(),y=En(typeof l=="function"?l:()=>!1),T=typeof l=="function"?y:l,p=m.useRef(!1),h=m.useRef(!1),{escapeKey:A,outsidePress:D}=So(f),{escapeKey:O,outsidePress:S}=So(v),I=m.useRef(!1),_=En(j=>{var L;if(!r||!i||!o||j.key!=="Escape"||I.current)return;const B=(L=s.current.floatingContext)==null?void 0:L.nodeId,V=b?bt(b.nodesRef.current,B):[];if(!A&&(j.stopPropagation(),V.length>0)){let U=!0;if(V.forEach($=>{var Z;if((Z=$.context)!=null&&Z.open&&!$.context.dataRef.current.__escapeKeyBubbles){U=!1;return}}),!U)return}n(!1,iv(j)?j.nativeEvent:j,"escape-key")}),x=En(j=>{var L;const B=()=>{var V;_(j),(V=gr(j))==null||V.removeEventListener("keydown",B)};(L=gr(j))==null||L.addEventListener("keydown",B)}),F=En(j=>{var L;const B=p.current;p.current=!1;const V=h.current;if(h.current=!1,d==="click"&&V||B||typeof T=="function"&&!T(j))return;const U=gr(j),$="["+qr("inert")+"]",Z=sn(a.floating).querySelectorAll($);let K=je(U)?U:null;for(;K&&!Zn(K);){const Y=rr(K);if(Zn(Y)||!je(Y))break;K=Y}if(Z.length&&je(U)&&!av(U)&&!an(U,a.floating)&&Array.from(Z).every(Y=>!an(K,Y)))return;if(Qe(U)&&N){const Y=Zn(U),le=Nn(U),ie=/auto|scroll/,fe=Y||ie.test(le.overflowX),He=Y||ie.test(le.overflowY),te=fe&&U.clientWidth>0&&U.scrollWidth>U.clientWidth,se=He&&U.clientHeight>0&&U.scrollHeight>U.clientHeight,ue=le.direction==="rtl",ge=se&&(ue?j.offsetX<=U.offsetWidth-U.clientWidth:j.offsetX>U.clientWidth),ce=te&&j.offsetY>U.clientHeight;if(ge||ce)return}const re=(L=s.current.floatingContext)==null?void 0:L.nodeId,J=b&&bt(b.nodesRef.current,re).some(Y=>{var le;return $a(j,(le=Y.context)==null?void 0:le.elements.floating)});if($a(j,a.floating)||$a(j,a.domReference)||J)return;const z=b?bt(b.nodesRef.current,re):[];if(z.length>0){let Y=!0;if(z.forEach(le=>{var ie;if((ie=le.context)!=null&&ie.open&&!le.context.dataRef.current.__outsidePressBubbles){Y=!1;return}}),!Y)return}n(!1,j,"outside-press")}),q=En(j=>{var L;const B=()=>{var V;F(j),(V=gr(j))==null||V.removeEventListener(d,B)};(L=gr(j))==null||L.addEventListener(d,B)});m.useEffect(()=>{if(!r||!i)return;s.current.__escapeKeyBubbles=A,s.current.__outsidePressBubbles=D;let j=-1;function L(Z){n(!1,Z,"ancestor-scroll")}function B(){window.clearTimeout(j),I.current=!0}function V(){j=window.setTimeout(()=>{I.current=!1},Ia()?5:0)}const U=sn(a.floating);o&&(U.addEventListener("keydown",O?x:_,O),U.addEventListener("compositionstart",B),U.addEventListener("compositionend",V)),T&&U.addEventListener(d,S?q:F,S);let $=[];return k&&(je(a.domReference)&&($=cr(a.domReference)),je(a.floating)&&($=$.concat(cr(a.floating))),!je(a.reference)&&a.reference&&a.reference.contextElement&&($=$.concat(cr(a.reference.contextElement)))),$=$.filter(Z=>{var K;return Z!==((K=U.defaultView)==null?void 0:K.visualViewport)}),$.forEach(Z=>{Z.addEventListener("scroll",L,{passive:!0})}),()=>{o&&(U.removeEventListener("keydown",O?x:_,O),U.removeEventListener("compositionstart",B),U.removeEventListener("compositionend",V)),T&&U.removeEventListener(d,S?q:F,S),$.forEach(Z=>{Z.removeEventListener("scroll",L)}),window.clearTimeout(j)}},[s,a,o,T,d,r,n,k,i,A,D,_,O,x,F,S,q]),m.useEffect(()=>{p.current=!1},[T,d]);const w=m.useMemo(()=>({onKeyDown:_,...u&&{[Pv[g]]:j=>{n(!1,j.nativeEvent,"reference-press")},...g!=="click"&&{onClick(j){n(!1,j.nativeEvent,"reference-press")}}}}),[_,n,u,g]),N=m.useMemo(()=>({onKeyDown:_,onMouseDown(){h.current=!0},onMouseUp(){h.current=!0},[jv[d]]:()=>{p.current=!0}}),[_,d]);return m.useMemo(()=>i?{reference:w,floating:N}:{},[i,w,N])}function Fv(e){const{open:t=!1,onOpenChange:r,elements:n}=e,a=pi(),s=m.useRef({}),[i]=m.useState(()=>bv()),o=vi()!=null,[l,d]=m.useState(n.reference),u=En((f,v,b)=>{s.current.openEvent=f?v:void 0,i.emit("openchange",{open:f,event:v,reason:b,nested:o}),r==null||r(f,v,b)}),g=m.useMemo(()=>({setPositionReference:d}),[]),k=m.useMemo(()=>({reference:l||n.reference||null,floating:n.floating||null,domReference:n.reference}),[l,n.reference,n.floating]);return m.useMemo(()=>({dataRef:s,open:t,onOpenChange:u,elements:k,events:i,floatingId:a,refs:g}),[t,u,k,i,a,g])}function hi(e){e===void 0&&(e={});const{nodeId:t}=e,r=Fv({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,a=n.elements,[s,i]=m.useState(null),[o,l]=m.useState(null),u=(a==null?void 0:a.domReference)||s,g=m.useRef(null),k=Pa();cn(()=>{u&&(g.current=u)},[u]);const f=sy({...e,elements:{...a,...o&&{reference:o}}}),v=m.useCallback(h=>{const A=je(h)?{getBoundingClientRect:()=>h.getBoundingClientRect(),getClientRects:()=>h.getClientRects(),contextElement:h}:h;l(A),f.refs.setReference(A)},[f.refs]),b=m.useCallback(h=>{(je(h)||h===null)&&(g.current=h,i(h)),(je(f.refs.reference.current)||f.refs.reference.current===null||h!==null&&!je(h))&&f.refs.setReference(h)},[f.refs]),y=m.useMemo(()=>({...f.refs,setReference:b,setPositionReference:v,domReference:g}),[f.refs,b,v]),T=m.useMemo(()=>({...f.elements,domReference:u}),[f.elements,u]),p=m.useMemo(()=>({...f,...n,refs:y,elements:T,nodeId:t}),[f,y,T,t,n]);return cn(()=>{n.dataRef.current.floatingContext=p;const h=k==null?void 0:k.nodesRef.current.find(A=>A.id===t);h&&(h.context=p)}),m.useMemo(()=>({...f,context:p,refs:y,elements:T}),[f,y,T,p])}function Ja(){return rv()&&gu()}function hu(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,events:a,dataRef:s,elements:i}=e,{enabled:o=!0,visibleOnly:l=!0}=t,d=m.useRef(!1),u=m.useRef(-1),g=m.useRef(!0);m.useEffect(()=>{if(!o)return;const f=pn(i.domReference);function v(){!r&&Qe(i.domReference)&&i.domReference===ur(sn(i.domReference))&&(d.current=!0)}function b(){g.current=!0}function y(){g.current=!1}return f.addEventListener("blur",v),Ja()&&(f.addEventListener("keydown",b,!0),f.addEventListener("pointerdown",y,!0)),()=>{f.removeEventListener("blur",v),Ja()&&(f.removeEventListener("keydown",b,!0),f.removeEventListener("pointerdown",y,!0))}},[i.domReference,r,o]),m.useEffect(()=>{if(!o)return;function f(v){let{reason:b}=v;(b==="reference-press"||b==="escape-key")&&(d.current=!0)}return a.on("openchange",f),()=>{a.off("openchange",f)}},[a,o]),m.useEffect(()=>()=>{wn(u)},[]);const k=m.useMemo(()=>({onMouseLeave(){d.current=!1},onFocus(f){if(d.current)return;const v=gr(f.nativeEvent);if(l&&je(v)){if(Ja()&&!f.relatedTarget){if(!g.current&&!ku(v))return}else if(!sv(v))return}n(!0,f.nativeEvent,"focus")},onBlur(f){d.current=!1;const v=f.relatedTarget,b=f.nativeEvent,y=je(v)&&v.hasAttribute(qr("focus-guard"))&&v.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var T;const p=ur(i.domReference?i.domReference.ownerDocument:document);!v&&p===i.domReference||an((T=s.current.floatingContext)==null?void 0:T.refs.floating.current,p)||an(i.domReference,p)||y||n(!1,b,"focus")})}}),[s,i.domReference,n,l]);return m.useMemo(()=>o?{reference:k}:{},[o,k])}function Za(e,t,r){const n=new Map,a=r==="item";let s=e;if(a&&e){const{[co]:i,[yo]:o,...l}=e;s=l}return{...r==="floating"&&{tabIndex:-1,[fv]:""},...s,...t.map(i=>{const o=i?i[r]:null;return typeof o=="function"?e?o(e):null:o}).concat(e).reduce((i,o)=>(o&&Object.entries(o).forEach(l=>{let[d,u]=l;if(!(a&&[co,yo].includes(d)))if(d.indexOf("on")===0){if(n.has(d)||n.set(d,[]),typeof u=="function"){var g;(g=n.get(d))==null||g.push(u),i[d]=function(){for(var k,f=arguments.length,v=new Array(f),b=0;b<f;b++)v[b]=arguments[b];return(k=n.get(d))==null?void 0:k.map(y=>y(...v)).find(y=>y!==void 0)}}}else i[d]=u}),i),{})}}function Tu(e){e===void 0&&(e=[]);const t=e.map(o=>o==null?void 0:o.reference),r=e.map(o=>o==null?void 0:o.floating),n=e.map(o=>o==null?void 0:o.item),a=m.useCallback(o=>Za(o,e,"reference"),t),s=m.useCallback(o=>Za(o,e,"floating"),r),i=m.useCallback(o=>Za(o,e,"item"),n);return m.useMemo(()=>({getReferenceProps:a,getFloatingProps:s,getItemProps:i}),[a,s,i])}const xv=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function Eu(e,t){var r,n;t===void 0&&(t={});const{open:a,elements:s,floatingId:i}=e,{enabled:o=!0,role:l="dialog"}=t,d=pi(),u=((r=s.domReference)==null?void 0:r.id)||d,g=m.useMemo(()=>{var p;return((p=Os(s.floating))==null?void 0:p.id)||i},[s.floating,i]),k=(n=xv.get(l))!=null?n:l,v=vi()!=null,b=m.useMemo(()=>k==="tooltip"||l==="label"?{["aria-"+(l==="label"?"labelledby":"describedby")]:a?g:void 0}:{"aria-expanded":a?"true":"false","aria-haspopup":k==="alertdialog"?"dialog":k,"aria-controls":a?g:void 0,...k==="listbox"&&{role:"combobox"},...k==="menu"&&{id:u},...k==="menu"&&v&&{role:"menuitem"},...l==="select"&&{"aria-autocomplete":"none"},...l==="combobox"&&{"aria-autocomplete":"list"}},[k,g,v,a,u,l]),y=m.useMemo(()=>{const p={id:g,...k&&{role:k}};return k==="tooltip"||l==="label"?p:{...p,...k==="menu"&&{"aria-labelledby":u}}},[k,g,u,l]),T=m.useCallback(p=>{let{active:h,selected:A}=p;const D={role:"option",...h&&{id:g+"-fui-option"}};switch(l){case"select":return{...D,"aria-selected":h&&A};case"combobox":return{...D,"aria-selected":A}}return{}},[g,l]);return m.useMemo(()=>o?{reference:b,floating:y,item:T}:{},[o,b,y,T])}function Mv(e,t,r){r===void 0&&(r=!0);let n=e.filter(s=>{var i;return s.parentId===t&&((i=s.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=r?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(o=>{var l;return s.parentId===o.id&&((l=s.context)==null?void 0:l.open)})}):e,n=n.concat(a);return n}function Do(e,t){const[r,n]=e;let a=!1;const s=t.length;for(let i=0,o=s-1;i<s;o=i++){const[l,d]=t[i]||[0,0],[u,g]=t[o]||[0,0];d>=n!=g>=n&&r<=(u-l)*(n-d)/(g-d)+l&&(a=!a)}return a}function Uv(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function Ru(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:r=!1,requireIntent:n=!0}=e;let a,s=!1,i=null,o=null,l=performance.now();function d(g,k){const f=performance.now(),v=f-l;if(i===null||o===null||v===0)return i=g,o=k,l=f,null;const b=g-i,y=k-o,p=Math.sqrt(b*b+y*y)/v;return i=g,o=k,l=f,p}const u=g=>{let{x:k,y:f,placement:v,elements:b,onClose:y,nodeId:T,tree:p}=g;return function(A){function D(){clearTimeout(a),y()}if(clearTimeout(a),!b.domReference||!b.floating||v==null||k==null||f==null)return;const{clientX:O,clientY:S}=A,I=[O,S],_=Ev(A),x=A.type==="mouseleave",F=Xa(b.floating,_),q=Xa(b.domReference,_),w=b.domReference.getBoundingClientRect(),N=b.floating.getBoundingClientRect(),j=v.split("-")[0],L=k>N.right-N.width/2,B=f>N.bottom-N.height/2,V=Uv(I,w),U=N.width>w.width,$=N.height>w.height,Z=(U?w:N).left,K=(U?w:N).right,re=($?w:N).top,J=($?w:N).bottom;if(F&&(s=!0,!x))return;if(q&&(s=!1),q&&!x){s=!0;return}if(x&&je(A.relatedTarget)&&Xa(b.floating,A.relatedTarget)||p&&Mv(p.nodesRef.current,T).some(le=>{let{context:ie}=le;return ie==null?void 0:ie.open}))return;if(j==="top"&&f>=w.bottom-1||j==="bottom"&&f<=w.top+1||j==="left"&&k>=w.right-1||j==="right"&&k<=w.left+1)return D();let z=[];switch(j){case"top":z=[[Z,w.top+1],[Z,N.bottom-1],[K,N.bottom-1],[K,w.top+1]];break;case"bottom":z=[[Z,N.top+1],[Z,w.bottom-1],[K,w.bottom-1],[K,N.top+1]];break;case"left":z=[[N.right-1,J],[N.right-1,re],[w.left+1,re],[w.left+1,J]];break;case"right":z=[[w.right-1,J],[w.right-1,re],[N.left+1,re],[N.left+1,J]];break}function Y(le){let[ie,fe]=le;switch(j){case"top":{const He=[U?ie+t/2:L?ie+t*4:ie-t*4,fe+t+1],te=[U?ie-t/2:L?ie+t*4:ie-t*4,fe+t+1],se=[[N.left,L||U?N.bottom-t:N.top],[N.right,L?U?N.bottom-t:N.top:N.bottom-t]];return[He,te,...se]}case"bottom":{const He=[U?ie+t/2:L?ie+t*4:ie-t*4,fe-t],te=[U?ie-t/2:L?ie+t*4:ie-t*4,fe-t],se=[[N.left,L||U?N.top+t:N.bottom],[N.right,L?U?N.top+t:N.bottom:N.top+t]];return[He,te,...se]}case"left":{const He=[ie+t+1,$?fe+t/2:B?fe+t*4:fe-t*4],te=[ie+t+1,$?fe-t/2:B?fe+t*4:fe-t*4];return[...[[B||$?N.right-t:N.left,N.top],[B?$?N.right-t:N.left:N.right-t,N.bottom]],He,te]}case"right":{const He=[ie-t,$?fe+t/2:B?fe+t*4:fe-t*4],te=[ie-t,$?fe-t/2:B?fe+t*4:fe-t*4],se=[[B||$?N.left+t:N.right,N.top],[B?$?N.left+t:N.right:N.left+t,N.bottom]];return[He,te,...se]}}}if(!Do([O,S],z)){if(s&&!V)return D();if(!x&&n){const le=d(A.clientX,A.clientY);if(le!==null&&le<.1)return D()}Do([O,S],Y([k,f]))?!s&&n&&(a=window.setTimeout(D,40)):D()}}};return u.__options={blockPointerEvents:r},u}const ja=()=>{const{cn:e}=ee();return c.createElement(yd,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Ti=()=>{const{cn:e}=ee();return c.createElement(yd,{title:mn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},At=m.createContext(null),Fr=(e,t)=>{var r,n,a;const{size:s,error:i,errorId:o}=e,l=m.useContext(At),d=_n(),u=(r=e.id)!==null&&r!==void 0?r:`${t}-${d}`,g=o??`${t}-error-${d}`,k=`${t}-description-${d}`,f=(l==null?void 0:l.disabled)||e.disabled,v=((l==null?void 0:l.readOnly)||e.readOnly)&&!f||void 0,b=!f&&!v&&!!(i||l!=null&&l.error),y=!f&&!v&&!!i&&typeof i!="boolean",T=Object.assign({},b?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:y,hasError:b,errorId:g,inputDescriptionId:k,size:(n=s??(l==null?void 0:l.size))!==null&&n!==void 0?n:"medium",readOnly:v,inputProps:Object.assign(Object.assign({id:u},T),{"aria-describedby":at(e["aria-describedby"],{[k]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:y,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:b&&!!(l!=null&&l.error)})||void 0,disabled:f})}},Au={global:{dateLocale:Ed,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},wu={global:{dateLocale:Ad,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Ou=(e="nb")=>{switch(e){case"nn":return Ad;case"en":return Ed;default:return Rd}},Su=e=>{switch(e){case"nn":return wu.DatePicker;case"en":case"en-GB":return Au.DatePicker;default:return}},Bv=e=>{switch(e){case"nn":return wu.global;case"en":case"en-GB":return Au.global;default:return}},[Du,Fa]=Ra();var Vv=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const[Lv,Ei]=Ra({errorMessage:"useDateInputContext must be used with DateInputContext"}),Iu=m.forwardRef((e,t)=>{const{className:r,hideLabel:n=!1,label:a,description:s,variant:i="datepicker",setAnchorRef:o}=e,l=Vv(e,["className","hideLabel","label","description","variant","setAnchorRef"]),d=m.useRef(null),u=Fa().translate,{cn:g}=ee(),k=i==="datepicker",f={prefix:k?"datepicker-input":"monthpicker-input",iconTitle:{open:k?"openDatePicker":"openMonthPicker",close:k?"closeDatePicker":"closeMonthPicker"}},v=Ei(),{inputProps:b,size:y="medium",inputDescriptionId:T,errorId:p,showErrorMsg:h,hasError:A,readOnly:D}=Fr(e,f.prefix);return c.createElement("div",{className:g(r,"navds-form-field",`navds-form-field--${y}`,"navds-date__field",{"navds-text-field--error":A,"navds-date__field--error":A,"navds-form-field--disabled":!!b.disabled,"navds-text-field--disabled":!!b.disabled,"navds-form-field--readonly":D,"navds-text-field--readonly":D,"navds-date__field--readonly":D})},c.createElement(qn,{htmlFor:b.id,size:y,className:g("navds-form-field__label",{"navds-sr-only":n})},D&&c.createElement(ja,null),a),!!s&&c.createElement(_e,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":n}),id:T,size:y},s),c.createElement("div",{className:g("navds-date__field-wrapper")},c.createElement("input",Object.assign({ref:t},Ke(l,["error","errorId","size"]),b,{autoComplete:"off","aria-controls":v!=null&&v.open?v.ariaId:void 0,readOnly:D,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${y}`),size:k?11:14})),c.createElement("button",{disabled:b.disabled||D,tabIndex:D||v!=null&&v.open?-1:0,onClick:()=>{v==null||v.onOpen(),o==null||o(d.current)},type:"button",className:g("navds-date__field-button"),ref:d},c.createElement(qm,{title:u(f.iconTitle[v!=null&&v.open?"close":"open"])}))),c.createElement("div",{className:g("navds-form-field__error"),id:p,"aria-relevant":"additions removals","aria-live":"polite"},h&&c.createElement(lt,{size:y,showIcon:!0},e.error)))}),Kv=m.forwardRef((e,t)=>c.createElement(Iu,Object.assign({},e,{ref:t})));m.forwardRef((e,t)=>c.createElement(Iu,Object.assign({},e,{variant:"monthpicker",ref:t})));var Cv=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Gv=m.forwardRef((e,t)=>{var{className:r}=e,n=Cv(e,["className"]);const{cn:a}=ee();return c.createElement("div",Object.assign({},n,{ref:t,className:a("navds-modal__body",r)}))});var Hv=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const $v=m.forwardRef((e,t)=>{var{className:r}=e,n=Hv(e,["className"]);const{cn:a}=ee();return c.createElement("div",Object.assign({},n,{ref:t,className:a("navds-modal__footer",r)}))});var Yv=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const qu=m.forwardRef((e,t)=>{var{children:r,className:n,closeButton:a=!0}=e,s=Yv(e,["children","className","closeButton"]);const{cn:i}=ee(),o=wa(),l=mn("global");return c.createElement("div",Object.assign({},s,{ref:t,className:i("navds-modal__header",n)}),o.closeHandler&&a&&c.createElement(Xe,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:d=>{["Enter"," "].includes(d.key)&&d.repeat&&d.preventDefault()},onClick:o.closeHandler,icon:c.createElement($s,{title:l("close")})}),r)}),Io=({clientX:e,clientY:t},{left:r,top:n,right:a,bottom:s})=>!(e<r||t<n||e>a||t>s);function Wv(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var n;return r()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const Vt="navds-modal__document-body";function zv(e,t,r){c.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(Vt);const n=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Vt):document.body.classList.remove(Vt)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(Vt)}},[e,t,r])}const $r=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function _u(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function ht(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Nu(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Xv(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function es(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Pu(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(r.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(n=Pu(a[s].shadowRoot),n));s++);return n}function qo(e){return e.isConnected||document.body.contains(e)}function ju(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=ye.formSubmitter;if(!r){var n=e.target,a="getRootNode"in n&&n.getRootNode()||document;r=a.activeElement}return!r||r.form!==t?null:r}function Qv(e){if(!e.defaultPrevented){var t=e.target,r=ye.imagemapUseValue,n=ju(e);r===null&&n&&(r=n.value);var a=ht(t);if(a){var s=n&&n.getAttribute("formmethod")||t.getAttribute("method");s==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function Fu(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Qv,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,n=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,s=function(i){if(i.target===e){var o="DOMNodeRemoved";r|=i.type.substr(0,o.length)===o,window.clearTimeout(a),a=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Fu.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&qo(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),ye.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Pu(this.dialog_)),Nu(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!qo(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!ye.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,ye.needsCentering(this.dialog_)?(ye.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});_u(this.dialog_,t)}};var ye={};ye.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};ye.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],n=null;try{n=r.cssRules}catch{}if(n)for(var a=0;a<n.length;++a){var s=n[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!Xv(i,e))){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};ye.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!ye.isInlinePositionSetByStylesheet(e)};ye.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Fu(e)};ye.registerDialog=function(e){e.showModal||ye.forceRegisterDialog(e)};ye.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(n){for(var a=0,s;s=n.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&r.push(s),r=r.concat(s.querySelectorAll("dialog")))}),r.length&&e(r)}))};ye.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};ye.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};ye.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var a=n.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};ye.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=ht(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};ye.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Nu(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],n=r.dialog,a=n.compareDocumentPosition(t);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};ye.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&_u(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};ye.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};ye.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};ye.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};$r&&(ye.dm=new ye.DialogManager,ye.formSubmitter=null,ye.imagemapUseValue=null);if($r){var _o=document.createElement("form");if(_o.setAttribute("method","dialog"),_o.method!=="dialog"){var Gr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Gr){var Jv=Gr.get;Gr.get=function(){return es(this)?"dialog":Jv.call(this)};var Zv=Gr.set;Gr.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Zv.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Gr)}}document.addEventListener("click",function(e){if(ye.formSubmitter=null,ye.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!es(t.form))){var n=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!n){if(!(t.localName==="input"&&t.type==="image"))return;ye.imagemapUseValue=e.offsetX+","+e.offsetY}var a=ht(t);a&&(ye.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=ht(t);if(!r){var n=ju(e),a=n&&n.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&e.preventDefault()}});var eb=HTMLFormElement.prototype.submit,nb=function(){if(!es(this))return eb.call(this);var e=ht(this);e&&e.close()};HTMLFormElement.prototype.submit=nb}var rb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const kr=m.forwardRef((e,t)=>{var r,n,{header:a,children:s,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:d,width:u,placement:g,portal:k,className:f,"aria-labelledby":v,style:b,onClick:y,onMouseDown:T}=e,p=rb(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:h}=ee(),A=m.useRef(h("navds-modal--polyfilled")),D=m.useRef(null),O=Nr(D,t),S=_n(),I=(r=Ws())===null||r===void 0?void 0:r.rootElement,_=Dv({root:I}),x=Ei(!1),F=wa(!1)!==void 0;F&&!x&&console.error("Modals should not be nested"),m.useEffect(()=>{$r&&D.current&&_&&(ye.registerDialog(D.current),D.current.classList.add(A.current)),D.current&&_&&(D.current.autofocus=!0)},[_]),m.useEffect(()=>{D.current&&_&&i!==void 0&&(i&&!D.current.open?D.current.showModal():!i&&D.current.open&&D.current.close())},[_,i]),zv(D,_,F);const q=typeof u=="string"&&["small","medium"].includes(u),w=h("navds-modal",f,{[A.current]:$r,"navds-modal--autowidth":!u,[`navds-modal--${u}`]:q,"navds-modal--top":g==="top"&&!$r}),N=Object.assign(Object.assign({},b),q?{}:{width:u}),j=m.useRef({clientX:0,clientY:0}),L=K=>{j.current=K},B=d&&!$r,V=K=>{if(K.target!==D.current)return;const re=D.current.getBoundingClientRect();Io(j.current,re)||Io(K,re)||o!==void 0&&o()===!1||D.current.close()},U=K=>{o&&o()===!1&&K.preventDefault()},$=!v&&!p["aria-label"]&&a?S:v,Z=c.createElement("dialog",Object.assign({},p,{ref:O,className:w,style:N,onCancel:Wr(l,U),onClick:B?Wr(y,V):y,onMouseDown:B?Wr(T,L):T,"aria-labelledby":$}),c.createElement(Tk,{closeHandler:Wv(D,a,o),ref:D},a&&c.createElement(qu,null,a.label&&c.createElement(er,{className:h("navds-modal__label")},a.label),c.createElement(Cs,{size:(n=a.size)!==null&&n!==void 0?n:"medium",level:"1",id:S},a.icon&&c.createElement("span",{className:h("navds-modal__header-icon")},a.icon),a.heading)),s));return k?_?Ls.createPortal(Z,_):null:Z});kr.Header=qu;kr.Body=Gv;kr.Footer=$v;var tb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ab=m.forwardRef((e,t)=>{var{className:r}=e,n=tb(e,["className"]);const{cn:a}=ee();return c.createElement("div",Object.assign({},n,{ref:t,className:a("navds-popover__content",r)}))});var sb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const xu=m.forwardRef((e,t)=>{var{className:r,children:n,anchorEl:a,arrow:s=!0,open:i,onClose:o,placement:l="top",offset:d,strategy:u,flip:g=!0}=e,k=sb(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:f}=ee(),v=m.useRef(null),b=wa(!1)!==void 0,y=Ei(!1),T=u??(b?"fixed":"absolute"),p=y?!1:g,h=it(!1),{update:A,refs:D,placement:O,middlewareData:{arrow:{x:S,y:I}={}},floatingStyles:_}=hi({strategy:T,placement:l,open:i,middleware:[ni(d??(h?8:s?16:4)),p&&ti({padding:5,fallbackPlacements:["bottom","top"]}),ri({padding:12}),ai({element:v,padding:8})]});Zr(()=>{D.setReference(a)},[a]);const x=Nr(D.setFloating,t);Zr(()=>{if(!D.reference.current||!D.floating.current||!i)return;const q=ei(D.reference.current,D.floating.current,A);return()=>q()},[D.floating,D.reference,A,i,a]);const F={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];return c.createElement(Rc,{asChild:!0,safeZone:{anchor:a,dismissable:D.floating.current},onDismiss:()=>i&&(o==null?void 0:o()),enabled:i},c.createElement("div",Object.assign({ref:x},k,{className:f("navds-popover",r,{"navds-popover--hidden":!i||!a}),style:Object.assign(Object.assign({},k.style),_),"data-placement":O,"aria-hidden":!i||!a}),n,s&&!h&&c.createElement("div",{ref:q=>{v.current=q},style:Object.assign(Object.assign(Object.assign({},S!=null?{left:S}:{}),I!=null?{top:I}:{}),F?{[F]:"-0.5rem"}:{}),className:f("navds-popover__arrow")})))});xu.Content=ab;const ib={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},ob=({open:e,children:t,onClose:r,anchor:n,locale:a,translate:s,variant:i,popoverProps:o})=>{const l=mn("global",Bv(a)),{cn:d}=ee(),u=m.useRef(null),g=wa(!1)!==void 0;return Rk("screen and (min-width: 768px)",!0)&&!g?c.createElement(xu,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:d("navds-date__popover",{"navds-date":i==="month"}),flip:!1},o),t):c.createElement(kr,{ref:u,open:e,onClose:f=>{f.stopPropagation(),r()},"aria-label":s(ib[i]),className:d("navds-date__modal",{"navds-date__nested-modal":g,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},c.createElement("div",{className:d("navds-date__modal-body")},t,c.createElement(Xe,{variant:"tertiary",onClick:()=>{var f;return(f=u==null?void 0:u.current)===null||f===void 0?void 0:f.close()},size:"small",type:"button"},l("close"))))};function Mu(e){return!!(e&&typeof e=="object"&&"from"in e)}var ae;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(ae||(ae={}));var Fe;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Fe||(Fe={}));var Mn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Mn||(Mn={}));var hn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(hn||(hn={}));const ns={},pt={};function Tt(e,t){try{const n=(ns[e]||(ns[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(t).split("GMT")[1]||"";return n in pt?pt[n]:No(n,n.split(":"))}catch{if(e in pt)return pt[e];const r=e==null?void 0:e.match(lb);return r?No(e,r.slice(1)):NaN}}const lb=/([+-]\d\d):?(\d\d)?/;function No(e,t){const r=+t[0],n=+(t[1]||0);return pt[e]=r>0?r*60+n:r*60-n}class Gn extends Date{constructor(...t){super(),t.length>1&&typeof t[t.length-1]=="string"&&(this.timeZone=t.pop()),this.internal=new Date,isNaN(Tt(this.timeZone,this))?this.setTime(NaN):t.length?typeof t[0]=="number"&&(t.length===1||t.length===2&&typeof t[1]!="number")?this.setTime(t[0]):typeof t[0]=="string"?this.setTime(+new Date(t[0])):t[0]instanceof Date?this.setTime(+t[0]):(this.setTime(+new Date(...t)),Uu(this),Ds(this)):this.setTime(Date.now())}static tz(t,...r){return r.length?new Gn(...r,t):new Gn(Date.now(),t)}withTimeZone(t){return new Gn(+this,t)}getTimezoneOffset(){return-Tt(this.timeZone,this)}setTime(t){return Date.prototype.setTime.apply(this,arguments),Ds(this),+this}[Symbol.for("constructDateFrom")](t){return new Gn(+new Date(t),this.timeZone)}}const Po=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Po.test(e))return;const t=e.replace(Po,"$1UTC");Gn.prototype[t]&&(e.startsWith("get")?Gn.prototype[e]=function(){return this.internal[t]()}:(Gn.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),db(this),+this},Gn.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),Ds(this),+this}))});function Ds(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function db(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),Uu(e)}function Uu(e){const t=Tt(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),a=-new Date(+r).getTimezoneOffset(),s=n-a,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const o=n-t;o&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+o);const l=Tt(e.timeZone,e),u=-new Date(+e).getTimezoneOffset()-l,g=l!==t,k=u-o;if(g&&k){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+k);const f=Tt(e.timeZone,e),v=l-f;v&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+v),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+v))}}class Er extends Gn{static tz(t,...r){return r.length?new Er(...r,t):new Er(Date.now(),t)}toISOString(){const[t,r,n]=this.tzComponents(),a=`${t}${r}:${n}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[t,r,n,a]=this.internal.toUTCString().split(" ");return`${t==null?void 0:t.slice(0,-1)} ${n} ${r} ${a}`}toTimeString(){const t=this.internal.toUTCString().split(" ")[4],[r,n,a]=this.tzComponents();return`${t} GMT${r}${n}${a} (${ub(this.timeZone,this)})`}toLocaleString(t,r){return Date.prototype.toLocaleString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleDateString(t,r){return Date.prototype.toLocaleDateString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleTimeString(t,r){return Date.prototype.toLocaleTimeString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}tzComponents(){const t=this.getTimezoneOffset(),r=t>0?"-":"+",n=String(Math.floor(Math.abs(t)/60)).padStart(2,"0"),a=String(Math.abs(t)%60).padStart(2,"0");return[r,n,a]}withTimeZone(t){return new Er(+this,t)}[Symbol.for("constructDateFrom")](t){return new Er(+new Date(t),this.timeZone)}}function ub(e,t){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(t).slice(12)}const jo=5,gb=4;function mb(e,t){const r=t.startOfMonth(e),n=r.getDay()>0?r.getDay():7,a=t.addDays(e,-n+1),s=t.addDays(a,jo*7-1);return t.getMonth(e)===t.getMonth(s)?jo:gb}function Bu(e,t){const r=t.startOfMonth(e),n=r.getDay();return n===1?r:n===0?t.addDays(r,-1*6):t.addDays(r,-1*(n-1))}function kb(e,t){const r=Bu(e,t),n=mb(e,t);return t.addDays(r,n*7-1)}class ar{constructor(t,r){this.Date=Date,this.today=()=>{var n;return(n=this.overrides)!=null&&n.today?this.overrides.today():this.options.timeZone?Er.tz(this.options.timeZone):new this.Date},this.newDate=(n,a,s)=>{var i;return(i=this.overrides)!=null&&i.newDate?this.overrides.newDate(n,a,s):this.options.timeZone?new Er(n,a,s,this.options.timeZone):new Date(n,a,s)},this.addDays=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addDays)==null?void 0:i.call(s,n,a))??jr(n,a)},this.addMonths=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addMonths)==null?void 0:i.call(s,n,a))??rt(n,a)},this.addWeeks=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addWeeks)==null?void 0:i.call(s,n,a))??yy(n,a)},this.addYears=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addYears)==null?void 0:i.call(s,n,a))??Dr(n,a)},this.differenceInCalendarDays=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.differenceInCalendarDays)==null?void 0:i.call(s,n,a))??Qn(n,a)},this.differenceInCalendarMonths=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.differenceInCalendarMonths)==null?void 0:i.call(s,n,a))??Ld(n,a)},this.eachMonthOfInterval=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.eachMonthOfInterval)==null?void 0:s.call(a,n))??Cd(n)},this.endOfBroadcastWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.endOfBroadcastWeek)==null?void 0:i.call(s,n,a))??kb(n,this)},this.endOfISOWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.endOfISOWeek)==null?void 0:s.call(a,n))??wy(n)},this.endOfMonth=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.endOfMonth)==null?void 0:s.call(a,n))??_a(n)},this.endOfWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.endOfWeek)==null?void 0:i.call(s,n,a??this.options))??Gd(n,a??this.options)},this.endOfYear=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.endOfYear)==null?void 0:s.call(a,n))??Dt(n)},this.format=(n,a,s)=>{var o,l;const i=((l=(o=this.overrides)==null?void 0:o.format)==null?void 0:l.call(o,n,a,s??this.options))??nn(n,a,s??this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.getISOWeek)==null?void 0:s.call(a,n))??oi(n)},this.getMonth=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.getMonth)==null?void 0:s.call(a,n))??ui(n)},this.getYear=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.getYear)==null?void 0:s.call(a,n))??gi(n)},this.getWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.getWeek)==null?void 0:i.call(s,n,a??this.options))??di(n,a??this.options)},this.isAfter=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isAfter)==null?void 0:i.call(s,n,a))??mi(n,a)},this.isBefore=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isBefore)==null?void 0:i.call(s,n,a))??It(n,a)},this.isDate=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.isDate)==null?void 0:s.call(a,n))??Vd(n)},this.isSameDay=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameDay)==null?void 0:i.call(s,n,a))??Ir(n,a)},this.isSameMonth=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameMonth)==null?void 0:i.call(s,n,a))??Mp(n,a)},this.isSameYear=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameYear)==null?void 0:i.call(s,n,a))??Jd(n,a)},this.max=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.max)==null?void 0:s.call(a,n))??py(n)},this.min=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.min)==null?void 0:s.call(a,n))??vy(n)},this.setMonth=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.setMonth)==null?void 0:i.call(s,n,a))??Zd(n,a)},this.setYear=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.setYear)==null?void 0:i.call(s,n,a))??eu(n,a)},this.startOfBroadcastWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.startOfBroadcastWeek)==null?void 0:i.call(s,n,a??this))??Bu(n,a??this)},this.startOfDay=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfDay)==null?void 0:s.call(a,n))??Rn(n)},this.startOfISOWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfISOWeek)==null?void 0:s.call(a,n))??Sr(n)},this.startOfMonth=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfMonth)==null?void 0:s.call(a,n))??yr(n)},this.startOfWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfWeek)==null?void 0:s.call(a,n))??nr(n,this.options)},this.startOfYear=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfYear)==null?void 0:s.call(a,n))??dt(n)},this.options={locale:Oa,...t},this.overrides=r}getDigitMap(){const{numerals:t="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:t}),n={};for(let a=0;a<10;a++)n[a.toString()]=r.format(a);return n}replaceDigits(t){const r=this.getDigitMap();return t.replace(/\d/g,n=>r[n]||n)}formatNumber(t){return this.replaceDigits(t.toString())}}const sr=new ar;function fb(e,t,r={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[s])=>(r[s]?a.push(r[s]):t[Fe[s]]?a.push(t[Fe[s]]):t[Mn[s]]&&a.push(t[Mn[s]]),a),[t[ae.Day]])}function cb(e){return c.createElement("button",{...e})}function yb(e){return c.createElement("span",{...e})}function pb(e){const{size:t=24,orientation:r="left",className:n}=e;return c.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&c.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&c.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&c.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&c.createElement("polygon",{points:"8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"}))}function vb(e){const{day:t,modifiers:r,...n}=e;return c.createElement("td",{...n})}function bb(e){const{day:t,modifiers:r,...n}=e,a=c.useRef(null);return c.useEffect(()=>{var s;r.focused&&((s=a.current)==null||s.focus())},[r.focused]),c.createElement("button",{ref:a,...n})}function hb(e){const{options:t,className:r,components:n,classNames:a,...s}=e,i=[a[ae.Dropdown],r].join(" "),o=t==null?void 0:t.find(({value:l})=>l===s.value);return c.createElement("span",{"data-disabled":s.disabled,className:a[ae.DropdownRoot]},c.createElement(n.Select,{className:i,...s},t==null?void 0:t.map(({value:l,label:d,disabled:u})=>c.createElement(n.Option,{key:l,value:l,disabled:u},d))),c.createElement("span",{className:a[ae.CaptionLabel],"aria-hidden":!0},o==null?void 0:o.label,c.createElement(n.Chevron,{orientation:"down",size:18,className:a[ae.Chevron]})))}function Tb(e){return c.createElement("div",{...e})}function Eb(e){return c.createElement("div",{...e})}function Rb(e){const{calendarMonth:t,displayIndex:r,...n}=e;return c.createElement("div",{...n},e.children)}function Ab(e){const{calendarMonth:t,displayIndex:r,...n}=e;return c.createElement("div",{...n})}function wb(e){return c.createElement("table",{...e})}function Ob(e){return c.createElement("div",{...e})}const Vu=m.createContext(void 0);function xr(){const e=m.useContext(Vu);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function Sb(e){const{components:t}=xr();return c.createElement(t.Dropdown,{...e})}function Db(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:a,...s}=e,{components:i,classNames:o,labels:{labelPrevious:l,labelNext:d}}=xr(),u=m.useCallback(k=>{a&&(r==null||r(k))},[a,r]),g=m.useCallback(k=>{n&&(t==null||t(k))},[n,t]);return c.createElement("nav",{...s},c.createElement(i.PreviousMonthButton,{type:"button",className:o[ae.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":l(n),onClick:g},c.createElement(i.Chevron,{disabled:n?void 0:!0,className:o[ae.Chevron],orientation:"left"})),c.createElement(i.NextMonthButton,{type:"button",className:o[ae.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":d(a),onClick:u},c.createElement(i.Chevron,{disabled:a?void 0:!0,orientation:"right",className:o[ae.Chevron]})))}function Ib(e){const{components:t}=xr();return c.createElement(t.Button,{...e})}function qb(e){return c.createElement("option",{...e})}function _b(e){const{components:t}=xr();return c.createElement(t.Button,{...e})}function Nb(e){const{rootRef:t,...r}=e;return c.createElement("div",{...r,ref:t})}function Pb(e){return c.createElement("select",{...e})}function jb(e){const{week:t,...r}=e;return c.createElement("tr",{...r})}function Fb(e){return c.createElement("th",{...e})}function xb(e){return c.createElement("thead",{"aria-hidden":!0},c.createElement("tr",{...e}))}function Mb(e){const{week:t,...r}=e;return c.createElement("th",{...r})}function Ub(e){return c.createElement("th",{...e})}function Bb(e){return c.createElement("tbody",{...e})}function Vb(e){const{components:t}=xr();return c.createElement(t.Dropdown,{...e})}const Lb=Object.freeze(Object.defineProperty({__proto__:null,Button:cb,CaptionLabel:yb,Chevron:pb,Day:vb,DayButton:bb,Dropdown:hb,DropdownNav:Tb,Footer:Eb,Month:Rb,MonthCaption:Ab,MonthGrid:wb,Months:Ob,MonthsDropdown:Sb,Nav:Db,NextMonthButton:Ib,Option:qb,PreviousMonthButton:_b,Root:Nb,Select:Pb,Week:jb,WeekNumber:Mb,WeekNumberHeader:Ub,Weekday:Fb,Weekdays:xb,Weeks:Bb,YearsDropdown:Vb},Symbol.toStringTag,{value:"Module"}));function Kb(e){return{...Lb,...e}}function Cb(e){const t={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0};return Object.entries(e).forEach(([r,n])=>{r.startsWith("data-")&&(t[r]=n)}),t}function Gb(){const e={};for(const t in ae)e[ae[t]]=`rdp-${ae[t]}`;for(const t in Fe)e[Fe[t]]=`rdp-${Fe[t]}`;for(const t in Mn)e[Mn[t]]=`rdp-${Mn[t]}`;for(const t in hn)e[hn[t]]=`rdp-${hn[t]}`;return e}function Lu(e,t,r){return(r??new ar(t)).format(e,"LLLL y")}const Hb=Lu;function $b(e,t,r){return(r??new ar(t)).format(e,"d")}function Yb(e,t=sr){return t.format(e,"LLLL")}function Wb(e){return e<10?`0${e.toLocaleString()}`:`${e.toLocaleString()}`}function zb(){return""}function Xb(e,t,r){return(r??new ar(t)).format(e,"cccccc")}function Ku(e,t=sr){return t.format(e,"yyyy")}const Qb=Ku,Jb=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Lu,formatDay:$b,formatMonthCaption:Hb,formatMonthDropdown:Yb,formatWeekNumber:Wb,formatWeekNumberHeader:zb,formatWeekdayName:Xb,formatYearCaption:Qb,formatYearDropdown:Ku},Symbol.toStringTag,{value:"Module"}));function Zb(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...Jb,...e}}function eh(e,t,r,n,a){const{startOfMonth:s,startOfYear:i,endOfYear:o,eachMonthOfInterval:l,getMonth:d}=a;return l({start:i(e),end:o(e)}).map(k=>{const f=n.formatMonthDropdown(k,a),v=d(k),b=t&&k<s(t)||r&&k>s(r)||!1;return{value:v,label:f,disabled:b}})}function nh(e,t={},r={}){let n={...t==null?void 0:t[ae.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{n={...n,...r==null?void 0:r[a]}}),n}function rh(e,t,r){const n=e.today(),a=t?e.startOfISOWeek(n):e.startOfWeek(n),s=[];for(let i=0;i<7;i++){const o=e.addDays(a,i);s.push(o)}return s}function th(e,t,r,n){if(!e||!t)return;const{startOfYear:a,endOfYear:s,addYears:i,getYear:o,isBefore:l,isSameYear:d}=n,u=a(e),g=s(t),k=[];let f=u;for(;l(f,g)||d(f,g);)k.push(f),f=i(f,1);return k.map(v=>{const b=r.formatYearDropdown(v,n);return{value:o(v),label:b,disabled:!1}})}function Cu(e,t,r){return(r??new ar(t)).format(e,"LLLL y")}const ah=Cu;function sh(e,t,r,n){let a=(n??new ar(r)).format(e,"PPPP");return t!=null&&t.today&&(a=`Today, ${a}`),a}function Gu(e,t,r,n){let a=(n??new ar(r)).format(e,"PPPP");return t.today&&(a=`Today, ${a}`),t.selected&&(a=`${a}, selected`),a}const ih=Gu;function oh(){return""}function lh(e){return"Choose the Month"}function dh(e){return"Go to the Next Month"}function uh(e){return"Go to the Previous Month"}function gh(e,t,r){return(r??new ar(t)).format(e,"cccc")}function mh(e,t){return`Week ${e}`}function kh(e){return"Week Number"}function fh(e){return"Choose the Year"}const ch=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:ah,labelDay:ih,labelDayButton:Gu,labelGrid:Cu,labelGridcell:sh,labelMonthDropdown:lh,labelNav:oh,labelNext:dh,labelPrevious:uh,labelWeekNumber:mh,labelWeekNumberHeader:kh,labelWeekday:gh,labelYearDropdown:fh},Symbol.toStringTag,{value:"Module"}));function yh(e,t,{classNames:r,months:n,focused:a,dateLib:s}){const i=m.useRef(null),o=m.useRef(n),l=m.useRef(!1);m.useLayoutEffect(()=>{const d=o.current;if(o.current=n,!t||!e.current||!(e.current instanceof HTMLElement))return;const u=i.current,g=e.current.cloneNode(!0);if(g instanceof HTMLElement?([...g.querySelectorAll("[data-animated-month]")??[]].forEach(y=>{const T=y.querySelector("[data-animated-month]");T&&y.contains(T)&&y.removeChild(T)}),i.current=g):i.current=null,n.length===0||d.length===0||n.length!==d.length||a||l.current||s.isSameMonth(n[0].date,d[0].date))return;const f=[...(u==null?void 0:u.querySelectorAll("[data-animated-month]"))??[]],v=[...e.current.querySelectorAll("[data-animated-month]")??[]];if(v&&v.every(b=>b instanceof HTMLElement)&&f&&f.every(b=>b instanceof HTMLElement)){l.current=!0;const b=s.isAfter(n[0].date,d[0].date);v.forEach((y,T)=>{const p=f[T];if(!p)return;const h=b?r[hn.caption_after_enter]:r[hn.caption_before_enter],A=b?r[hn.weeks_after_enter]:r[hn.weeks_before_enter];y.style.position="relative",y.style.overflow="hidden";const D=y.querySelector("[data-animated-caption]");D&&D instanceof HTMLElement&&D.classList.add(h);const O=y.querySelector("[data-animated-weeks]");O&&O instanceof HTMLElement&&O.classList.add(A);const S=()=>{l.current=!1,D&&D instanceof HTMLElement&&D.classList.remove(h),O&&O instanceof HTMLElement&&O.classList.remove(A),y.style.position="",y.style.overflow="",y.contains(p)&&y.removeChild(p)};p.style.pointerEvents="none",p.style.position="absolute",p.style.overflow="hidden",p.setAttribute("aria-hidden","true");const I=p.querySelector("[data-animated-weekdays]");I&&I instanceof HTMLElement&&(I.style.opacity="0");const _=p.querySelector("[data-animated-caption]");_&&_ instanceof HTMLElement&&(_.classList.add(b?r[hn.caption_before_exit]:r[hn.caption_after_exit]),_.addEventListener("animationend",S));const x=p.querySelector("[data-animated-weeks]");x&&x instanceof HTMLElement&&x.classList.add(b?r[hn.weeks_before_exit]:r[hn.weeks_after_exit]),y.insertBefore(p,y.firstChild)})}})}function ph(e,t,r,n){const a=e[0],s=e[e.length-1],{ISOWeek:i,fixedWeeks:o,broadcastCalendar:l}=r??{},{addDays:d,differenceInCalendarDays:u,differenceInCalendarMonths:g,endOfBroadcastWeek:k,endOfISOWeek:f,endOfMonth:v,endOfWeek:b,isAfter:y,startOfBroadcastWeek:T,startOfISOWeek:p,startOfWeek:h}=n,A=l?T(a,n):i?p(a):h(a),D=l?k(s,n):i?f(v(s)):b(v(s)),O=u(D,A),S=g(s,a)+1,I=[];for(let F=0;F<=O;F++){const q=d(A,F);if(t&&y(q,t))break;I.push(q)}const x=(l?35:42)*S;if(o&&I.length<x){const F=x-I.length;for(let q=0;q<F;q++){const w=d(I[I.length-1],1);I.push(w)}}return I}function vh(e){const t=[];return e.reduce((r,n)=>{const a=[],s=n.weeks.reduce((i,o)=>[...i,...o.days],a);return[...r,...s]},t)}function bh(e,t,r,n){const{numberOfMonths:a=1}=r,s=[];for(let i=0;i<a;i++){const o=n.addMonths(e,i);if(t&&o>t)break;s.push(o)}return s}function Fo(e,t){const{month:r,defaultMonth:n,today:a=t.today(),numberOfMonths:s=1,endMonth:i,startMonth:o}=e;let l=r||n||a;const{differenceInCalendarMonths:d,addMonths:u,startOfMonth:g}=t;if(i&&d(i,l)<0){const k=-1*(s-1);l=u(i,k)}return o&&d(l,o)<0&&(l=o),g(l)}class Hu{constructor(t,r,n=sr){this.date=t,this.displayMonth=r,this.outside=!!(r&&!n.isSameMonth(t,r)),this.dateLib=n}isEqualTo(t){return this.dateLib.isSameDay(t.date,this.date)&&this.dateLib.isSameMonth(t.displayMonth,this.displayMonth)}}class hh{constructor(t,r){this.date=t,this.weeks=r}}class Th{constructor(t,r){this.days=r,this.weekNumber=t}}function Eh(e,t,r,n){const{addDays:a,endOfBroadcastWeek:s,endOfISOWeek:i,endOfMonth:o,endOfWeek:l,getISOWeek:d,getWeek:u,startOfBroadcastWeek:g,startOfISOWeek:k,startOfWeek:f}=n,v=e.reduce((b,y)=>{const T=r.broadcastCalendar?g(y,n):r.ISOWeek?k(y):f(y),p=r.broadcastCalendar?s(y,n):r.ISOWeek?i(o(y)):l(o(y)),h=t.filter(S=>S>=T&&S<=p),A=r.broadcastCalendar?35:42;if(r.fixedWeeks&&h.length<A){const S=t.filter(I=>{const _=A-h.length;return I>p&&I<=a(p,_)});h.push(...S)}const D=h.reduce((S,I)=>{const _=r.ISOWeek?d(I):u(I),x=S.find(q=>q.weekNumber===_),F=new Hu(I,y,n);return x?x.days.push(F):S.push(new Th(_,[F])),S},[]),O=new hh(y,D);return b.push(O),b},[]);return r.reverseMonths?v.reverse():v}function Rh(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:s,startOfMonth:i,endOfMonth:o,addYears:l,endOfYear:d,newDate:u,today:g}=t,{fromYear:k,toYear:f,fromMonth:v,toMonth:b}=e;!r&&v&&(r=v),!r&&k&&(r=t.newDate(k,0,1)),!n&&b&&(n=b),!n&&f&&(n=u(f,11,31));const y=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=i(r):k?r=u(k,0,1):!r&&y&&(r=a(l(e.today??g(),-100))),n?n=o(n):f?n=u(f,11,31):!n&&y&&(n=d(e.today??g())),[r&&s(r),n&&s(n)]}function Ah(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s=1}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,d=a?s:1,u=i(e);if(!t)return o(u,d);if(!(l(t,e)<s))return o(u,d)}function wh(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,d=a?s??1:1,u=i(e);if(!t)return o(u,-d);if(!(l(u,t)<=0))return o(u,-d)}function Oh(e){const t=[];return e.reduce((r,n)=>[...r,...n.weeks],t)}function xa(e,t){const[r,n]=m.useState(e);return[t===void 0?r:t,n]}function Sh(e,t){const[r,n]=Rh(e,t),{startOfMonth:a,endOfMonth:s}=t,i=Fo(e,t),[o,l]=xa(i,e.month?i:void 0);m.useEffect(()=>{const O=Fo(e,t);l(O)},[e.timeZone]);const d=bh(o,n,e,t),u=ph(d,e.endMonth?s(e.endMonth):void 0,e,t),g=Eh(d,u,e,t),k=Oh(g),f=vh(g),v=wh(o,r,e,t),b=Ah(o,n,e,t),{disableNavigation:y,onMonthChange:T}=e,p=O=>k.some(S=>S.days.some(I=>I.isEqualTo(O))),h=O=>{if(y)return;let S=a(O);r&&S<a(r)&&(S=a(r)),n&&S>a(n)&&(S=a(n)),l(S),T==null||T(S)};return{months:g,weeks:k,days:f,navStart:r,navEnd:n,previousMonth:v,nextMonth:b,goToMonth:h,goToDay:O=>{p(O)||h(O.date)}}}function Dh(e,t,r,n){let a,s=0,i=!1;for(;s<e.length&&!i;){const o=e[s],l=t(o);!l[Fe.disabled]&&!l[Fe.hidden]&&!l[Fe.outside]&&(l[Fe.focused]||n!=null&&n.isEqualTo(o)||r(o.date)||l[Fe.today])&&(a=o,i=!0),s++}return a||(a=e.find(o=>{const l=t(o);return!l[Fe.disabled]&&!l[Fe.hidden]&&!l[Fe.outside]})),a}function Jn(e,t,r=!1,n=sr){let{from:a,to:s}=e;const{differenceInCalendarDays:i,isSameDay:o}=n;return a&&s?(i(s,a)<0&&([a,s]=[s,a]),i(t,a)>=(r?1:0)&&i(s,t)>=(r?1:0)):!r&&s?o(s,t):!r&&a?o(a,t):!1}function $u(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Ri(e){return!!(e&&typeof e=="object"&&"from"in e)}function Yu(e){return!!(e&&typeof e=="object"&&"after"in e)}function Wu(e){return!!(e&&typeof e=="object"&&"before"in e)}function zu(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function Xu(e,t){return Array.isArray(e)&&e.every(t.isDate)}function Dn(e,t,r=sr){const n=Array.isArray(t)?t:[t],{isSameDay:a,differenceInCalendarDays:s,isAfter:i}=r;return n.some(o=>{if(typeof o=="boolean")return o;if(r.isDate(o))return a(e,o);if(Xu(o,r))return o.includes(e);if(Ri(o))return Jn(o,e,!1,r);if(zu(o))return Array.isArray(o.dayOfWeek)?o.dayOfWeek.includes(e.getDay()):o.dayOfWeek===e.getDay();if($u(o)){const l=s(o.before,e),d=s(o.after,e),u=l>0,g=d<0;return i(o.before,o.after)?g&&u:u||g}return Yu(o)?s(e,o.after)>0:Wu(o)?s(o.before,e)>0:typeof o=="function"?o(e):!1})}function Ih(e,t,r,n,a,s,i){const{ISOWeek:o,broadcastCalendar:l}=s,{addDays:d,addMonths:u,addWeeks:g,addYears:k,endOfBroadcastWeek:f,endOfISOWeek:v,endOfWeek:b,max:y,min:T,startOfBroadcastWeek:p,startOfISOWeek:h,startOfWeek:A}=i;let O={day:d,week:g,month:u,year:k,startOfWeek:S=>l?p(S,i):o?h(S):A(S),endOfWeek:S=>l?f(S,i):o?v(S):b(S)}[e](r,t==="after"?1:-1);return t==="before"&&n?O=y([n,O]):t==="after"&&a&&(O=T([a,O])),O}function Qu(e,t,r,n,a,s,i,o=0){if(o>365)return;const l=Ih(e,t,r.date,n,a,s,i),d=!!(s.disabled&&Dn(l,s.disabled,i)),u=!!(s.hidden&&Dn(l,s.hidden,i)),g=l,k=new Hu(l,g,i);return!d&&!u?k:Qu(e,t,k,n,a,s,i,o+1)}function qh(e,t,r,n,a){const{autoFocus:s}=e,[i,o]=m.useState(),l=Dh(t.days,r,n||(()=>!1),i),[d,u]=m.useState(s?l:void 0);return{isFocusTarget:b=>!!(l!=null&&l.isEqualTo(b)),setFocused:u,focused:d,blur:()=>{o(d),u(void 0)},moveFocus:(b,y)=>{if(!d)return;const T=Qu(b,y,d,t.navStart,t.navEnd,e,a);T&&(t.goToDay(T),u(T))}}}function _h(e,t,r){const{disabled:n,hidden:a,modifiers:s,showOutsideDays:i,broadcastCalendar:o,today:l}=t,{isSameDay:d,isSameMonth:u,startOfMonth:g,isBefore:k,endOfMonth:f,isAfter:v}=r,b=t.startMonth&&g(t.startMonth),y=t.endMonth&&f(t.endMonth),T={[Fe.focused]:[],[Fe.outside]:[],[Fe.disabled]:[],[Fe.hidden]:[],[Fe.today]:[]},p={};for(const h of e){const{date:A,displayMonth:D}=h,O=!!(D&&!u(A,D)),S=!!(b&&k(A,b)),I=!!(y&&v(A,y)),_=!!(n&&Dn(A,n,r)),x=!!(a&&Dn(A,a,r))||S||I||!o&&!i&&O||o&&i===!1&&O,F=d(A,l??r.today());O&&T.outside.push(h),_&&T.disabled.push(h),x&&T.hidden.push(h),F&&T.today.push(h),s&&Object.keys(s).forEach(q=>{const w=s==null?void 0:s[q];w&&Dn(A,w,r)&&(p[q]?p[q].push(h):p[q]=[h])})}return h=>{const A={[Fe.focused]:!1,[Fe.disabled]:!1,[Fe.hidden]:!1,[Fe.outside]:!1,[Fe.today]:!1},D={};for(const O in T){const S=T[O];A[O]=S.some(I=>I===h)}for(const O in p)D[O]=p[O].some(S=>S===h);return{...A,...D}}}function Nh(e,t){const{selected:r,required:n,onSelect:a}=e,[s,i]=xa(r,a?r:void 0),o=a?r:s,{isSameDay:l}=t,d=f=>(o==null?void 0:o.some(v=>l(v,f)))??!1,{min:u,max:g}=e;return{selected:o,select:(f,v,b)=>{let y=[...o??[]];if(d(f)){if((o==null?void 0:o.length)===u||n&&(o==null?void 0:o.length)===1)return;y=o==null?void 0:o.filter(T=>!l(T,f))}else(o==null?void 0:o.length)===g?y=[f]:y=[...y,f];return a||i(y),a==null||a(y,f,v,b),y},isSelected:d}}function Ph(e,t,r=0,n=0,a=!1,s=sr){const{from:i,to:o}=t||{},{isSameDay:l,isAfter:d,isBefore:u}=s;let g;if(!i&&!o)g={from:e,to:r>0?void 0:e};else if(i&&!o)l(i,e)?a?g={from:i,to:void 0}:g=void 0:u(e,i)?g={from:e,to:i}:g={from:i,to:e};else if(i&&o)if(l(i,e)&&l(o,e))a?g={from:i,to:o}:g=void 0;else if(l(i,e))g={from:i,to:r>0?void 0:e};else if(l(o,e))g={from:e,to:r>0?void 0:e};else if(u(e,i))g={from:e,to:o};else if(d(e,i))g={from:i,to:e};else if(d(e,o))g={from:i,to:e};else throw new Error("Invalid range");if(g!=null&&g.from&&(g!=null&&g.to)){const k=s.differenceInCalendarDays(g.to,g.from);n>0&&k>n?g={from:e,to:void 0}:r>1&&k<r&&(g={from:e,to:void 0})}return g}function jh(e,t,r=sr){const n=Array.isArray(t)?t:[t];let a=e.from;const s=r.differenceInCalendarDays(e.to,e.from),i=Math.min(s,6);for(let o=0;o<=i;o++){if(n.includes(a.getDay()))return!0;a=r.addDays(a,1)}return!1}function xo(e,t,r=sr){return Jn(e,t.from,!1,r)||Jn(e,t.to,!1,r)||Jn(t,e.from,!1,r)||Jn(t,e.to,!1,r)}function Fh(e,t,r=sr){const n=Array.isArray(t)?t:[t];if(n.filter(o=>typeof o!="function").some(o=>typeof o=="boolean"?o:r.isDate(o)?Jn(e,o,!1,r):Xu(o,r)?o.some(l=>Jn(e,l,!1,r)):Ri(o)?o.from&&o.to?xo(e,{from:o.from,to:o.to},r):!1:zu(o)?jh(e,o.dayOfWeek,r):$u(o)?r.isAfter(o.before,o.after)?xo(e,{from:r.addDays(o.after,1),to:r.addDays(o.before,-1)},r):Dn(e.from,o,r)||Dn(e.to,o,r):Yu(o)||Wu(o)?Dn(e.from,o,r)||Dn(e.to,o,r):!1))return!0;const i=n.filter(o=>typeof o=="function");if(i.length){let o=e.from;const l=r.differenceInCalendarDays(e.to,e.from);for(let d=0;d<=l;d++){if(i.some(u=>u(o)))return!0;o=r.addDays(o,1)}}return!1}function xh(e,t){const{disabled:r,excludeDisabled:n,selected:a,required:s,onSelect:i}=e,[o,l]=xa(a,i?a:void 0),d=i?a:o;return{selected:d,select:(k,f,v)=>{const{min:b,max:y}=e,T=k?Ph(k,d,b,y,s,t):void 0;return n&&r&&(T!=null&&T.from)&&T.to&&Fh({from:T.from,to:T.to},r,t)&&(T.from=k,T.to=void 0),i||l(T),i==null||i(T,k,f,v),T},isSelected:k=>d&&Jn(d,k,!1,t)}}function Mh(e,t){const{selected:r,required:n,onSelect:a}=e,[s,i]=xa(r,a?r:void 0),o=a?r:s,{isSameDay:l}=t;return{selected:o,select:(g,k,f)=>{let v=g;return!n&&o&&o&&l(g,o)&&(v=void 0),a||i(v),a==null||a(v,g,k,f),v},isSelected:g=>o?l(o,g):!1}}function Uh(e,t){const r=Mh(e,t),n=Nh(e,t),a=xh(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return a;default:return}}function Bh(e){const{components:t,formatters:r,labels:n,dateLib:a,locale:s,classNames:i}=m.useMemo(()=>{const me={...Oa,...e.locale};return{dateLib:new ar({locale:me,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:Kb(e.components),formatters:Zb(e.formatters),labels:{...ch,...e.labels},locale:me,classNames:{...Gb(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:o,mode:l,onDayBlur:d,onDayClick:u,onDayFocus:g,onDayKeyDown:k,onDayMouseEnter:f,onDayMouseLeave:v,onNextClick:b,onPrevClick:y,showWeekNumber:T,styles:p}=e,{formatCaption:h,formatDay:A,formatMonthDropdown:D,formatWeekNumber:O,formatWeekNumberHeader:S,formatWeekdayName:I,formatYearDropdown:_}=r,x=Sh(e,a),{days:F,months:q,navStart:w,navEnd:N,previousMonth:j,nextMonth:L,goToMonth:B}=x,V=_h(F,e,a),{isSelected:U,select:$,selected:Z}=Uh(e,a)??{},{blur:K,focused:re,isFocusTarget:J,moveFocus:z,setFocused:Y}=qh(e,x,V,U??(()=>!1),a),{labelDayButton:le,labelGridcell:ie,labelGrid:fe,labelMonthDropdown:He,labelNav:te,labelWeekday:se,labelWeekNumber:ue,labelWeekNumberHeader:ge,labelYearDropdown:ce}=n,rn=m.useMemo(()=>rh(a,e.ISOWeek),[a,e.ISOWeek]),xe=l!==void 0||u!==void 0,Ce=m.useCallback(()=>{j&&(B(j),y==null||y(j))},[j,B,y]),Te=m.useCallback(()=>{L&&(B(L),b==null||b(L))},[B,L,b]),R=m.useCallback((me,Me)=>qe=>{qe.preventDefault(),qe.stopPropagation(),Y(me),$==null||$(me.date,Me,qe),u==null||u(me.date,Me,qe)},[$,u,Y]),P=m.useCallback((me,Me)=>qe=>{Y(me),g==null||g(me.date,Me,qe)},[g,Y]),M=m.useCallback((me,Me)=>qe=>{K(),d==null||d(me.date,Me,qe)},[K,d]),W=m.useCallback((me,Me)=>qe=>{const Fn={ArrowLeft:["day",e.dir==="rtl"?"after":"before"],ArrowRight:["day",e.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[qe.shiftKey?"year":"month","before"],PageDown:[qe.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Fn[qe.key]){qe.preventDefault(),qe.stopPropagation();const[bn,vr]=Fn[qe.key];z(bn,vr)}k==null||k(me.date,Me,qe)},[z,k,e.dir]),H=m.useCallback((me,Me)=>qe=>{f==null||f(me.date,Me,qe)},[f]),C=m.useCallback((me,Me)=>qe=>{v==null||v(me.date,Me,qe)},[v]),ne=m.useCallback(me=>Me=>{const qe=Number(Me.target.value),Fn=a.setMonth(a.startOfMonth(me),qe);B(Fn)},[a,B]),pe=m.useCallback(me=>Me=>{const qe=Number(Me.target.value),Fn=a.setYear(a.startOfMonth(me),qe);B(Fn)},[a,B]),{className:Ie,style:kn}=m.useMemo(()=>({className:[i[ae.Root],e.className].filter(Boolean).join(" "),style:{...p==null?void 0:p[ae.Root],...e.style}}),[i,e.className,e.style,p]),Br=Cb(e),jn=m.useRef(null);yh(jn,!!e.animate,{classNames:i,months:q,focused:re,dateLib:a});const Ba={dayPickerProps:e,selected:Z,select:$,isSelected:U,months:q,nextMonth:L,previousMonth:j,goToMonth:B,getModifiers:V,components:t,classNames:i,styles:p,labels:n,formatters:r};return c.createElement(Vu.Provider,{value:Ba},c.createElement(t.Root,{rootRef:e.animate?jn:void 0,className:Ie,style:kn,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Br},c.createElement(t.Months,{className:i[ae.Months],style:p==null?void 0:p[ae.Months]},!e.hideNavigation&&c.createElement(t.Nav,{className:i[ae.Nav],style:p==null?void 0:p[ae.Nav],"aria-label":te(),onPreviousClick:Ce,onNextClick:Te,previousMonth:j,nextMonth:L}),q.map((me,Me)=>{const qe=eh(me.date,w,N,r,a),Fn=th(w,N,r,a);return c.createElement(t.Month,{"data-animated-month":e.animate?"true":void 0,className:i[ae.Month],style:p==null?void 0:p[ae.Month],key:Me,displayIndex:Me,calendarMonth:me},c.createElement(t.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:i[ae.MonthCaption],style:p==null?void 0:p[ae.MonthCaption],calendarMonth:me,displayIndex:Me},o!=null&&o.startsWith("dropdown")?c.createElement(t.DropdownNav,{className:i[ae.Dropdowns],style:p==null?void 0:p[ae.Dropdowns]},o==="dropdown"||o==="dropdown-months"?c.createElement(t.MonthsDropdown,{className:i[ae.MonthsDropdown],"aria-label":He(),classNames:i,components:t,disabled:!!e.disableNavigation,onChange:ne(me.date),options:qe,style:p==null?void 0:p[ae.Dropdown],value:a.getMonth(me.date)}):c.createElement("span",{role:"status","aria-live":"polite"},D(me.date,a)),o==="dropdown"||o==="dropdown-years"?c.createElement(t.YearsDropdown,{className:i[ae.YearsDropdown],"aria-label":ce(a.options),classNames:i,components:t,disabled:!!e.disableNavigation,onChange:pe(me.date),options:Fn,style:p==null?void 0:p[ae.Dropdown],value:a.getYear(me.date)}):c.createElement("span",{role:"status","aria-live":"polite"},_(me.date,a))):c.createElement(t.CaptionLabel,{className:i[ae.CaptionLabel],role:"status","aria-live":"polite"},h(me.date,a.options,a))),c.createElement(t.MonthGrid,{role:"grid","aria-multiselectable":l==="multiple"||l==="range","aria-label":fe(me.date,a.options,a)||void 0,className:i[ae.MonthGrid],style:p==null?void 0:p[ae.MonthGrid]},!e.hideWeekdays&&c.createElement(t.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:i[ae.Weekdays],style:p==null?void 0:p[ae.Weekdays]},T&&c.createElement(t.WeekNumberHeader,{"aria-label":ge(a.options),className:i[ae.WeekNumberHeader],style:p==null?void 0:p[ae.WeekNumberHeader],scope:"col"},S()),rn.map((bn,vr)=>c.createElement(t.Weekday,{"aria-label":se(bn,a.options,a),className:i[ae.Weekday],key:vr,style:p==null?void 0:p[ae.Weekday],scope:"col"},I(bn,a.options,a)))),c.createElement(t.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:i[ae.Weeks],style:p==null?void 0:p[ae.Weeks]},me.weeks.map((bn,vr)=>c.createElement(t.Week,{className:i[ae.Week],key:bn.weekNumber,style:p==null?void 0:p[ae.Week],week:bn},T&&c.createElement(t.WeekNumber,{week:bn,style:p==null?void 0:p[ae.WeekNumber],"aria-label":ue(bn.weekNumber,{locale:s}),className:i[ae.WeekNumber],scope:"row",role:"rowheader"},O(bn.weekNumber)),bn.days.map(tn=>{const{date:Vn}=tn,we=V(tn);if(we[Fe.focused]=!we.hidden&&!!(re!=null&&re.isEqualTo(tn)),we[Mn.selected]=(U==null?void 0:U(Vn))||we.selected,Ri(Z)){const{from:Va,to:La}=Z;we[Mn.range_start]=!!(Va&&La&&a.isSameDay(Vn,Va)),we[Mn.range_end]=!!(Va&&La&&a.isSameDay(Vn,La)),we[Mn.range_middle]=Jn(Z,Vn,!0,a)}const rm=nh(we,p,e.modifiersStyles),tm=fb(we,i,e.modifiersClassNames),am=!xe&&!we.hidden?ie(Vn,we,a.options,a):void 0;return c.createElement(t.Day,{key:`${a.format(Vn,"yyyy-MM-dd")}_${a.format(tn.displayMonth,"yyyy-MM")}`,day:tn,modifiers:we,className:tm.join(" "),style:rm,role:"gridcell","aria-selected":we.selected||void 0,"aria-label":am,"data-day":a.format(Vn,"yyyy-MM-dd"),"data-month":tn.outside?a.format(Vn,"yyyy-MM"):void 0,"data-selected":we.selected||void 0,"data-disabled":we.disabled||void 0,"data-hidden":we.hidden||void 0,"data-outside":tn.outside||void 0,"data-focused":we.focused||void 0,"data-today":we.today||void 0},!we.hidden&&xe?c.createElement(t.DayButton,{className:i[ae.DayButton],style:p==null?void 0:p[ae.DayButton],type:"button",day:tn,modifiers:we,disabled:we.disabled||void 0,tabIndex:J(tn)?0:-1,"aria-label":le(Vn,we,a.options,a),onClick:R(tn,we),onBlur:M(tn,we),onFocus:P(tn,we),onKeyDown:W(tn,we),onMouseEnter:H(tn,we),onMouseLeave:C(tn,we)},A(Vn,a.options,a)):!we.hidden&&A(tn.date,a.options,a))}))))))})),e.footer&&c.createElement(t.Footer,{className:i[ae.Footer],style:p==null?void 0:p[ae.Footer],role:"status","aria-live":"polite"},e.footer)))}var Vh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ju=m.forwardRef((e,t)=>{var{as:r="div",className:n,above:a,below:s,variant:i,asChild:o}=e,l=Vh(e,["as","className","above","below","variant","asChild"]);const{cn:d}=ee(),u=i==="show"?a:s,g=i==="show"?s:a,k=o?st:r;return c.createElement(k,Object.assign({},l,{ref:t,className:d("navds-responsive",n,{[`navds-responsive__above--${u}`]:u,[`navds-responsive__below--${g}`]:g})}))}),Lh=m.forwardRef((e,t)=>c.createElement(Ju,Object.assign({},e,{ref:t,variant:"hide"}))),Ai=m.forwardRef((e,t)=>c.createElement(Ju,Object.assign({},e,{ref:t,variant:"show"})));function Un(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function Kh({day:e,fromDate:t,toDate:r}){const n=r&&Qn(e,Rn(r))>0,a=t&&Qn(Rn(t),e)>0;return n||a||!1}const Zu="dd.MM.yyyy",Ch="MMMM yyyy",eg=[Zu,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...eg];const rs=(e,t,r,n,a)=>{let s;const i=eg;if(a){for(const o of i)if(s=Xr(e,o,t,{locale:r}),Un(s)&&!ts(e,t,r,i))return s;for(const o of[...i.map(l=>l.replace("yyyy","yy"))])if(s=Xr(e,o,t,{locale:r}),Un(s)&&ts(e,t,r,i)){const l=Gh(e,o,t,r);return Un(new Date(l))?new Date(l):new Date("Invalid date")}return new Date("Invalid date")}for(const o of i)if(s=Xr(e,o,t,{locale:r}),Un(s)&&!ts(e,t,r,i))return s;return new Date("Invalid date")};function ts(e,t,r,n){let a;const s=n.map(i=>i.replace("yyyy","yy"));for(const i of s)if(a=Xr(e,i,t,{locale:r}),Un(a))return!0;return!1}function Gh(e,t,r,n){const a=Xr(Mo(e,"19"),t.replace("yy","yyyy"),r,{locale:n}),s=Xr(Mo(e,"20"),t.replace("yy","yyyy"),r,{locale:n});return Un(a)&&Un(s)?It(a,Up(new Date,{years:80}))?s:a:new Date("Invalid date")}function Mo(e,t){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${t}${r}`}const mt=(e,t,r,n)=>nn(e,n??Zu,{locale:t}),Hh=({month:e,start:t,end:r})=>{if(!e)return;let n=e;return t&&It(n,t)&&(n=t),r&&mi(n,r)&&(n=r),yr(n)};function $h(e,t,r,n){return Cd({start:dt(e),end:Dt(e)}).map(i=>{const o=nn(i,"LLLL",{locale:n}),l=ui(i),d=t&&i<yr(t)||r&&i>yr(r)||!1;return{value:l,label:o,disabled:d}})}function Yh(e,t,r){if(!e||!t)return;const n=dt(e),a=Dt(t),s=[];let i=n;for(;It(i,a)||Jd(i,a);)s.push(i),i=Dr(i,1);return s.map(o=>{const l=nn(o,"yyyy",{locale:r});return{value:gi(o),label:l,disabled:!1}})}function Wh({captionLayout:e,startMonth:t,endMonth:r,today:n}){const a=e==="dropdown",s=n??new Date;return t?t=yr(t):!t&&a&&(t=dt(Dr(s,-100))),r?r=_a(r):!r&&a&&(r=Dt(s)),[t&&Rn(t),r&&Rn(r)]}var zh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Xh=e=>{var{day:t,modifiers:r,locale:n,children:a}=e,s=zh(e,["day","modifiers","locale","children"]);const{cn:i}=ee(),o=m.useRef(null);return m.useEffect(()=>{var l;r.focused&&((l=o.current)===null||l===void 0||l.focus())},[r.focused]),r.hidden?c.createElement(c.Fragment,null):c.createElement("button",Object.assign({},s,{ref:o,"aria-hidden":t.outside,"aria-pressed":!!r.selected,"aria-label":nn(t.date,"cccc d",{locale:n}),"data-pressed":r.selected,"data-today":r.today||void 0,className:i(s.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),a)};var Qh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Is=m.forwardRef((e,t)=>{const{inputProps:r,errorId:n,showErrorMsg:a,hasError:s,size:i,inputDescriptionId:o,readOnly:l}=Fr(e,"select"),{children:d,label:u,className:g,description:k,htmlSize:f,hideLabel:v=!1,style:b}=e,y=Qh(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:T}=ee(),p={onMouseDown:h=>{l&&(h.preventDefault(),h.target.focus())},onKeyDown:h=>{l&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(h.key)&&h.preventDefault()}};return c.createElement("div",{className:T(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":l,"navds-select--error":s,"navds-select--readonly":l})},c.createElement(qn,{htmlFor:r.id,size:i,className:T("navds-form-field__label",{"navds-sr-only":v})},l&&c.createElement(Ti,null),u),!!k&&c.createElement(_e,{className:T("navds-form-field__description",{"navds-sr-only":v}),id:o,size:i,as:"div"},k),c.createElement("div",{className:T("navds-select__container"),style:b},c.createElement("select",Object.assign({},Ke(y,["error","errorId","size","readOnly"]),r,p,{ref:t,className:T("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:f}),d),c.createElement(cd,{className:T("navds-select__chevron"),"aria-hidden":!0})),c.createElement("div",{className:T("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},a&&c.createElement(lt,{size:i,showIcon:!0},e.error)))}),ng=({week:{weekNumber:e,days:t},onWeekNumberClick:r,className:n,style:a,showOnDesktop:s})=>{const i=Fa().translate,{cn:o}=ee(),{getModifiers:l}=xr(),d=m.useMemo(()=>t.filter(g=>{const k=l(g);return!(k.hidden||k.outside||k.disabled)}).length===0,[t,l]),u=s?Ai:Lh;return!r||d?c.createElement(u,{above:"sm",asChild:!0},c.createElement("td",{className:"rdp-cell"},c.createElement(er,{as:"span",textColor:"subtle",className:n,style:a,"aria-label":i("weekNumber",{week:e})},e))):c.createElement(u,{above:"sm",asChild:!0},c.createElement("td",{className:o("rdp-cell",{"navds-date__week-wrapper":!s})},c.createElement(Xe,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:a,className:o("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,t.map(g=>g.date))},icon:c.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},Jh=({onWeekNumberClick:e,weeks:t})=>{const r=Fa().translate,{cn:n}=ee(),a=_n();return e?c.createElement(Ai,{below:"sm",asChild:!0},c.createElement("table",{className:"rdp-table",role:"grid"},c.createElement("tbody",{className:"rdp-tbody"},c.createElement("tr",{className:n("rdp-row navds-date__week-row")},c.createElement(er,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},c.createElement("span",{className:n("navds-date__week-wrapper"),id:a},r("week"))),t==null?void 0:t.map(s=>c.createElement(ng,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var Zh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const eT=e=>{var{children:t,calendarMonth:r,locale:n,onWeekNumberClick:a}=e,s=Zh(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:o,previousMonth:l,nextMonth:d}=xr(),{captionLayout:u}=i,{cn:g}=ee(),k=Fa().translate,f=m.useCallback((h,A)=>{const D=Number(A.target.value),O=Zd(yr(h),D);o(O)},[o]),v=m.useCallback((h,A)=>{const D=Number(A.target.value),O=eu(yr(h),D);o(O)},[o]),[b,y]=Wh({captionLayout:u==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),T=$h(r.date,b,y,n),p=Yh(b,y,n);return c.createElement("div",Object.assign({},Ke(s,["displayIndex"])),c.createElement("div",{className:g("navds-date__caption")},(u==null?void 0:u.startsWith("dropdown"))&&c.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:g("navds-sr-only")},nn(r.date,"LLLL y",{locale:n})),c.createElement(Xe,{variant:"tertiary-neutral",disabled:!l,onClick:()=>l&&o(l),icon:c.createElement(Gs,{title:k("goToPreviousMonth")}),className:g("navds-date__caption-button"),type:"button"}),u!=null&&u.startsWith("dropdown")?c.createElement("div",{className:g("navds-date__caption")},c.createElement(Is,{label:k("month"),hideLabel:!0,className:g("navds-date__caption__month"),onChange:h=>f(r.date,h),value:ui(r.date)},T==null?void 0:T.map(({value:h,label:A,disabled:D})=>c.createElement("option",{key:h,value:h,disabled:D},A))),c.createElement(Is,{label:k("year"),hideLabel:!0,className:g("navds-date__caption__year"),onChange:h=>v(r.date,h),value:gi(r.date)},p==null?void 0:p.map(({value:h,label:A,disabled:D})=>c.createElement("option",{key:h,value:h,disabled:D},A)))):c.createElement(_e,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:g("navds-date__caption-label")},nn(r.date,"LLLL y",{locale:n})),c.createElement(Xe,{variant:"tertiary-neutral",icon:c.createElement(Hs,{title:k("goToNextMonth")}),onClick:()=>d&&o(d),disabled:!d,className:g("navds-date__caption-button"),type:"button"})),c.createElement(Jh,{weeks:r.weeks,onWeekNumberClick:a}),t)};var nT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const rT={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},rg=e=>{var{className:t,dropdownCaption:r,disabled:n=[],disableWeekends:a=!1,showWeekNumber:s=!1,selected:i,fixedWeeks:o=!1,onWeekNumberClick:l,fromDate:d,toDate:u,month:g,mode:k,handleSelect:f,locale:v}=e,b=nT(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:y}=ee(),T=si(),p=v?Ou(v):T,h=k??"single";return c.createElement(Bh,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:p,mode:h,onSelect:(A,D)=>{if(h!=="range"||A||!Mu(i)){f(A);return}if(!i.to){f({from:D,to:void 0});return}let O;Ir(i.to,D)?O=void 0:It(D,i.to)?O={from:D,to:i.to}:O={from:i.to,to:D},f(O)},selected:i,classNames:rT,components:{MonthCaption:()=>c.createElement(c.Fragment,null),DayButton:m.useCallback(A=>c.createElement(Xh,Object.assign({},A,{locale:p})),[p]),Month:m.useCallback(A=>c.createElement(eT,Object.assign({},A,{locale:p,onWeekNumberClick:h==="multiple"?l:void 0})),[p,h,l]),Day:m.useCallback(A=>c.createElement("td",Object.assign({},Ke(A,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:m.useCallback(A=>c.createElement(ng,Object.assign({},A,{showOnDesktop:!0,onWeekNumberClick:h==="multiple"?l:void 0})),[h,l]),WeekNumberHeader:m.useCallback(A=>c.createElement(Ai,{above:"sm",asChild:!0},c.createElement("th",Object.assign({},A))),[]),Weekdays:m.useCallback(A=>c.createElement("thead",Object.assign({},A,{className:"rdp-head","aria-hidden":!0}),c.createElement("tr",{className:"rdp-head_row"},A.children)),[])},className:y("navds-date",t),disabled:A=>a&&la(A)||Dn(A,n)||Kh({day:A,fromDate:d,toDate:u}),weekStartsOn:1,modifiers:{weekend:A=>a&&la(A)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:o,showOutsideDays:!0,startMonth:d,endMonth:u,month:Hh({month:g,start:d,end:u})},Ke(b,["onSelect","role","id","defaultSelected"])))};var tT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const aT=m.forwardRef((e,t)=>{var{className:r,locale:n,translations:a,selected:s,defaultSelected:i,onSelect:o,mode:l}=e,d=tT(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:u}=ee(),g=mn("DatePicker",a,Su(n)),[k,f]=ra({defaultValue:i,value:s,onChange:v=>o==null?void 0:o(v)});return c.createElement(Du,{translate:g},c.createElement("div",{ref:t,className:u("navds-date__standalone-wrapper",r)},c.createElement(rg,Object.assign({},d,{locale:n,handleSelect:f,selected:k,mode:l}))))});var sT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ca=m.forwardRef((e,t)=>{var{children:r,locale:n,translations:a,selected:s,id:i,defaultSelected:o,wrapperClassName:l,open:d,onClose:u,onOpenToggle:g,strategy:k,mode:f}=e,v=sT(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const b=mn("DatePicker",a,Su(n)),{cn:y}=ee(),T=_n(i),[p,h]=ra({defaultValue:!1,value:d}),[A,D]=m.useState(null),O=Nr(D,t),[S,I]=ra({defaultValue:o,value:s,onChange:_=>{var x;let F=!1;f==="single"&&_?F=!0:Mu(_)&&_.from&&_.to&&(F=!0,Ir(_.from,_.to)&&(F=!1)),F&&(u==null||u(),h(!1)),(x=v==null?void 0:v.onSelect)===null||x===void 0||x.call(v,_)}});return c.createElement(Du,{translate:b},c.createElement(Lv,{open:p,onOpen:()=>{h(_=>!_),g==null||g()},ariaId:T,defined:!0},c.createElement("div",{ref:O,className:y("navds-date__wrapper",l)},r,c.createElement(ob,{open:p,anchor:A,onClose:()=>{u==null||u(),p&&h(!1)},locale:n,translate:b,variant:f??"single",popoverProps:{id:T,strategy:k}},c.createElement(rg,Object.assign({},v,{locale:n,handleSelect:I,selected:S,mode:f}))))))});ca.Standalone=aT;ca.Input=Kv;const iT=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),oT=(e={})=>{var t;const{locale:r,required:n,defaultSelected:a,today:s=new Date,fromDate:i,toDate:o,disabled:l,disableWeekends:d,onDateChange:u,inputFormat:g,onValidate:k,defaultMonth:f,allowTwoDigitYear:v=!0}=e,[b,y]=m.useState(null),T=si(),p=r?Ou(r):T,[h,A]=m.useState(a),[D,O]=m.useState((t=h??f)!==null&&t!==void 0?t:s),[S,I]=m.useState(h),[_,x]=m.useState(!1),F=h?mt(h,p,"date",g):"",[q,w]=m.useState(F),N=m.useCallback(z=>{var Y,le;x(z),z&&O((le=(Y=S??h)!==null&&Y!==void 0?Y:f)!==null&&le!==void 0?le:s)},[f,h,S,s]),j=z=>{u==null||u(z),I(z)},L=(z={})=>k==null?void 0:k(iT(z));return{datepickerProps:{month:D,onMonthChange:O,onDayClick:(z,{selected:Y})=>{if(!(Y&&n)){if(z&&!Y&&(N(!1),b==null||b.focus()),Y){j(void 0),w(""),L({isValidDate:!1,isEmpty:!0});return}j(z),L(),O(z),w(z?mt(z,p,"date",g):"")}},selected:S??new Date("Invalid date"),locale:r,fromDate:i,toDate:o,today:s,open:_,onClose:()=>{N(!1),b==null||b.focus()},onOpenToggle:()=>N(!_),disabled:l,disableWeekends:d},inputProps:{onChange:z=>{w(z.target.value);const Y=rs(z.target.value,s,p,"date",v),le=i&&Y&&Qn(i,Y)>0,ie=o&&Y&&Qn(Y,o)>0;if(!Un(Y)||d&&la(Y)||l&&Dn(Y,l)){j(void 0),L({isInvalid:!Un(Y),isWeekend:d&&la(Y),isDisabled:l&&Dn(Y,l),isValidDate:!1,isEmpty:!z.target.value,isBefore:le??!1,isAfter:ie??!1});return}if(le||ie){j(void 0),L({isValidDate:!1,isBefore:le??!1,isAfter:ie??!1});return}j(Y),L(),O(f??Y)},onFocus:z=>{if(z.target.readOnly)return;const Y=rs(z.target.value,s,p,"date",v);if(Un(Y)){w(mt(Y,p,"date",g));const le=i&&Y&&Qn(i,Y)>0,ie=o&&Y&&Qn(Y,o)>0;!le&&!ie&&O(Y)}},onBlur:z=>{const Y=rs(z.target.value,s,p,"date",v);Un(Y)&&w(mt(Y,p,"date",g))},value:q,setAnchorRef:y},reset:()=>{var z;j(h),O((z=h??f)!==null&&z!==void 0?z:s),w(F??""),A(a)},selectedDay:S,setSelected:z=>{var Y;j(z),O((Y=z??f)!==null&&Y!==void 0?Y:s),w(z?mt(z,p,"date",g):"")}}};function Ze(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,s])=>[`--__${e}c-${t}-${r}-${a}`,s])):{}}const lT={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},dT={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},Uo=(e,t,r,n,a,s)=>t.split(" ").map((i,o,l)=>{var d,u;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let g=`var(--${s}-${r}-${i})`;if(n.includes(i))g=i==="px"?"1px":i;else if(r==="spacing"&&i.startsWith("space"))g=`var(--${s}-${i})`;else if(r==="spacing"){const k=`--${s}-spacing-${i}`;g=`var(${(d=lT[k])!==null&&d!==void 0?d:k})`}else if(r==="radius"){const k=(u=dT[i])!==null&&u!==void 0?u:i;g=`var(--${s}-radius-${k})`}return a?i==="0"?"0":`calc(-1 * ${g})`:g}).join(" ");function fn(e,t,r,n,a,s=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${t}-${r}-xs`]:Uo(r,a,n,i,s,e)};const o={};return Object.entries(a).forEach(([l,d])=>{o[`--__${e}c-${t}-${r}-${l}`]=Uo(r,d,n,i,s,e)}),o}const wi=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Oi=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:a,margin:s,marginInline:i,marginBlock:o,width:l,minWidth:d,maxWidth:u,height:g,minHeight:k,maxHeight:f,position:v,inset:b,top:y,right:T,left:p,bottom:h,overflow:A,overflowX:D,overflowY:O,flexBasis:S,flexGrow:I,flexShrink:_,gridColumn:x})=>{const F=it(!1),{cn:q}=ee(),w=F?"ax":"a",N=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},fn(w,"r","p","spacing",r)),fn(w,"r","pi","spacing",n)),fn(w,"r","pb","spacing",a)),fn(w,"r","m","spacing",s)),fn(w,"r","mi","spacing",i)),fn(w,"r","mb","spacing",o)),Ze(w,"r","w",l)),Ze(w,"r","minw",d)),Ze(w,"r","maxw",u)),Ze(w,"r","h",g)),Ze(w,"r","minh",k)),Ze(w,"r","maxh",f)),Ze(w,"r","position",v)),fn(w,"r","inset","spacing",b)),fn(w,"r","top","spacing",y)),fn(w,"r","right","spacing",T)),fn(w,"r","bottom","spacing",h)),fn(w,"r","left","spacing",p)),Ze(w,"r","overflow",A)),Ze(w,"r","overflowx",D)),Ze(w,"r","overflowy",O)),Ze(w,"r","flex-basis",S)),Ze(w,"r","flex-grow",I)),Ze(w,"r","flex-shrink",_)),Ze(w,"r","grid-column",x));return c.createElement(st,{className:q({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":s,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":l,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":g,"navds-r-minh":k,"navds-r-maxh":f,"navds-r-position":v,"navds-r-inset":b,"navds-r-top":y,"navds-r-right":T,"navds-r-bottom":h,"navds-r-left":p,"navds-r-overflow":A,"navds-r-overflowx":D,"navds-r-overflowy":O,"navds-r-flex-basis":S,"navds-r-flex-grow":I,"navds-r-flex-shrink":_,"navds-r-grid-column":x}),style:N},e)};var uT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const gT=m.forwardRef((e,t)=>{var{children:r,className:n,as:a="div",background:s,borderColor:i,borderWidth:o,borderRadius:l,shadow:d,style:u,asChild:g}=e,k=uT(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:f}=ee(),v=Object.assign(Object.assign(Object.assign({},u),{"--__axc-box-background":s?`var(--ax-bg-${s})`:void 0,"--__axc-box-shadow":d?`var(--ax-shadow-${d})`:void 0,"--__axc-box-border-color":i?`var(--ax-border-${i})`:void 0,"--__axc-box-border-width":o?o.split(" ").map(y=>`${y}px`).join(" "):void 0}),fn("ax","box","radius","radius",l,!1,["0"])),b=g?st:a;return c.createElement(Oi,Object.assign({},k),c.createElement(b,Object.assign({},Ke(k,wi),{ref:t,style:v,className:f("navds-box",n,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":o,"navds-box-radius":l,"navds-box-shadow":d})}),r))});var mT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const kT=m.forwardRef((e,t)=>{var{children:r,className:n,as:a="div",background:s,borderColor:i,borderWidth:o,borderRadius:l,shadow:d,style:u,asChild:g}=e,k=mT(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const f=it(!1),{cn:v}=ee(),b=f?"ax":"a",y=Object.assign(Object.assign(Object.assign({},u),{[`--__${b}c-box-background`]:s?`var(--a-${s})`:void 0,[`--__${b}c-box-shadow`]:d?`var(--a-shadow-${d})`:void 0,[`--__${b}c-box-border-color`]:i?`var(--a-${i})`:void 0,[`--__${b}c-box-border-width`]:o?o.split(" ").map(p=>`${p}px`).join(" "):void 0}),fn(b,"box","radius","radius",l,!1,["0"])),T=g?st:a;return c.createElement(Oi,Object.assign({},k),c.createElement(T,Object.assign({},Ke(k,wi),{ref:t,style:y,className:v("navds-box",n,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":o,"navds-box-border-radius":l,"navds-box-shadow":d})}),r))}),tg=kT;tg.New=gT;var fT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ag=m.forwardRef((e,t)=>{var{children:r,className:n,as:a="div",align:s,justify:i,wrap:o=!0,gap:l,style:d,direction:u="row",asChild:g}=e,k=fT(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const v=it(!1)?"ax":"a",{cn:b}=ee(),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),fn(v,"stack","gap","spacing",l)),Ze(v,"stack","direction",u)),Ze(v,"stack","align",s)),Ze(v,"stack","justify",i)),T=g?st:a;return c.createElement(Oi,Object.assign({},k),c.createElement(T,Object.assign({},Ke(k,wi),{ref:t,style:y,className:b("navds-stack",n,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":l,"navds-stack-align":s,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":o})}),r))});var cT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vn=m.forwardRef((e,t)=>{var{as:r="div"}=e,n=cT(e,["as"]);return c.createElement(ag,Object.assign({as:r},n,{ref:t,direction:"row"}))});var yT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const An=m.forwardRef((e,t)=>{var{as:r="div"}=e,n=yT(e,["as"]);return c.createElement(ag,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))});var pT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vT=m.forwardRef((e,t)=>{var{className:r}=e,n=pT(e,["className"]);const{cn:a}=ee();return c.createElement("tbody",Object.assign({},n,{ref:t,className:a("navds-table__body",r)}))});var bT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const sg=m.forwardRef((e,t)=>{var{className:r,children:n,align:a,textSize:s}=e,i=bT(e,["className","children","align","textSize"]);const{cn:o}=ee();return c.createElement("th",Object.assign({ref:t,className:o("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":s==="small"})},i),n)}),ig=m.createContext(null);var hT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const TT=m.forwardRef((e,t)=>{var r,n,a,s,{className:i,children:o,sortable:l=!1,sortKey:d}=e,u=hT(e,["className","children","sortable","sortKey"]);const g=m.useContext(ig),{cn:k}=ee();return l&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),c.createElement(sg,Object.assign({scope:"col",ref:t,className:k(i),"aria-sort":l?((r=g==null?void 0:g.sort)===null||r===void 0?void 0:r.orderBy)===d?(n=g==null?void 0:g.sort)===null||n===void 0?void 0:n.direction:"none":void 0},u),l?c.createElement("button",{type:"button",className:k("navds-table__sort-button"),onClick:l&&d?()=>{var f;return(f=g==null?void 0:g.onSortChange)===null||f===void 0?void 0:f.call(g,d)}:void 0},o,((a=g==null?void 0:g.sort)===null||a===void 0?void 0:a.orderBy)===d?((s=g==null?void 0:g.sort)===null||s===void 0?void 0:s.direction)==="descending"?c.createElement(fk,{"aria-hidden":!0}):c.createElement(yk,{"aria-hidden":!0}):c.createElement(Dm,{"aria-hidden":!0})):o)});var ET=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const og=m.forwardRef((e,t)=>{var{className:r,children:n="",align:a,textSize:s}=e,i=ET(e,["className","children","align","textSize"]);const{cn:o}=ee();return c.createElement(_e,Object.assign({as:"td",ref:t,className:o("navds-table__data-cell",r,{[`navds-table__data-cell--align-${a}`]:a}),size:s},i),n)});var RT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const AT=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function wT(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function Bo(e){return typeof e=="string"&&e[e.length-1]==="%"&&wT(e.substring(0,e.length-1))}function as(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function OT(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const ST=e=>{var{children:t,className:r,innerClassName:n,duration:a=250,easing:s="ease",height:i}=e,o=RT(e,["children","className","innerClassName","duration","easing","height"]);const{cn:l}=ee(),d=m.useRef(i),u=m.useRef(null),g=m.useRef(),k=m.useRef(),f=m.useRef(i),v=m.useRef("visible"),b=AT?0:a;typeof f.current=="number"?(typeof i!="string"&&(f.current=i<0?0:i),v.current="hidden"):Bo(f.current)&&(f.current=i==="0%"?0:i,v.current="hidden");const[y,T]=m.useState(f.current),[p,h]=m.useState(v.current),[A,D]=m.useState(!1);m.useEffect(()=>{as(u.current,f.current)},[]),m.useEffect(()=>{if(i!==d.current&&u.current){OT(u.current,d.current),u.current.style.overflow="hidden";const _=u.current.offsetHeight;u.current.style.overflow="";const x=b;let F,q,w="hidden",N;const j=d.current==="auto";typeof i=="number"?(F=i<0?0:i,q=F):Bo(i)?(F=i==="0%"?0:i,q=F):(F=_,q="auto",w=void 0),j&&(q=F,F=_),T(F),h("hidden"),D(!j),clearTimeout(k.current),clearTimeout(g.current),j?(N=!0,k.current=setTimeout(()=>{T(q),h(w),D(N)},50),g.current=setTimeout(()=>{D(!1),as(u.current,q)},x)):k.current=setTimeout(()=>{T(q),h(w),D(!1),i!=="auto"&&as(u.current,F)},x)}return d.current=i,()=>{clearTimeout(k.current),clearTimeout(g.current)}},[i]);const O={height:y,overflow:p};A&&(O.transition=`height ${b}ms ${s} 0ms`,O.WebkitTransition=O.transition);const I=typeof o["aria-hidden"]<"u"?o["aria-hidden"]:i===0;return c.createElement("div",Object.assign({},o,{className:l(r),style:O}),c.createElement("div",{"aria-hidden":I,className:l(n),ref:u},t))};var DT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const lg=m.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:a=!0}=e,s=DT(e,["className","selected","shadeOnHover"]);const{cn:i}=ee();return c.createElement("tr",Object.assign({},s,{ref:t,className:i("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var IT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const qT=m.forwardRef((e,t)=>{var{className:r,children:n,content:a,togglePlacement:s="left",defaultOpen:i=!1,open:o,onOpenChange:l,expansionDisabled:d=!1,expandOnRowClick:u=!1,colSpan:g=999,contentGutter:k,onClick:f}=e,v=IT(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:b}=ee(),[y,T]=ra({defaultValue:i,value:o,onChange:l}),p=mn("global"),h=_n(),A=O=>{T(S=>!S),O.stopPropagation()},D=O=>{u&&!d&&!dg(O.target)&&A(O)};return c.createElement(c.Fragment,null,c.createElement(lg,Object.assign({},v,{ref:t,className:b("navds-table__expandable-row",r,{"navds-table__expandable-row--open":y,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":u}),onClick:Wr(f,D)}),s==="right"&&n,c.createElement(og,{className:b("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":y}),onClick:d?()=>null:A},!d&&c.createElement("button",{className:b("navds-table__toggle-expand-button"),type:"button","aria-controls":h,"aria-expanded":y,onClick:A},c.createElement(cd,{className:b("navds-table__expandable-icon"),title:p(y?"showLess":"showMore")}))),s==="left"&&n),c.createElement("tr",{"data-state":y?"open":"closed",className:b("navds-table__expanded-row"),"aria-hidden":!y,id:h},c.createElement("td",{colSpan:g,className:b("navds-table__expanded-row-cell")},c.createElement(ST,{className:b("navds-table__expanded-row-collapse"),innerClassName:b(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${k??s}`),height:y?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function dg(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:dg(e.parentElement)}var _T=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const NT=m.forwardRef((e,t)=>{var{className:r}=e,n=_T(e,["className"]);const{cn:a}=ee();return c.createElement("thead",Object.assign({},n,{ref:t,className:a("navds-table__header",r)}))});var PT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ve=m.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:a="medium",onSortChange:s,sort:i}=e,o=PT(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:l}=ee();return c.createElement(ig.Provider,{value:{onSortChange:s,sort:i}},c.createElement("table",Object.assign({},o,{ref:t,className:l("navds-table",`navds-table--${a}`,r,{"navds-table--zebra-stripes":n})})))});ve.Header=NT;ve.Body=vT;ve.Row=lg;ve.ColumnHeader=TT;ve.HeaderCell=sg;ve.DataCell=og;ve.ExpandableRow=qT;var jT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const FT=m.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:s="medium",icon:i}=e,o=jT(e,["children","className","variant","size","icon"]);const{cn:l}=ee(),d=(a==null?void 0:a.endsWith("-filled"))&&"strong",u=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",g=a==null?void 0:a.replace("-filled","").replace("-moderate","");return c.createElement(_e,Object.assign({},o,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:l("navds-tag",n,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${d||u||"outline"}`,`navds-tag--${g}`)}),i&&c.createElement("span",{className:l("navds-tag__icon--left")},i),r)}),ug=m.createContext({startDate:new Date,endDate:new Date,direction:"left",setStart:()=>null,setEndInclusive:()=>null,activeRow:0,setActiveRow:()=>null,initiate:()=>null,addFocusable:()=>null}),qt=()=>{const e=m.useContext(ug);return e||console.warn("useTimelineContext must be used with TimelineContext (<Timeline />)"),e},xT=({horizontalPosition:e})=>e<=98&&e>=0,Vo=(e,t)=>Kd(e,t)<=1,MT=({horizontalPosition:e,width:t})=>e>=0&&e<=100&&t>0,qs=(e,t,r)=>{const n=ao(r,t);return ao(e,t)/n*100},Ma=(e,t,r,n)=>{const a=qs(e,r,n),s=qs(t,r,n)-a;return{horizontalPosition:a,width:s}},UT=(e,t,r,n,a,s)=>{const i=Math.ceil(r/10),o=Rn(t);return new Array(r).fill(o).map((l,d)=>{if(d%i!==0)return null;const u=ci(l,d),{horizontalPosition:g,width:k}=Ma(u,jr(u,1),e,t);return{direction:n,horizontalPosition:g,label:nn(u,a,{locale:s}),date:u,width:k}}).filter(l=>l!==null)},BT=(e,t,r,n,a)=>{const s=yr(e),i=_a(t),o=Ey(i,s)+1;return new Array(o).fill(s).map((l,d)=>{const u=rt(l,d),{horizontalPosition:g,width:k}=Ma(u,rt(u,1),e,t);return{direction:r,horizontalPosition:g,label:nn(u,n,{locale:a}),date:u,width:k}})},VT=(e,t,r,n,a)=>{const s=dt(e),i=Dt(t),o=Ry(i,e)+1;return new Array(o).fill(s).map((l,d)=>{const u=Dr(l,d),{horizontalPosition:g,width:k}=Ma(u,Dr(u,1),e,t);return{direction:r,horizontalPosition:g,label:nn(u,n,{locale:a}),date:u,width:k}})},LT=(e,t,r,n,a)=>{const s=Kd(t,e);if(s<40){const o=a("dayFormat");return UT(e,t,s,r,o,n)}if(s<370){const o=a("monthFormat");return BT(e,t,r,o,n)}const i=a("yearFormat");return VT(e,t,r,i,n)},KT=({templates:e})=>{const{endDate:t,startDate:r,direction:n}=qt(),a=mn("Timeline",{dayFormat:e==null?void 0:e.day,monthFormat:e==null?void 0:e.month,yearFormat:e==null?void 0:e.year}),s=si(),i=LT(r,t,n,s,a),{cn:o}=ee();return c.createElement("div",{className:o("navds-timeline__axislabels"),"aria-hidden":"true"},i.filter(xT).map(l=>c.createElement(er,{className:o("navds-timeline__axislabels-label"),as:"div",key:l.label,style:{justifyContent:n==="left"?"flex-start":"flex-end",[n]:`${l.horizontalPosition}%`,width:`${l.width}%`}},l.label)))};var CT=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const gg=m.forwardRef((e,t)=>{var{date:r,children:n}=e,a=CT(e,["date","children"]);const{cn:s}=ee(),{startDate:i,endDate:o,direction:l}=qt(),[d,u]=m.useState(!1),g=m.useRef(null),k=mn("Timeline"),v=!it(!1),{context:b,placement:y,middlewareData:{arrow:{x:T,y:p}={}},refs:h,floatingStyles:A}=hi({placement:"top",open:d,onOpenChange:w=>u(w),whileElementsMounted:ei,middleware:[ni(v?16:8),ri(),ti({padding:5,fallbackPlacements:["bottom","top"]}),ai({element:g,padding:5})]}),D=cu(b,{handleClose:Ru(),restMs:25,delay:{open:1e3},move:!1}),O=hu(b),S=bu(b),I=Eu(b,{role:"dialog"}),{getFloatingProps:_,getReferenceProps:x}=Tu([D,O,S,I]),F=Nr(h.setReference,t),q={top:"bottom",right:"left",bottom:"top",left:"right"}[y.split("-")[0]];return c.createElement(c.Fragment,null,c.createElement("div",{className:s("navds-timeline__pin-wrapper"),style:{[l]:`${qs(r,i,o)}%`}},c.createElement("button",Object.assign({},a,{ref:F,className:s("navds-timeline__pin-button"),"aria-label":k("Pin.pin",{date:nn(r,k("dateFormat"))}),type:"button","aria-expanded":n?d:void 0},x({onKeyDown:w=>{var N;(N=a==null?void 0:a.onKeyDown)===null||N===void 0||N.call(a,w),w.key==="Enter"?u(j=>!j):w.key===" "&&u(!1)}})))),n&&d&&c.createElement(vu,{context:b,modal:!1,initialFocus:-1,returnFocus:!1},c.createElement("div",Object.assign({className:s("navds-timeline__popover"),"data-placement":y,ref:h.setFloating},_(),{style:A}),n,v&&c.createElement("div",{ref:g,style:Object.assign(Object.assign(Object.assign({},T!=null?{left:T}:{}),p!=null?{top:p}:{}),q?{[q]:"-0.5rem"}:{}),className:s("navds-timeline__popover-arrow")}))))});gg.componentType="pin";const mg=m.createContext({periodId:"",firstFocus:!1}),kg=()=>{const e=m.useContext(mg);return e||console.warn("usePeriodContext must be used with PeriodContext"),e},fg=m.createContext({periods:[],id:"",active:!1,index:0}),Si=()=>{const e=m.useContext(fg);return e||console.warn("useRowContext must be used with RowContext"),e},cg=(e,t,r)=>at(`navds-timeline__period navds-timeline__period--${r}`,{"navds-timeline__period--connected-both":e==="both","navds-timeline__period--connected-right":e==="right"&&t==="left"||e==="left"&&t==="right","navds-timeline__period--connected-left":e==="left"&&t==="left"||e==="right"&&t==="right"}),yg=(e,t,r,n,a)=>{const s=a("dateFormat"),i=nn(e,s),o=nn(t,s);return a("Period.period",{status:n||a(`Period.${r}`),start:i,end:o})},GT=c.memo(({onSelectPeriod:e,start:t,end:r,status:n,cropped:a,direction:s,left:i,width:o,icon:l,children:d,isActive:u,statusLabel:g,restProps:k,periodRef:f})=>{var v;const{cn:b}=ee(),[y,T]=m.useState(!1),{index:p}=Si(),{firstFocus:h}=kg(),{initiate:A,addFocusable:D}=qt(),O=m.useRef(null),S=mn("Timeline"),_=!it(!1),{context:x,placement:F,middlewareData:{arrow:{x:q,y:w}={}},refs:N,floatingStyles:j}=hi({placement:(v=k==null?void 0:k.placement)!==null&&v!==void 0?v:"top",open:y,onOpenChange:J=>T(J),whileElementsMounted:ei,middleware:[ni(_?16:8),ri(),ti({padding:5,fallbackPlacements:["bottom","top"]}),ai({element:O,padding:5})]}),L=cu(x,{handleClose:Ru(),restMs:25,delay:{open:1e3},move:!1}),B=hu(x),V=bu(x),U=Eu(x,{role:"dialog"}),{getFloatingProps:$,getReferenceProps:Z}=Tu([L,B,V,U]),K=Nr(N.setReference,f),re={top:"bottom",right:"left",bottom:"top",left:"right"}[F.split("-")[0]];return c.createElement(c.Fragment,null,c.createElement("button",Object.assign({},k,{type:"button",ref:J=>{h&&D(J,p),K(J)},"aria-label":yg(t,r,n,g,S),className:b("navds-timeline__period--clickable",cg(a,s,n),k==null?void 0:k.className,{"navds-timeline__period--selected":u}),"aria-expanded":d?y:void 0,"aria-current":u||void 0},Z({onFocus:()=>{A(p)},onKeyDown:J=>{var z;(z=k==null?void 0:k.onKeydown)===null||z===void 0||z.call(k,J),J.key==="Enter"&&T(Y=>!Y),J.key===" "&&(e==null||e(J),T(!1))},style:{width:`${o}%`,[s]:`${i}%`},onClick:J=>{var z;(z=k==null?void 0:k.onClick)===null||z===void 0||z.call(k,J),J.detail!==0&&(e==null||e(J))}})),c.createElement("span",{className:b("navds-timeline__period--inner")},l)),d&&y&&c.createElement(vu,{context:x,modal:!1,initialFocus:-1,returnFocus:!1},c.createElement("div",Object.assign({className:b("navds-timeline__popover"),"data-placement":F,ref:N.setFloating},$(),{style:j}),d,_&&c.createElement("div",{ref:O,style:Object.assign(Object.assign(Object.assign({},q!=null?{left:q}:{}),w!=null?{top:w}:{}),re?{[re]:"-0.5rem"}:{}),className:b("navds-timeline__popover-arrow")}))))}),HT=({start:e,end:t,status:r,cropped:n,direction:a,left:s,width:i,icon:o,statusLabel:l,restProps:d,periodRef:u})=>{const g=mn("Timeline"),{cn:k}=ee();return c.createElement("div",Object.assign({ref:u},d,{className:k(cg(n,a,r),d==null?void 0:d.className),style:{width:`${i}%`,[a]:`${s}%`}}),c.createElement("span",{className:k("navds-timeline__period--inner")},o,c.createElement("span",{className:k("navds-sr-only")},yg(e,t,r,l,g))))},Di=m.forwardRef(({icon:e},t)=>{const{periods:r}=Si(),{periodId:n,restProps:a}=kg(),s=r.find(T=>T.id===n);if(!s)return c.createElement(c.Fragment,null);const{start:i,endInclusive:o,width:l,horizontalPosition:d,status:u="neutral",onSelectPeriod:g,cropped:k,direction:f,children:v,isActive:b,statusLabel:y}=s;return g||v?c.createElement(GT,{periodRef:t,start:i,end:o,status:u,onSelectPeriod:g,cropped:k||"",direction:f,width:l,left:d,icon:e,isActive:b,statusLabel:y,restProps:a},v):c.createElement(HT,{periodRef:t,start:i,end:o,status:u,cropped:k||"",direction:f,width:l,left:d,icon:e,statusLabel:y,restProps:a})});Di.componentType="period";var $T=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ii=m.forwardRef((e,t)=>{var{label:r,className:n,headingTag:a="h3",icon:s}=e,i=$T(e,["label","className","headingTag","icon"]);const{cn:o}=ee(),{periods:l,id:d,active:u}=Si(),{setActiveRow:g}=qt(),k=mn("Timeline"),f=l.reduce((y,T)=>y.end>T.end?y:T,{}),v=l.reduce((y,T)=>y.end<T.end?y:T,{}),b=l.find(y=>!!y.children||!!y.onSelectPeriod);return c.createElement(c.Fragment,null,r&&c.createElement(_e,{as:a,id:`timeline-row-${d}`,className:o("navds-timeline__row-label"),size:"small"},s,r),c.createElement("div",{className:o("navds-timeline__row",{"navds-timeline__row--active":u})},c.createElement("ol",Object.assign({},i,{tabIndex:-1,ref:t,"aria-label":l.length===0?k("Row.noPeriods"):k("Row.period",{start:nn(v.start,k("dateFormat")),end:nn(f.end,k("dateFormat"))}),className:o("navds-timeline__row-periods",n),onKeyDown:y=>{(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),g(y.key))}}),l==null?void 0:l.map(y=>c.createElement("li",{key:`period-${y.id}`},c.createElement(mg.Provider,{value:{periodId:y.id,firstFocus:(b==null?void 0:b.id)===y.id,restProps:y==null?void 0:y.restProps}},c.createElement(Di,{start:y.start,end:y.endInclusive,icon:y.icon,ref:y==null?void 0:y.ref})))))))});Ii.componentType="row";const YT=(e,t)=>e.horizontalPosition-t.horizontalPosition,WT=(e,t,r,n="left",a,s,i)=>{const o=e.start,l=e.end,d=a<s.length-1&&!mi(s[a+1].start,l),{horizontalPosition:u,width:g}=Ma(Rn(o),ua(d?Rn(ci(s[a+1].start,1)):l),t,r);return{id:`r-${i}-p-${a}`,start:o,endInclusive:l,horizontalPosition:u,direction:n,width:g,end:l,status:e.status,onSelectPeriod:e.onSelectPeriod,icon:e.icon,children:e.children,isActive:e.isActive,statusLabel:e.statusLabel}},zT=(e,t,r)=>{const n=t>0&&Vo(e.start,r[t-1].endInclusive),a=t<r.length-1&&Vo(r[t+1].start,e.endInclusive);return n&&a?Object.assign(Object.assign({},e),{cropped:"both"}):n?Object.assign(Object.assign({},e),{cropped:"left"}):a?Object.assign(Object.assign({},e),{cropped:"right"}):e},XT=e=>{let{horizontalPosition:t,width:r,cropped:n}=e;return t+r>100&&(r=100-t,n=n==="left"||n==="both"?"both":"right"),t<0&&t+r>0&&(r=t+r,t=0,n=n==="right"||n==="both"?"both":"left"),Object.assign(Object.assign({},e),{width:r,horizontalPosition:t,cropped:n})},QT=(e,t,r,n)=>m.useMemo(()=>e.map((a,s)=>{const i=a.periods.sort((o,l)=>o.start.valueOf()-l.start.valueOf()).map((o,l)=>Object.assign(Object.assign({},WT(o,t,r,n,l,a.periods,s)),{restProps:o==null?void 0:o.restProps,ref:o==null?void 0:o.ref})).sort(YT).map(zT).map(XT).filter(MT);return{id:`tl-row-${s}`,label:a.label,headingTag:a.headingTag||"h3",icon:a.icon,periods:n==="left"?i:i.reverse(),restProps:a==null?void 0:a.restProps,ref:a==null?void 0:a.ref}}),[e,t,r,n]),JT=({startDate:e,rows:t})=>m.useMemo(()=>{if(e)return e;const r=t.flat().filter(a=>a.start).map(a=>a.start);return r.length===0?new Date:r.reduce((a,s)=>s<a?s:a)},[e,t]),ZT=(e,t)=>t.end>e?t.end:e,e0=e=>e.flat().reduce(ZT,new Date(0)),Lo=({endDate:e,rows:t})=>m.useMemo(()=>e||jr(e0(t),1),[e,t]),n0=e=>{const t=[];return e==null||e.forEach(r=>{var n,a,s,i,o,l,d,u,g,k,f,v;const b=[];if(c.isValidElement(r)&&(!((n=r==null?void 0:r.props)===null||n===void 0)&&n.children)){if(Array.isArray(r.props.children))for(let y=0;y<r.props.children.length;y++){const T=r.props.children[y];b.push({start:(a=T==null?void 0:T.props)===null||a===void 0?void 0:a.start,end:(s=T==null?void 0:T.props)===null||s===void 0?void 0:s.end,status:((i=T==null?void 0:T.props)===null||i===void 0?void 0:i.status)||"neutral",onSelectPeriod:(o=T.props)===null||o===void 0?void 0:o.onSelectPeriod,label:r.props.label,icon:T.props.icon,children:T.props.children,isActive:T.props.isActive,statusLabel:T.props.statusLabel,restProps:Ke(T.props,["start","end","status","onSelectPeriod","label","icon","children","isActive","statusLabel"]),ref:T==null?void 0:T.ref})}else b.push({start:r.props.children.props.start,end:r.props.children.props.end,status:((l=r.props.children.props)===null||l===void 0?void 0:l.status)||"neutral",onSelectPeriod:(d=r.props.children.props)===null||d===void 0?void 0:d.onSelectPeriod,label:r.props.label,icon:(u=r.props.children.props)===null||u===void 0?void 0:u.icon,children:(g=r.props.children.props)===null||g===void 0?void 0:g.children,statusLabel:(k=r.props.children.props)===null||k===void 0?void 0:k.statusLabel,restProps:Ke(r.props.children.props,["start","end","status","onSelectPeriod","label","icon","children","isActive","statusLabel"]),ref:(v=(f=r.props)===null||f===void 0?void 0:f.children)===null||v===void 0?void 0:v.ref});t.push({label:r.props.label,icon:r.props.icon,headingTag:r.props.headingTag,periods:b,restProps:Ke(r.props,["label","icon","headingTag"]),ref:r==null?void 0:r.ref})}}),t};var r0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const t0=m.forwardRef((e,t)=>{var{label:r,interval:n,count:a}=e,s=r0(e,["label","interval","count"]);const{setStart:i,endDate:o,startDate:l,direction:d}=qt(),u=mn("Timeline"),g=u("dateFormat"),{cn:k}=ee();let f;n==="month"?f=d==="left"?nu(o,a):rt(l,a):f=d==="left"?Bp(o,a):Dr(l,a);const v=Ir(d==="left"?l:o,f);return c.createElement(er,{as:"li"},c.createElement("button",Object.assign({type:"button","aria-label":v?u("Zoom.reset"):u("Zoom.zoom",{start:nn(f,g),end:nn(o,g)}),ref:t},s,{className:k("navds-timeline__zoom-button"),onClick:()=>{i(f)},"aria-pressed":v}),r))});var a0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const qi=m.forwardRef((e,t)=>{var{className:r,children:n}=e,a=a0(e,["className","children"]);const{cn:s}=ee();return c.createElement("ul",Object.assign({ref:t,className:s(r,"navds-timeline__zoom")},a),n)});qi.Button=t0;qi.componentType="zoom";var s0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fr=m.forwardRef((e,t)=>{var{children:r,startDate:n,endDate:a,direction:s="left",axisLabelTemplates:i}=e,o=s0(e,["children","startDate","endDate","direction","axisLabelTemplates"]);const{cn:l}=ee(),d=Array.isArray(r),u=m.useRef([]);d||(r=[r]);const g=c.Children.toArray(r).filter(q=>{var w;return((w=q==null?void 0:q.type)===null||w===void 0?void 0:w.componentType)==="row"}),k=c.Children.toArray(r).filter(q=>{var w;return((w=q==null?void 0:q.type)===null||w===void 0?void 0:w.componentType)==="pin"}).map(q=>()=>q),f=c.Children.toArray(r).find(q=>{var w;return((w=q==null?void 0:q.type)===null||w===void 0?void 0:w.componentType)==="zoom"}),v=m.useMemo(()=>n0(g),[g]),b=v.map(q=>q!=null&&q.periods?q.periods:[]),y=Rn(JT({startDate:n,rows:b})),[T,p]=m.useState(y),[h,A]=m.useState(null),[D,O]=m.useState(ua(Lo({endDate:a,rows:b}))),S=ua(Lo({endDate:a,rows:b})),I=QT(v,n??T,a??D,s),_=q=>{if(!(n||a))if(s==="left"){if(Ir(q,T)){p(y);return}p(q)}else{if(Ir(q,D)){O(S);return}O(q)}},x=q=>{var w,N,j,L;if(h!==null&&q==="ArrowDown"){for(let B=h+1;B<I.length;B++)if(I[B].periods.find(U=>!!U.children||!!U.onSelectPeriod)){A(B),(N=(w=u.current.find(U=>U.id===B))===null||w===void 0?void 0:w.ref)===null||N===void 0||N.focus();break}return}if(h!==null&&q==="ArrowUp"){for(let B=h-1;B>=0;B--)if(I[B].periods.find(U=>!!U.children||!!U.onSelectPeriod)){A(B),(L=(j=u.current.find(U=>U.id===B))===null||j===void 0?void 0:j.ref)===null||L===void 0||L.focus();break}return}},F=(q,w)=>{let N=u.current;N=N.filter(j=>j.id!==w),N.push({ref:q,id:w}),u.current=N};return c.createElement(ug.Provider,{value:{startDate:n??T,endDate:a??D,direction:s,setStart:q=>_(q),setEndInclusive:q=>O(q),activeRow:h,setActiveRow:q=>x(q),initiate:q=>A(q),addFocusable:F}},c.createElement("div",Object.assign({},o,{ref:t}),c.createElement("div",{className:l("navds-timeline")},c.createElement(KT,{templates:i}),k.map((q,w)=>c.createElement(q,{key:`pin-${w}`})),I.map((q,w)=>c.createElement(fg.Provider,{key:`row-${q.id}`,value:{periods:q.periods,id:q.id,active:h===w,index:w}},c.createElement(Ii,Object.assign({},q==null?void 0:q.restProps,{ref:q==null?void 0:q.ref,label:q.label,icon:q.icon,headingTag:q.headingTag}))))),f))});fr.Row=Ii;fr.Period=Di;fr.Pin=gg;fr.Zoom=qi;const i0=e=>{const t=Fr(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var o0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const pg=m.forwardRef((e,t)=>{var r,n,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:d,readOnly:u,inputDescriptionId:g}=i0(e),{cn:k}=ee(),f=m.useContext(At),{children:v,className:b,errorPropagation:y=!0,legend:T,description:p,hideLegend:h,nativeReadOnly:A=!0}=e,D=o0(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return c.createElement(At.Provider,{value:{error:y?(r=e.error)!==null&&r!==void 0?r:f==null?void 0:f.error:void 0,errorId:at({[i]:o,[(n=f==null?void 0:f.errorId)!==null&&n!==void 0?n:""]:!!(f!=null&&f.error)}),size:d,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:u}},c.createElement("fieldset",Object.assign({},Ke(D,["errorId","error","size","readOnly"]),Ke(s,["aria-describedby","aria-invalid"]),{ref:t,className:k(b,"navds-fieldset",`navds-fieldset--${d}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":u})}),c.createElement(qn,{size:d,as:"legend",className:k("navds-fieldset__legend",{"navds-sr-only":!!h})},u&&(A?c.createElement(ja,null):c.createElement(Ti,null)),T),!!p&&c.createElement(_e,{className:k("navds-fieldset__description",{"navds-sr-only":!!h}),id:g,size:d??"medium",as:"div"},e.description),v,c.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:k("navds-fieldset__error")},o&&c.createElement(lt,{size:d,showIcon:!0},e.error))))});var l0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vg=m.createContext(null);m.forwardRef((e,t)=>{var r,n,{value:a,defaultValue:s,onChange:i=()=>{},children:o,className:l}=e,d=l0(e,["value","defaultValue","onChange","children","className"]);const{cn:u}=ee(),g=m.useContext(At),[k,f]=m.useState(s??[]),v=b=>{const y=a??k,T=y.includes(b)?y.filter(p=>p!==b):[...y,b];a===void 0&&f(T),i(T)};return c.createElement(pg,Object.assign({},d,{ref:t,className:u(l,"navds-checkbox-group",`navds-checkbox-group--${(n=(r=d.size)!==null&&r!==void 0?r:g==null?void 0:g.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),c.createElement(vg.Provider,{value:{value:a,defaultValue:s,toggleValue:v}},c.createElement("div",{className:u("navds-checkboxes")},o)))});var d0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const u0=e=>{const t=m.useContext(vg),r=Fr(Ke(e,["description","children"]),"checkbox"),{inputProps:n,readOnly:a}=r,s=d0(r,["inputProps","readOnly"]);return t&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},s),{readOnly:a,nested:!!t,inputProps:Object.assign(Object.assign({},n),{checked:t!=null&&t.value?t.value.includes(e.value):e.checked,defaultChecked:t!=null&&t.defaultValue?t.defaultValue.includes(e.value):e.defaultChecked,onChange:i=>{var o;a||((o=e.onChange)===null||o===void 0||o.call(e,i),t==null||t.toggleValue(e.value))},onClick:i=>{var o;if(a){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)}})})},g0=m.forwardRef((e,t)=>{const{cn:r}=ee(),{inputProps:n,hasError:a,size:s,readOnly:i,nested:o}=u0(e),l=_n(),d=_n();return c.createElement("div",{className:r(e.className,"navds-checkbox",`navds-checkbox--${s}`,{"navds-checkbox--error":a,"navds-checkbox--disabled":n.disabled,"navds-checkbox--readonly":i})},c.createElement("input",Object.assign({},Ke(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),Ke(n,["aria-invalid"]),{type:"checkbox",className:r("navds-checkbox__input"),ref:u=>{var g;u&&(u.indeterminate=(g=e.indeterminate)!==null&&g!==void 0?g:!1),typeof t=="function"?t(u):t!=null&&(t.current=u)},"aria-labelledby":r(l,!!e["aria-labelledby"]&&e["aria-labelledby"],{[d]:e.description})})),c.createElement("label",{htmlFor:n.id,className:r("navds-checkbox__label")},c.createElement("span",{className:r("navds-checkbox__icon")},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},c.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),c.createElement("span",{className:r("navds-checkbox__icon-indeterminate")}),c.createElement("span",{className:r("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},c.createElement(_e,{as:"span",id:l,size:s,className:r("navds-checkbox__label-text"),"aria-hidden":!0},!o&&i&&c.createElement(Ti,null),e.children),e.description&&c.createElement(_e,{as:"span",id:d,size:s,className:r("navds-form-field__subdescription navds-checkbox__description"),"aria-hidden":!0},e.description))))});var m0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const bg=c.createContext(null),k0=m.forwardRef((e,t)=>{var r,n,{children:a,className:s,name:i,defaultValue:o,value:l,onChange:d=()=>{},required:u,readOnly:g}=e,k=m0(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:f}=ee(),v=m.useContext(At),b=_n();return c.createElement(pg,Object.assign({},k,{readOnly:g,ref:t,className:f(s,"navds-radio-group",`navds-radio-group--${(n=(r=k.size)!==null&&r!==void 0?r:v==null?void 0:v.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),c.createElement(bg.Provider,{value:{name:i??`radioGroupName-${b}`,defaultValue:o,value:l,onChange:d,required:u}},c.createElement("div",{className:f("navds-radio-buttons")},a)))});var f0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const c0=e=>{const t=m.useContext(bg),r=Fr(Ke(e,["description"]),"radio"),{inputProps:n,readOnly:a}=r,s=f0(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:i=>{var o,l;a||((o=e.onChange)===null||o===void 0||o.call(e,i),(l=t==null?void 0:t.onChange)===null||l===void 0||l.call(t,e.value))},onClick:i=>{var o;if(a){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)},required:t==null?void 0:t.required,type:"radio"})})},Ko=m.forwardRef((e,t)=>{const{cn:r}=ee(),{inputProps:n,size:a,hasError:s,readOnly:i}=c0(e),o=_n(),l=_n();return c.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":s,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i})},c.createElement("input",Object.assign({},Ke(e,["children","size","description","readOnly"]),Ke(n,["aria-invalid"]),{"aria-labelledby":at(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[l]:e.description}),className:r("navds-radio__input"),ref:t})),c.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},c.createElement("span",{className:r("navds-radio__content")},c.createElement(_e,{as:"span",id:o,size:a,"aria-hidden":!0},e.children),e.description&&c.createElement(_e,{as:"span",id:l,size:a,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var y0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Co=(e,t,r)=>{const{outerHeightStyle:n,overflow:a}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(r.current+=1,t):e},Go=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Lt(e){return parseInt(e,10)||0}const p0=m.forwardRef((e,t)=>{var r,n,{className:a,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:l,style:d,value:u}=e,g=y0(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:k}=m.useRef(u!=null),f=m.useRef(null),v=Nr(f,t),b=m.useRef(null),y=m.useRef(0),[T,p]=m.useState({outerHeightStyle:0}),h=c.useCallback(()=>{const S=f.current,_=Go(S).getComputedStyle(S);if(_.width==="0px")return{outerHeightStyle:0};const x=b.current;x.style.width=_.width,x.value=S.value||g.placeholder||"x",x.value.slice(-1)===`
`&&(x.value+=" ");const F=_.boxSizing,q=Lt(_.paddingBottom)+Lt(_.paddingTop),w=Lt(_.borderBottomWidth)+Lt(_.borderTopWidth),N=x.scrollHeight-q;x.value="x";const j=x.scrollHeight-q;let L=N;o&&(L=Math.max(Number(o)*j,L)),i&&(L=Math.min(Number(i)*j,L)),L=Math.max(L,j);const B=L+(F==="border-box"?q+w:0),V=Math.abs(L-N)<=1;return{outerHeightStyle:B,overflow:V}},[i,o,g.placeholder]),A=()=>{const S=h();Ho(S)||p(I=>Co(I,S,y))};Zr(()=>{const S=()=>{const q=h();Ho(q)||ld.flushSync(()=>{p(w=>Co(w,q,y))})},I=fd(()=>{var q,w,N;if(y.current=0,!((q=f.current)===null||q===void 0)&&q.style.height||!((w=f.current)===null||w===void 0)&&w.style.width){((N=f.current)===null||N===void 0?void 0:N.style.overflow)==="hidden"&&p(j=>Object.assign(Object.assign({},j),{overflow:!1}));return}S()},166,!0),_=f.current,x=Go(_);x.addEventListener("resize",I);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(I),F.observe(_)),()=>{I.clear(),x.removeEventListener("resize",I),F&&F.disconnect()}},[h]),Zr(()=>{A()}),m.useEffect(()=>{y.current=0},[u]);const D=S=>{y.current=0,k||A(),s&&s(S)},O=Object.assign({"--__ac-textarea-height":T.outerHeightStyle+"px","--__axc-textarea-height":T.outerHeightStyle+"px",overflow:T.overflow&&!l&&!(!((r=f.current)===null||r===void 0)&&r.style.height)&&!(!((n=f.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},d);return c.createElement(c.Fragment,null,c.createElement("textarea",Object.assign({value:u,onChange:D,ref:v,rows:o,style:O},g,{className:a})),c.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:b,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function Ho(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const v0=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:a})=>{const{cn:s}=ee(),i=mn("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=t-r,[l,d]=m.useState(o);return m.useEffect(()=>{const u=fd(()=>{d(o)},2e3);return u(),()=>{u.clear()}},[o]),c.createElement(c.Fragment,null,c.createElement("span",{id:e,className:s("navds-sr-only")},i("maxLength",{maxLength:t})),o<20&&c.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},$o(l,i)),c.createElement(_e,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:n},$o(o,i)))},$o=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var b0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const h0=m.forwardRef((e,t)=>{var r,n,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:d,inputDescriptionId:u}=Fr(e,"textarea"),{label:g,className:k,description:f,maxLength:v,hideLabel:b=!1,resize:y,UNSAFE_autoScrollbar:T,i18n:p,readOnly:h}=e,A=b0(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:D}=ee(),O=_n(),S=v!==void 0&&v>0,[I,_]=m.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),x=()=>{let q=A!=null&&A.minRows?A==null?void 0:A.minRows:3;return d==="small"&&(q=A!=null&&A.minRows?A==null?void 0:A.minRows:2),q},F=at(s["aria-describedby"],{[O??""]:S});return c.createElement("div",{className:D(k,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":h,"navds-textarea--readonly":h,"navds-textarea--error":l,"navds-textarea--autoscrollbar":T,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},c.createElement(qn,{htmlFor:s.id,size:d,className:D("navds-form-field__label",{"navds-sr-only":b})},h&&c.createElement(ja,null),g),!!f&&c.createElement(_e,{className:D("navds-form-field__description",{"navds-sr-only":b}),id:u,size:d,as:"div"},f),c.createElement(p0,Object.assign({},Ke(A,["error","errorId","size"]),s,{onChange:Wr(e.onChange,e.value===void 0?q=>_(q.target.value):void 0),minRows:x(),autoScrollbar:T,ref:t,readOnly:h,className:D("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},F?{"aria-describedby":F}:{})),S&&!h&&!s.disabled&&c.createElement(v0,{maxLengthId:O,maxLength:v,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:I.length,size:d,i18n:p}),c.createElement("div",{className:D("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&c.createElement(lt,{size:d,showIcon:!0},e.error)))});var T0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const E0=m.forwardRef((e,t)=>{const{cn:r}=ee(),{inputProps:n,errorId:a,showErrorMsg:s,hasError:i,size:o,inputDescriptionId:l}=Fr(e,"textField"),{label:d,className:u,description:g,htmlSize:k,hideLabel:f=!1,type:v="text",readOnly:b}=e,y=T0(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return c.createElement("div",{className:r(u,"navds-form-field",`navds-form-field--${o}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":b,"navds-text-field--readonly":b})},c.createElement(qn,{htmlFor:n.id,size:o,className:r("navds-form-field__label",{"navds-sr-only":f})},b&&c.createElement(ja,null),d),!!g&&c.createElement(_e,{className:r("navds-form-field__description",{"navds-sr-only":f}),id:l,size:o,as:"div"},g),c.createElement("input",Object.assign({},Ke(y,["error","errorId","size"]),n,{ref:t,type:v,readOnly:b,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:k})),c.createElement("div",{className:r("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},s&&c.createElement(lt,{size:o,showIcon:!0},e.error)))});function R0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yo={exports:{}},kt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo;function A0(){if(Wo)return kt;Wo=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return kt.Fragment=t,kt.jsx=r,kt.jsxs=r,kt}var zo;function w0(){return zo||(zo=1,Yo.exports=A0()),Yo.exports}var on=w0();const hg=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:on.jsx(ii,{variant:"warning",size:"small",children:on.jsx(An,{gap:"2",children:c.Children.map(e,t=>on.jsx(_e,{size:"small",children:t},lm(t)?t.key:t))})}),_t={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},Xo=Pn(_t),O0=({onClick:e=()=>{},erOverstyrt:t=!1})=>{const[r,n]=m.useState(t),a=()=>{r||(n(!0),e(!0))};return m.useEffect(()=>{n(t)},[t]),on.jsx(Xe,{variant:r?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:a,"aria-disabled":t,disabled:t,icon:r?on.jsx(Ym,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:Xo.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):on.jsx(Hm,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:Xo.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},ya="#B7B1A9",Tg=4,S0=(e,t,r)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${ya};
    border-radius: ${Tg}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${ya};
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
`,D0=(e,t,r)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${ya};
    border-radius: ${Tg}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${ya};
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
`,I0=(e,t,r,n)=>t?D0(e,r,n):S0(e,r,n),q0=(e,t,r)=>r?"":t?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,_0=({children:e,alignOffset:t=0,alignLeft:r=!1,marginTop:n=0,marginLeft:a=0,hideBorder:s=!1})=>on.jsxs(on.Fragment,{children:[on.jsx("style",{dangerouslySetInnerHTML:{__html:I0(t,r,n,a)}}),on.jsx("div",{className:q0(t,r,s),children:e})]});var Qo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Jo;function N0(){return Jo||(Jo=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,n.call(this,o)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Qo)),Qo.exports}var P0=N0();const _i=R0(P0),j0="_borderbox_1vkvn_1",F0="_error_1vkvn_5",x0="_warning_1vkvn_8",M0={borderbox:j0,error:F0,warning:x0};_i.bind(M0);const U0="_aksjonspunkt_kn1hn_1",B0="_erAksjonspunktApent_kn1hn_4",V0="_erIkkeGodkjentAvBeslutter_kn1hn_8",L0={aksjonspunkt:U0,erAksjonspunktApent:B0,erIkkeGodkjentAvBeslutter:V0};_i.bind(L0);const K0=({dateString:e,year:t,month:r,day:n})=>on.jsx(on.Fragment,{children:td(e,{year:t,month:r,day:n})});Pn(_t);const C0=({dateStringFom:e,dateStringTom:t,showTodayString:r=!1})=>on.jsx(on.Fragment,{children:Vs(e,t,{showTodayString:r})});Pn(_t);const G0="_divider_1t980_1",H0="_dividerParagraf_1t980_8",$0="_leftPanel_1t980_11",Y0="_rightPanel_1t980_14",W0={divider:G0,dividerParagraf:H0,leftPanel:$0,rightPanel:Y0};_i.bind(W0);const Ni=()=>on.jsx("span",{"data-testid":"editedIcon",children:on.jsx(ak,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});Pn(_t);Pn(_t);var Nt=e=>e.type==="checkbox",Rr=e=>e instanceof Date,dn=e=>e==null;const Eg=e=>typeof e=="object";var We=e=>!dn(e)&&!Array.isArray(e)&&Eg(e)&&!Rr(e),Rg=e=>We(e)&&e.target?Nt(e.target)?e.target.checked:e.target.value:e,z0=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ag=(e,t)=>e.has(z0(t)),X0=e=>{const t=e.constructor&&e.constructor.prototype;return We(t)&&t.hasOwnProperty("isPrototypeOf")},Pi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Be(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Pi&&(e instanceof Blob||n))&&(r||We(e)))if(t=r?[]:{},!r&&!X0(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=Be(e[a]));else return e;return t}var Pt=e=>Array.isArray(e)?e.filter(Boolean):[],Ue=e=>e===void 0,G=(e,t,r)=>{if(!t||!We(e))return r;const n=Pt(t.split(/[,[\].]+?/)).reduce((a,s)=>dn(a)?a:a[s],e);return Ue(n)||n===e?Ue(e[t])?r:e[t]:n},Tn=e=>typeof e=="boolean",ji=e=>/^\w*$/.test(e),wg=e=>Pt(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Oe=(e,t,r)=>{let n=-1;const a=ji(t)?[t]:wg(t),s=a.length,i=s-1;for(;++n<s;){const o=a[n];let l=r;if(n!==i){const d=e[o];l=We(d)||Array.isArray(d)?d:isNaN(+a[n+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}};const pa={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},On={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Xn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Og=c.createContext(null),Bn=()=>c.useContext(Og),Q0=e=>{const{children:t,...r}=e;return c.createElement(Og.Provider,{value:r},t)};var Sg=(e,t,r,n=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return t._proxyFormState[i]!==On.all&&(t._proxyFormState[i]=!n||On.all),r&&(r[i]=!0),e[i]}});return a};const Fi=typeof window<"u"?m.useLayoutEffect:m.useEffect;function J0(e){const t=Bn(),{control:r=t.control,disabled:n,name:a,exact:s}=e||{},[i,o]=c.useState(r._formState),l=c.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Fi(()=>r._subscribe({name:a,formState:l.current,exact:s,callback:d=>{!n&&o({...r._formState,...d})}}),[a,n,s]),c.useEffect(()=>{l.current.isValid&&r._setValid(!0)},[r]),c.useMemo(()=>Sg(i,r,l.current,!1),[i,r])}var Hn=e=>typeof e=="string",Dg=(e,t,r,n,a)=>Hn(e)?(n&&t.watch.add(e),G(r,e,a)):Array.isArray(e)?e.map(s=>(n&&t.watch.add(s),G(r,s))):(n&&(t.watchAll=!0),r);function Z0(e){const t=Bn(),{control:r=t.control,name:n,defaultValue:a,disabled:s,exact:i}=e||{},o=c.useRef(a),[l,d]=c.useState(r._getWatch(n,o.current));return Fi(()=>r._subscribe({name:n,formState:{values:!0},exact:i,callback:u=>!s&&d(Dg(n,r._names,u.values||r._formValues,!1,o.current))}),[n,r,s,i]),c.useEffect(()=>r._removeUnmounted()),l}function ut(e){const t=Bn(),{name:r,disabled:n,control:a=t.control,shouldUnregister:s}=e,i=Ag(a._names.array,r),o=Z0({control:a,name:r,defaultValue:G(a._formValues,r,G(a._defaultValues,r,e.defaultValue)),exact:!0}),l=J0({control:a,name:r,exact:!0}),d=c.useRef(e),u=c.useRef(a.register(r,{...e.rules,value:o,...Tn(e.disabled)?{disabled:e.disabled}:{}})),g=c.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!G(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!G(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!G(l.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!G(l.validatingFields,r)},error:{enumerable:!0,get:()=>G(l.errors,r)}}),[l,r]),k=c.useCallback(y=>u.current.onChange({target:{value:Rg(y),name:r},type:pa.CHANGE}),[r]),f=c.useCallback(()=>u.current.onBlur({target:{value:G(a._formValues,r),name:r},type:pa.BLUR}),[r,a._formValues]),v=c.useCallback(y=>{const T=G(a._fields,r);T&&y&&(T._f.ref={focus:()=>y.focus&&y.focus(),select:()=>y.select&&y.select(),setCustomValidity:p=>y.setCustomValidity(p),reportValidity:()=>y.reportValidity()})},[a._fields,r]),b=c.useMemo(()=>({name:r,value:o,...Tn(n)||l.disabled?{disabled:l.disabled||n}:{},onChange:k,onBlur:f,ref:v}),[r,n,l.disabled,k,f,v,o]);return c.useEffect(()=>{const y=a._options.shouldUnregister||s;a.register(r,{...d.current.rules,...Tn(d.current.disabled)?{disabled:d.current.disabled}:{}});const T=(p,h)=>{const A=G(a._fields,p);A&&A._f&&(A._f.mount=h)};if(T(r,!0),y){const p=Be(G(a._options.defaultValues,r));Oe(a._defaultValues,r,p),Ue(G(a._formValues,r))&&Oe(a._formValues,r,p)}return!i&&a.register(r),()=>{(i?y&&!a._state.action:y)?a.unregister(r):T(r,!1)}},[r,a,i,s]),c.useEffect(()=>{a._setDisabledField({disabled:n,name:r})},[n,r,a]),c.useMemo(()=>({field:b,formState:l,fieldState:g}),[b,l,g])}var eE=(e,t,r,n,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:a||!0}}:{},yn=e=>Array.isArray(e)?e:[e],Zo=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},_s=e=>dn(e)||!Eg(e);function mr(e,t){if(_s(e)||_s(t))return e===t;if(Rr(e)&&Rr(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const a of r){const s=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const i=t[a];if(Rr(s)&&Rr(i)||We(s)&&We(i)||Array.isArray(s)&&Array.isArray(i)?!mr(s,i):s!==i)return!1}}return!0}var ln=e=>We(e)&&!Object.keys(e).length,xi=e=>e.type==="file",xn=e=>typeof e=="function",va=e=>{if(!Pi)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ig=e=>e.type==="select-multiple",Mi=e=>e.type==="radio",nE=e=>Mi(e)||Nt(e),ss=e=>va(e)&&e.isConnected;function rE(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=Ue(e)?n++:e[t[n++]];return e}function tE(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ue(e[t]))return!1;return!0}function ze(e,t){const r=Array.isArray(t)?t:ji(t)?[t]:wg(t),n=r.length===1?e:rE(e,r),a=r.length-1,s=r[a];return n&&delete n[s],a!==0&&(We(n)&&ln(n)||Array.isArray(n)&&tE(n))&&ze(e,r.slice(0,-1)),e}var qg=e=>{for(const t in e)if(xn(e[t]))return!0;return!1};function ba(e,t={}){const r=Array.isArray(e);if(We(e)||r)for(const n in e)Array.isArray(e[n])||We(e[n])&&!qg(e[n])?(t[n]=Array.isArray(e[n])?[]:{},ba(e[n],t[n])):dn(e[n])||(t[n]=!0);return t}function _g(e,t,r){const n=Array.isArray(e);if(We(e)||n)for(const a in e)Array.isArray(e[a])||We(e[a])&&!qg(e[a])?Ue(t)||_s(r[a])?r[a]=Array.isArray(e[a])?ba(e[a],[]):{...ba(e[a])}:_g(e[a],dn(t)?{}:t[a],r[a]):r[a]=!mr(e[a],t[a]);return r}var ft=(e,t)=>_g(e,t,ba(t));const el={value:!1,isValid:!1},nl={value:!0,isValid:!0};var Ng=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ue(e[0].attributes.value)?Ue(e[0].value)||e[0].value===""?nl:{value:e[0].value,isValid:!0}:nl:el}return el},Pg=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>Ue(e)?e:t?e===""?NaN:e&&+e:r&&Hn(e)?new Date(e):n?n(e):e;const rl={isValid:!1,value:null};var jg=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,rl):rl;function tl(e){const t=e.ref;return xi(t)?t.files:Mi(t)?jg(e.refs).value:Ig(t)?[...t.selectedOptions].map(({value:r})=>r):Nt(t)?Ng(e.refs).value:Pg(Ue(t.value)?e.ref.value:t.value,e)}var aE=(e,t,r,n)=>{const a={};for(const s of e){const i=G(t,s);i&&Oe(a,s,i._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:n}},ha=e=>e instanceof RegExp,ct=e=>Ue(e)?e:ha(e)?e.source:We(e)?ha(e.value)?e.value.source:e.value:e,Yr=e=>({isOnSubmit:!e||e===On.onSubmit,isOnBlur:e===On.onBlur,isOnChange:e===On.onChange,isOnAll:e===On.all,isOnTouch:e===On.onTouched});const al="AsyncFunction";var sE=e=>!!e&&!!e.validate&&!!(xn(e.validate)&&e.validate.constructor.name===al||We(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===al)),iE=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Ns=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const Qr=(e,t,r,n)=>{for(const a of r||Object.keys(e)){const s=G(e,a);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],a)&&!n)return!0;if(i.ref&&t(i.ref,i.name)&&!n)return!0;if(Qr(o,t))break}else if(We(o)&&Qr(o,t))break}}};function sl(e,t,r){const n=G(e,r);if(n||ji(r))return{error:n,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=G(t,s),o=G(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(o&&o.type)return{name:s,error:o};if(o&&o.root&&o.root.type)return{name:`${s}.root`,error:o.root};a.pop()}return{name:r}}var oE=(e,t,r,n)=>{r(e);const{name:a,...s}=e;return ln(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(i=>t[i]===(!n||On.all))},lE=(e,t,r)=>!e||!t||e===t||yn(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),dE=(e,t,r,n,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(t||e):(r?n.isOnBlur:a.isOnBlur)?!e:(r?n.isOnChange:a.isOnChange)?e:!0,uE=(e,t)=>!Pt(G(e,t)).length&&ze(e,t),Fg=(e,t,r)=>{const n=yn(G(e,r));return Oe(n,"root",t[r]),Oe(e,r,n),e},Zt=e=>Hn(e);function il(e,t,r="validate"){if(Zt(e)||Array.isArray(e)&&e.every(Zt)||Tn(e)&&!e)return{type:r,message:Zt(e)?e:"",ref:t}}var Hr=e=>We(e)&&!ha(e)?e:{value:e,message:""},Ps=async(e,t,r,n,a,s)=>{const{ref:i,refs:o,required:l,maxLength:d,minLength:u,min:g,max:k,pattern:f,validate:v,name:b,valueAsNumber:y,mount:T}=e._f,p=G(r,b);if(!T||t.has(b))return{};const h=o?o[0]:i,A=q=>{a&&h.reportValidity&&(h.setCustomValidity(Tn(q)?"":q||""),h.reportValidity())},D={},O=Mi(i),S=Nt(i),I=O||S,_=(y||xi(i))&&Ue(i.value)&&Ue(p)||va(i)&&i.value===""||p===""||Array.isArray(p)&&!p.length,x=eE.bind(null,b,n,D),F=(q,w,N,j=Xn.maxLength,L=Xn.minLength)=>{const B=q?w:N;D[b]={type:q?j:L,message:B,ref:i,...x(q?j:L,B)}};if(s?!Array.isArray(p)||!p.length:l&&(!I&&(_||dn(p))||Tn(p)&&!p||S&&!Ng(o).isValid||O&&!jg(o).isValid)){const{value:q,message:w}=Zt(l)?{value:!!l,message:l}:Hr(l);if(q&&(D[b]={type:Xn.required,message:w,ref:h,...x(Xn.required,w)},!n))return A(w),D}if(!_&&(!dn(g)||!dn(k))){let q,w;const N=Hr(k),j=Hr(g);if(!dn(p)&&!isNaN(p)){const L=i.valueAsNumber||p&&+p;dn(N.value)||(q=L>N.value),dn(j.value)||(w=L<j.value)}else{const L=i.valueAsDate||new Date(p),B=$=>new Date(new Date().toDateString()+" "+$),V=i.type=="time",U=i.type=="week";Hn(N.value)&&p&&(q=V?B(p)>B(N.value):U?p>N.value:L>new Date(N.value)),Hn(j.value)&&p&&(w=V?B(p)<B(j.value):U?p<j.value:L<new Date(j.value))}if((q||w)&&(F(!!q,N.message,j.message,Xn.max,Xn.min),!n))return A(D[b].message),D}if((d||u)&&!_&&(Hn(p)||s&&Array.isArray(p))){const q=Hr(d),w=Hr(u),N=!dn(q.value)&&p.length>+q.value,j=!dn(w.value)&&p.length<+w.value;if((N||j)&&(F(N,q.message,w.message),!n))return A(D[b].message),D}if(f&&!_&&Hn(p)){const{value:q,message:w}=Hr(f);if(ha(q)&&!p.match(q)&&(D[b]={type:Xn.pattern,message:w,ref:i,...x(Xn.pattern,w)},!n))return A(w),D}if(v){if(xn(v)){const q=await v(p,r),w=il(q,h);if(w&&(D[b]={...w,...x(Xn.validate,w.message)},!n))return A(w.message),D}else if(We(v)){let q={};for(const w in v){if(!ln(q)&&!n)break;const N=il(await v[w](p,r),h,w);N&&(q={...N,...x(w,N.message)},A(N.message),n&&(D[b]=q))}if(!ln(q)&&(D[b]={ref:h,...q},!n))return D}}return A(!0),D};const gE={mode:On.onSubmit,reValidateMode:On.onChange,shouldFocusError:!0};function mE(e={}){let t={...gE,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:xn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const n={};let a=We(t.defaultValues)||We(t.values)?Be(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:Be(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...u};const k={array:Zo(),state:Zo()},f=t.criteriaMode===On.all,v=R=>P=>{clearTimeout(d),d=setTimeout(R,P)},b=async R=>{if(!t.disabled&&(u.isValid||g.isValid||R)){const P=t.resolver?ln((await S()).errors):await _(n,!0);P!==r.isValid&&k.state.next({isValid:P})}},y=(R,P)=>{!t.disabled&&(u.isValidating||u.validatingFields||g.isValidating||g.validatingFields)&&((R||Array.from(o.mount)).forEach(M=>{M&&(P?Oe(r.validatingFields,M,P):ze(r.validatingFields,M))}),k.state.next({validatingFields:r.validatingFields,isValidating:!ln(r.validatingFields)}))},T=(R,P=[],M,W,H=!0,C=!0)=>{if(W&&M&&!t.disabled){if(i.action=!0,C&&Array.isArray(G(n,R))){const ne=M(G(n,R),W.argA,W.argB);H&&Oe(n,R,ne)}if(C&&Array.isArray(G(r.errors,R))){const ne=M(G(r.errors,R),W.argA,W.argB);H&&Oe(r.errors,R,ne),uE(r.errors,R)}if((u.touchedFields||g.touchedFields)&&C&&Array.isArray(G(r.touchedFields,R))){const ne=M(G(r.touchedFields,R),W.argA,W.argB);H&&Oe(r.touchedFields,R,ne)}(u.dirtyFields||g.dirtyFields)&&(r.dirtyFields=ft(a,s)),k.state.next({name:R,isDirty:F(R,P),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Oe(s,R,P)},p=(R,P)=>{Oe(r.errors,R,P),k.state.next({errors:r.errors})},h=R=>{r.errors=R,k.state.next({errors:r.errors,isValid:!1})},A=(R,P,M,W)=>{const H=G(n,R);if(H){const C=G(s,R,Ue(M)?G(a,R):M);Ue(C)||W&&W.defaultChecked||P?Oe(s,R,P?C:tl(H._f)):N(R,C),i.mount&&b()}},D=(R,P,M,W,H)=>{let C=!1,ne=!1;const pe={name:R};if(!t.disabled){if(!M||W){(u.isDirty||g.isDirty)&&(ne=r.isDirty,r.isDirty=pe.isDirty=F(),C=ne!==pe.isDirty);const Ie=mr(G(a,R),P);ne=!!G(r.dirtyFields,R),Ie?ze(r.dirtyFields,R):Oe(r.dirtyFields,R,!0),pe.dirtyFields=r.dirtyFields,C=C||(u.dirtyFields||g.dirtyFields)&&ne!==!Ie}if(M){const Ie=G(r.touchedFields,R);Ie||(Oe(r.touchedFields,R,M),pe.touchedFields=r.touchedFields,C=C||(u.touchedFields||g.touchedFields)&&Ie!==M)}C&&H&&k.state.next(pe)}return C?pe:{}},O=(R,P,M,W)=>{const H=G(r.errors,R),C=(u.isValid||g.isValid)&&Tn(P)&&r.isValid!==P;if(t.delayError&&M?(l=v(()=>p(R,M)),l(t.delayError)):(clearTimeout(d),l=null,M?Oe(r.errors,R,M):ze(r.errors,R)),(M?!mr(H,M):H)||!ln(W)||C){const ne={...W,...C&&Tn(P)?{isValid:P}:{},errors:r.errors,name:R};r={...r,...ne},k.state.next(ne)}},S=async R=>{y(R,!0);const P=await t.resolver(s,t.context,aE(R||o.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return y(R),P},I=async R=>{const{errors:P}=await S(R);if(R)for(const M of R){const W=G(P,M);W?Oe(r.errors,M,W):ze(r.errors,M)}else r.errors=P;return P},_=async(R,P,M={valid:!0})=>{for(const W in R){const H=R[W];if(H){const{_f:C,...ne}=H;if(C){const pe=o.array.has(C.name),Ie=H._f&&sE(H._f);Ie&&u.validatingFields&&y([W],!0);const kn=await Ps(H,o.disabled,s,f,t.shouldUseNativeValidation&&!P,pe);if(Ie&&u.validatingFields&&y([W]),kn[C.name]&&(M.valid=!1,P))break;!P&&(G(kn,C.name)?pe?Fg(r.errors,kn,C.name):Oe(r.errors,C.name,kn[C.name]):ze(r.errors,C.name))}!ln(ne)&&await _(ne,P,M)}}return M.valid},x=()=>{for(const R of o.unMount){const P=G(n,R);P&&(P._f.refs?P._f.refs.every(M=>!ss(M)):!ss(P._f.ref))&&le(R)}o.unMount=new Set},F=(R,P)=>!t.disabled&&(R&&P&&Oe(s,R,P),!mr($(),a)),q=(R,P,M)=>Dg(R,o,{...i.mount?s:Ue(P)?a:Hn(R)?{[R]:P}:P},M,P),w=R=>Pt(G(i.mount?s:a,R,t.shouldUnregister?G(a,R,[]):[])),N=(R,P,M={})=>{const W=G(n,R);let H=P;if(W){const C=W._f;C&&(!C.disabled&&Oe(s,R,Pg(P,C)),H=va(C.ref)&&dn(P)?"":P,Ig(C.ref)?[...C.ref.options].forEach(ne=>ne.selected=H.includes(ne.value)):C.refs?Nt(C.ref)?C.refs.forEach(ne=>{(!ne.defaultChecked||!ne.disabled)&&(Array.isArray(H)?ne.checked=!!H.find(pe=>pe===ne.value):ne.checked=H===ne.value||!!H)}):C.refs.forEach(ne=>ne.checked=ne.value===H):xi(C.ref)?C.ref.value="":(C.ref.value=H,C.ref.type||k.state.next({name:R,values:Be(s)})))}(M.shouldDirty||M.shouldTouch)&&D(R,H,M.shouldTouch,M.shouldDirty,!0),M.shouldValidate&&U(R)},j=(R,P,M)=>{for(const W in P){if(!P.hasOwnProperty(W))return;const H=P[W],C=R+"."+W,ne=G(n,C);(o.array.has(R)||We(H)||ne&&!ne._f)&&!Rr(H)?j(C,H,M):N(C,H,M)}},L=(R,P,M={})=>{const W=G(n,R),H=o.array.has(R),C=Be(P);Oe(s,R,C),H?(k.array.next({name:R,values:Be(s)}),(u.isDirty||u.dirtyFields||g.isDirty||g.dirtyFields)&&M.shouldDirty&&k.state.next({name:R,dirtyFields:ft(a,s),isDirty:F(R,C)})):W&&!W._f&&!dn(C)?j(R,C,M):N(R,C,M),Ns(R,o)&&k.state.next({...r}),k.state.next({name:i.mount?R:void 0,values:Be(s)})},B=async R=>{i.mount=!0;const P=R.target;let M=P.name,W=!0;const H=G(n,M),C=Ie=>{W=Number.isNaN(Ie)||Rr(Ie)&&isNaN(Ie.getTime())||mr(Ie,G(s,M,Ie))},ne=Yr(t.mode),pe=Yr(t.reValidateMode);if(H){let Ie,kn;const Br=P.type?tl(H._f):Rg(R),jn=R.type===pa.BLUR||R.type===pa.FOCUS_OUT,Ba=!iE(H._f)&&!t.resolver&&!G(r.errors,M)&&!H._f.deps||dE(jn,G(r.touchedFields,M),r.isSubmitted,pe,ne),me=Ns(M,o,jn);Oe(s,M,Br),jn?(H._f.onBlur&&H._f.onBlur(R),l&&l(0)):H._f.onChange&&H._f.onChange(R);const Me=D(M,Br,jn),qe=!ln(Me)||me;if(!jn&&k.state.next({name:M,type:R.type,values:Be(s)}),Ba)return(u.isValid||g.isValid)&&(t.mode==="onBlur"?jn&&b():jn||b()),qe&&k.state.next({name:M,...me?{}:Me});if(!jn&&me&&k.state.next({...r}),t.resolver){const{errors:Fn}=await S([M]);if(C(Br),W){const bn=sl(r.errors,n,M),vr=sl(Fn,n,bn.name||M);Ie=vr.error,M=vr.name,kn=ln(Fn)}}else y([M],!0),Ie=(await Ps(H,o.disabled,s,f,t.shouldUseNativeValidation))[M],y([M]),C(Br),W&&(Ie?kn=!1:(u.isValid||g.isValid)&&(kn=await _(n,!0)));W&&(H._f.deps&&U(H._f.deps),O(M,kn,Ie,Me))}},V=(R,P)=>{if(G(r.errors,P)&&R.focus)return R.focus(),1},U=async(R,P={})=>{let M,W;const H=yn(R);if(t.resolver){const C=await I(Ue(R)?R:H);M=ln(C),W=R?!H.some(ne=>G(C,ne)):M}else R?(W=(await Promise.all(H.map(async C=>{const ne=G(n,C);return await _(ne&&ne._f?{[C]:ne}:ne)}))).every(Boolean),!(!W&&!r.isValid)&&b()):W=M=await _(n);return k.state.next({...!Hn(R)||(u.isValid||g.isValid)&&M!==r.isValid?{}:{name:R},...t.resolver||!R?{isValid:M}:{},errors:r.errors}),P.shouldFocus&&!W&&Qr(n,V,R?H:o.mount),W},$=R=>{const P={...i.mount?s:a};return Ue(R)?P:Hn(R)?G(P,R):R.map(M=>G(P,M))},Z=(R,P)=>({invalid:!!G((P||r).errors,R),isDirty:!!G((P||r).dirtyFields,R),error:G((P||r).errors,R),isValidating:!!G(r.validatingFields,R),isTouched:!!G((P||r).touchedFields,R)}),K=R=>{R&&yn(R).forEach(P=>ze(r.errors,P)),k.state.next({errors:R?r.errors:{}})},re=(R,P,M)=>{const W=(G(n,R,{_f:{}})._f||{}).ref,H=G(r.errors,R)||{},{ref:C,message:ne,type:pe,...Ie}=H;Oe(r.errors,R,{...Ie,...P,ref:W}),k.state.next({name:R,errors:r.errors,isValid:!1}),M&&M.shouldFocus&&W&&W.focus&&W.focus()},J=(R,P)=>xn(R)?k.state.subscribe({next:M=>R(q(void 0,P),M)}):q(R,P,!0),z=R=>k.state.subscribe({next:P=>{lE(R.name,P.name,R.exact)&&oE(P,R.formState||u,xe,R.reRenderRoot)&&R.callback({values:{...s},...r,...P})}}).unsubscribe,Y=R=>(i.mount=!0,g={...g,...R.formState},z({...R,formState:g})),le=(R,P={})=>{for(const M of R?yn(R):o.mount)o.mount.delete(M),o.array.delete(M),P.keepValue||(ze(n,M),ze(s,M)),!P.keepError&&ze(r.errors,M),!P.keepDirty&&ze(r.dirtyFields,M),!P.keepTouched&&ze(r.touchedFields,M),!P.keepIsValidating&&ze(r.validatingFields,M),!t.shouldUnregister&&!P.keepDefaultValue&&ze(a,M);k.state.next({values:Be(s)}),k.state.next({...r,...P.keepDirty?{isDirty:F()}:{}}),!P.keepIsValid&&b()},ie=({disabled:R,name:P})=>{(Tn(R)&&i.mount||R||o.disabled.has(P))&&(R?o.disabled.add(P):o.disabled.delete(P))},fe=(R,P={})=>{let M=G(n,R);const W=Tn(P.disabled)||Tn(t.disabled);return Oe(n,R,{...M||{},_f:{...M&&M._f?M._f:{ref:{name:R}},name:R,mount:!0,...P}}),o.mount.add(R),M?ie({disabled:Tn(P.disabled)?P.disabled:t.disabled,name:R}):A(R,!0,P.value),{...W?{disabled:P.disabled||t.disabled}:{},...t.progressive?{required:!!P.required,min:ct(P.min),max:ct(P.max),minLength:ct(P.minLength),maxLength:ct(P.maxLength),pattern:ct(P.pattern)}:{},name:R,onChange:B,onBlur:B,ref:H=>{if(H){fe(R,P),M=G(n,R);const C=Ue(H.value)&&H.querySelectorAll&&H.querySelectorAll("input,select,textarea")[0]||H,ne=nE(C),pe=M._f.refs||[];if(ne?pe.find(Ie=>Ie===C):C===M._f.ref)return;Oe(n,R,{_f:{...M._f,...ne?{refs:[...pe.filter(ss),C,...Array.isArray(G(a,R))?[{}]:[]],ref:{type:C.type,name:R}}:{ref:C}}}),A(R,!1,void 0,C)}else M=G(n,R,{}),M._f&&(M._f.mount=!1),(t.shouldUnregister||P.shouldUnregister)&&!(Ag(o.array,R)&&i.action)&&o.unMount.add(R)}}},He=()=>t.shouldFocusError&&Qr(n,V,o.mount),te=R=>{Tn(R)&&(k.state.next({disabled:R}),Qr(n,(P,M)=>{const W=G(n,M);W&&(P.disabled=W._f.disabled||R,Array.isArray(W._f.refs)&&W._f.refs.forEach(H=>{H.disabled=W._f.disabled||R}))},0,!1))},se=(R,P)=>async M=>{let W;M&&(M.preventDefault&&M.preventDefault(),M.persist&&M.persist());let H=Be(s);if(k.state.next({isSubmitting:!0}),t.resolver){const{errors:C,values:ne}=await S();r.errors=C,H=ne}else await _(n);if(o.disabled.size)for(const C of o.disabled)Oe(H,C,void 0);if(ze(r.errors,"root"),ln(r.errors)){k.state.next({errors:{}});try{await R(H,M)}catch(C){W=C}}else P&&await P({...r.errors},M),He(),setTimeout(He);if(k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ln(r.errors)&&!W,submitCount:r.submitCount+1,errors:r.errors}),W)throw W},ue=(R,P={})=>{G(n,R)&&(Ue(P.defaultValue)?L(R,Be(G(a,R))):(L(R,P.defaultValue),Oe(a,R,Be(P.defaultValue))),P.keepTouched||ze(r.touchedFields,R),P.keepDirty||(ze(r.dirtyFields,R),r.isDirty=P.defaultValue?F(R,Be(G(a,R))):F()),P.keepError||(ze(r.errors,R),u.isValid&&b()),k.state.next({...r}))},ge=(R,P={})=>{const M=R?Be(R):a,W=Be(M),H=ln(R),C=H?a:W;if(P.keepDefaultValues||(a=M),!P.keepValues){if(P.keepDirtyValues){const ne=new Set([...o.mount,...Object.keys(ft(a,s))]);for(const pe of Array.from(ne))G(r.dirtyFields,pe)?Oe(C,pe,G(s,pe)):L(pe,G(C,pe))}else{if(Pi&&Ue(R))for(const ne of o.mount){const pe=G(n,ne);if(pe&&pe._f){const Ie=Array.isArray(pe._f.refs)?pe._f.refs[0]:pe._f.ref;if(va(Ie)){const kn=Ie.closest("form");if(kn){kn.reset();break}}}}for(const ne of o.mount)L(ne,G(C,ne))}s=Be(C),k.array.next({values:{...C}}),k.state.next({values:{...C}})}o={mount:P.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!P.keepIsValid||!!P.keepDirtyValues,i.watch=!!t.shouldUnregister,k.state.next({submitCount:P.keepSubmitCount?r.submitCount:0,isDirty:H?!1:P.keepDirty?r.isDirty:!!(P.keepDefaultValues&&!mr(R,a)),isSubmitted:P.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:H?{}:P.keepDirtyValues?P.keepDefaultValues&&s?ft(a,s):r.dirtyFields:P.keepDefaultValues&&R?ft(a,R):P.keepDirty?r.dirtyFields:{},touchedFields:P.keepTouched?r.touchedFields:{},errors:P.keepErrors?r.errors:{},isSubmitSuccessful:P.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ce=(R,P)=>ge(xn(R)?R(s):R,P),rn=(R,P={})=>{const M=G(n,R),W=M&&M._f;if(W){const H=W.refs?W.refs[0]:W.ref;H.focus&&(H.focus(),P.shouldSelect&&xn(H.select)&&H.select())}},xe=R=>{r={...r,...R}},Te={control:{register:fe,unregister:le,getFieldState:Z,handleSubmit:se,setError:re,_subscribe:z,_runSchema:S,_focusError:He,_getWatch:q,_getDirty:F,_setValid:b,_setFieldArray:T,_setDisabledField:ie,_setErrors:h,_getFieldArray:w,_reset:ge,_resetDefaultValues:()=>xn(t.defaultValues)&&t.defaultValues().then(R=>{ce(R,t.resetOptions),k.state.next({isLoading:!1})}),_removeUnmounted:x,_disableForm:te,_subjects:k,_proxyFormState:u,get _fields(){return n},get _formValues(){return s},get _state(){return i},set _state(R){i=R},get _defaultValues(){return a},get _names(){return o},set _names(R){o=R},get _formState(){return r},get _options(){return t},set _options(R){t={...t,...R}}},subscribe:Y,trigger:U,register:fe,handleSubmit:se,watch:J,setValue:L,getValues:$,reset:ce,resetField:ue,clearErrors:K,unregister:le,setError:re,setFocus:rn,getFieldState:Z};return{...Te,formControl:Te}}var or=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})},is=(e,t,r={})=>r.shouldFocus||Ue(r.shouldFocus)?r.focusName||`${e}.${Ue(r.focusIndex)?t:r.focusIndex}.`:"",os=(e,t)=>[...e,...yn(t)],ls=e=>Array.isArray(e)?e.map(()=>{}):void 0;function ds(e,t,r){return[...e.slice(0,t),...yn(r),...e.slice(t)]}var us=(e,t,r)=>Array.isArray(e)?(Ue(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[],gs=(e,t)=>[...yn(t),...yn(e)];function kE(e,t){let r=0;const n=[...e];for(const a of t)n.splice(a-r,1),r++;return Pt(n).length?n:[]}var ms=(e,t)=>Ue(t)?[]:kE(e,yn(t).sort((r,n)=>r-n)),ks=(e,t,r)=>{[e[t],e[r]]=[e[r],e[t]]},ol=(e,t,r)=>(e[t]=r,e);function fE(e){const t=Bn(),{control:r=t.control,name:n,keyName:a="id",shouldUnregister:s,rules:i}=e,[o,l]=c.useState(r._getFieldArray(n)),d=c.useRef(r._getFieldArray(n).map(or)),u=c.useRef(o),g=c.useRef(n),k=c.useRef(!1);g.current=n,u.current=o,r._names.array.add(n),i&&r.register(n,i),c.useEffect(()=>r._subjects.array.subscribe({next:({values:O,name:S})=>{if(S===g.current||!S){const I=G(O,g.current);Array.isArray(I)&&(l(I),d.current=I.map(or))}}}).unsubscribe,[r]);const f=c.useCallback(O=>{k.current=!0,r._setFieldArray(n,O)},[r,n]),v=(O,S)=>{const I=yn(Be(O)),_=os(r._getFieldArray(n),I);r._names.focus=is(n,_.length-1,S),d.current=os(d.current,I.map(or)),f(_),l(_),r._setFieldArray(n,_,os,{argA:ls(O)})},b=(O,S)=>{const I=yn(Be(O)),_=gs(r._getFieldArray(n),I);r._names.focus=is(n,0,S),d.current=gs(d.current,I.map(or)),f(_),l(_),r._setFieldArray(n,_,gs,{argA:ls(O)})},y=O=>{const S=ms(r._getFieldArray(n),O);d.current=ms(d.current,O),f(S),l(S),!Array.isArray(G(r._fields,n))&&Oe(r._fields,n,void 0),r._setFieldArray(n,S,ms,{argA:O})},T=(O,S,I)=>{const _=yn(Be(S)),x=ds(r._getFieldArray(n),O,_);r._names.focus=is(n,O,I),d.current=ds(d.current,O,_.map(or)),f(x),l(x),r._setFieldArray(n,x,ds,{argA:O,argB:ls(S)})},p=(O,S)=>{const I=r._getFieldArray(n);ks(I,O,S),ks(d.current,O,S),f(I),l(I),r._setFieldArray(n,I,ks,{argA:O,argB:S},!1)},h=(O,S)=>{const I=r._getFieldArray(n);us(I,O,S),us(d.current,O,S),f(I),l(I),r._setFieldArray(n,I,us,{argA:O,argB:S},!1)},A=(O,S)=>{const I=Be(S),_=ol(r._getFieldArray(n),O,I);d.current=[..._].map((x,F)=>!x||F===O?or():d.current[F]),f(_),l([..._]),r._setFieldArray(n,_,ol,{argA:O,argB:I},!0,!1)},D=O=>{const S=yn(Be(O));d.current=S.map(or),f([...S]),l([...S]),r._setFieldArray(n,[...S],I=>I,{},!0,!1)};return c.useEffect(()=>{if(r._state.action=!1,Ns(n,r._names)&&r._subjects.state.next({...r._formState}),k.current&&(!Yr(r._options.mode).isOnSubmit||r._formState.isSubmitted)&&!Yr(r._options.reValidateMode).isOnSubmit)if(r._options.resolver)r._runSchema([n]).then(O=>{const S=G(O.errors,n),I=G(r._formState.errors,n);(I?!S&&I.type||S&&(I.type!==S.type||I.message!==S.message):S&&S.type)&&(S?Oe(r._formState.errors,n,S):ze(r._formState.errors,n),r._subjects.state.next({errors:r._formState.errors}))});else{const O=G(r._fields,n);O&&O._f&&!(Yr(r._options.reValidateMode).isOnSubmit&&Yr(r._options.mode).isOnSubmit)&&Ps(O,r._names.disabled,r._formValues,r._options.criteriaMode===On.all,r._options.shouldUseNativeValidation,!0).then(S=>!ln(S)&&r._subjects.state.next({errors:Fg(r._formState.errors,S,n)}))}r._subjects.state.next({name:n,values:Be(r._formValues)}),r._names.focus&&Qr(r._fields,(O,S)=>{if(r._names.focus&&S.startsWith(r._names.focus)&&O.focus)return O.focus(),1}),r._names.focus="",r._setValid(),k.current=!1},[o,n,r]),c.useEffect(()=>(!G(r._formValues,n)&&r._setFieldArray(n),()=>{const O=(S,I)=>{const _=G(r._fields,S);_&&_._f&&(_._f.mount=I)};r._options.shouldUnregister||s?r.unregister(n):O(n,!1)}),[n,r,a,s]),{swap:c.useCallback(p,[f,n,r]),move:c.useCallback(h,[f,n,r]),prepend:c.useCallback(b,[f,n,r]),append:c.useCallback(v,[f,n,r]),remove:c.useCallback(y,[f,n,r]),insert:c.useCallback(T,[f,n,r]),update:c.useCallback(A,[f,n,r]),replace:c.useCallback(D,[f,n,r]),fields:c.useMemo(()=>o.map((O,S)=>({...O,[a]:d.current[S]||or()})),[o,a])}}function xg(e={}){const t=c.useRef(void 0),r=c.useRef(void 0),[n,a]=c.useState({isDirty:!1,isValidating:!1,isLoading:xn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:xn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:mE(e),formState:n},e.formControl&&e.defaultValues&&!xn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=t.current.control;return s._options=e,Fi(()=>{const i=s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0});return a(o=>({...o,isReady:!0})),s._formState.isReady=!0,i},[s]),c.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),c.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode)},[s,e.mode,e.reValidateMode]),c.useEffect(()=>{e.errors&&(s._setErrors(e.errors),s._focusError())},[s,e.errors]),c.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),c.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==n.isDirty&&s._subjects.state.next({isDirty:i})}},[s,n.isDirty]),c.useEffect(()=>{e.values&&!mr(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[s,e.values]),c.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=Sg(n,s),t.current}function cE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ll={exports:{}},yt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl;function yE(){if(dl)return yt;dl=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return yt.Fragment=t,yt.jsx=r,yt.jsxs=r,yt}var ul;function pE(){return ul||(ul=1,ll.exports=yE()),ll.exports}var ke=pE();const gt=e=>e.reduce((t,r,n)=>({...t,[n]:a=>r(a)||!0}),{}),_r=(e,t)=>{const r=t.split(".").reduce((n,a)=>n!==void 0?n[a]:n,e);return r==null?void 0:r.message},gl=({name:e,label:t,validate:r=[],readOnly:n=!1,onChange:a,onClick:s,className:i,disabled:o})=>{const{formState:{errors:l}}=Bn(),{field:d}=ut({name:e,rules:{validate:m.useMemo(()=>gt(r),[r])}}),u=_r(l,e);return ke.jsxs(ke.Fragment,{children:[ke.jsx(g0,{size:"small",disabled:o||n,checked:d.value===!0,className:i,error:!!u,...d,onChange:g=>{d.onChange(g),a&&a(g.currentTarget.checked)},onClick:()=>{s&&s()},children:t}),u&&ke.jsx(lt,{children:_r(l,e)})]})};var js={exports:{}},vE=js.exports,ml;function bE(){return ml||(ml=1,function(e,t){(function(r,n){e.exports=n()})(vE,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},d=function(y){return(y=+y)+(y>68?1900:2e3)},u=function(y){return function(T){this[y]=+T}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(T){if(!T||T==="Z")return 0;var p=T.match(/([+-]|\d\d)/g),h=60*p[1]+(+p[2]||0);return h===0?0:p[0]==="+"?-h:h}(y)}],k=function(y){var T=l[y];return T&&(T.indexOf?T:T.s.concat(T.f))},f=function(y,T){var p,h=l.meridiem;if(h){for(var A=1;A<=24;A+=1)if(y.indexOf(h(A,0,T))>-1){p=A>12;break}}else p=y===(T?"pm":"PM");return p},v={A:[o,function(y){this.afternoon=f(y,!1)}],a:[o,function(y){this.afternoon=f(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[s,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[s,u("day")],Do:[o,function(y){var T=l.ordinal,p=y.match(/\d+/);if(this.day=p[0],T)for(var h=1;h<=31;h+=1)T(h).replace(/\[|\]/g,"")===y&&(this.day=h)}],w:[i,u("week")],ww:[s,u("week")],M:[i,u("month")],MM:[s,u("month")],MMM:[o,function(y){var T=k("months"),p=(k("monthsShort")||T.map(function(h){return h.slice(0,3)})).indexOf(y)+1;if(p<1)throw new Error;this.month=p%12||p}],MMMM:[o,function(y){var T=k("months").indexOf(y)+1;if(T<1)throw new Error;this.month=T%12||T}],Y:[/[+-]?\d+/,u("year")],YY:[s,function(y){this.year=d(y)}],YYYY:[/\d{4}/,u("year")],Z:g,ZZ:g};function b(y){var T,p;T=y,p=l&&l.formats;for(var h=(y=T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,F,q){var w=q&&q.toUpperCase();return F||p[q]||r[q]||p[w].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(N,j,L){return j||L.slice(1)})})).match(n),A=h.length,D=0;D<A;D+=1){var O=h[D],S=v[O],I=S&&S[0],_=S&&S[1];h[D]=_?{regex:I,parser:_}:O.replace(/^\[|\]$/g,"")}return function(x){for(var F={},q=0,w=0;q<A;q+=1){var N=h[q];if(typeof N=="string")w+=N.length;else{var j=N.regex,L=N.parser,B=x.slice(w),V=j.exec(B)[0];L.call(F,V),x=x.replace(V,"")}}return function(U){var $=U.afternoon;if($!==void 0){var Z=U.hours;$?Z<12&&(U.hours+=12):Z===12&&(U.hours=0),delete U.afternoon}}(F),F}}return function(y,T,p){p.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(d=y.parseTwoDigitYear);var h=T.prototype,A=h.parse;h.parse=function(D){var O=D.date,S=D.utc,I=D.args;this.$u=S;var _=I[1];if(typeof _=="string"){var x=I[2]===!0,F=I[3]===!0,q=x||F,w=I[2];F&&(w=I[2]),l=this.$locale(),!x&&w&&(l=p.Ls[w]),this.$d=function(B,V,U,$){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*B);var Z=b(V)(B),K=Z.year,re=Z.month,J=Z.day,z=Z.hours,Y=Z.minutes,le=Z.seconds,ie=Z.milliseconds,fe=Z.zone,He=Z.week,te=new Date,se=J||(K||re?1:te.getDate()),ue=K||te.getFullYear(),ge=0;K&&!re||(ge=re>0?re-1:te.getMonth());var ce,rn=z||0,xe=Y||0,Ce=le||0,Te=ie||0;return fe?new Date(Date.UTC(ue,ge,se,rn,xe,Ce,Te+60*fe.offset*1e3)):U?new Date(Date.UTC(ue,ge,se,rn,xe,Ce,Te)):(ce=new Date(ue,ge,se,rn,xe,Ce,Te),He&&(ce=$(ce).week(He).toDate()),ce)}catch{return new Date("")}}(O,_,S,p),this.init(),w&&w!==!0&&(this.$L=this.locale(w).$L),q&&O!=this.format(_)&&(this.$d=new Date("")),l={}}else if(_ instanceof Array)for(var N=_.length,j=1;j<=N;j+=1){I[1]=_[j-1];var L=p.apply(this,I);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}j===N&&(this.$d=new Date(""))}else A.call(this,D)}}})}(js)),js.exports}var hE=bE();const TE=cE(hE),EE="_textarea_1snk6_1",RE="_readOnlyField_1snk6_7",kl={textarea:EE,readOnlyField:RE},AE=e=>e!=null&&e!=="",Ua=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:a,size:s})=>AE(t)?ke.jsxs(An,{gap:"1",children:[e&&!a&&ke.jsx(qn,{size:s,children:e}),ke.jsxs(vn,{gap:"2",align:"center",wrap:!1,children:[ke.jsx(kd,{className:n==="textarea"?kl.textarea:kl.readOnlyField,size:s,children:t}),r&&ke.jsx(Ni,{})]})]}):null;Pe.extend(TE);const wE=({name:e,label:t,description:r,validate:n=[],hideLabel:a=!1,disabled:s=!1,isReadOnly:i=!1,onChange:o,disabledDays:l,isEdited:d,defaultMonth:u,fromDate:g,toDate:k,size:f="small"})=>{const{formState:{errors:v}}=Bn(),{field:b}=ut({name:e,rules:{validate:m.useMemo(()=>gt(n),[n])}}),y=b.value?Pe(b.value,dr,!0).format(Ft):"",[T,p]=m.useState(y),{datepickerProps:h,inputProps:A}=oT({onDateChange:S=>{if(S!==void 0){const I=Pe(S).format(dr);o&&o(I),b.onChange(I),p(Pe(I,dr,!0).format(Ft))}},defaultSelected:b.value?Pe(b.value,dr,!0).toDate():void 0,defaultMonth:u||(!b.value&&k?k:void 0),disabled:l}),D=m.useCallback(S=>{const I=Pe(S.target.value,Ft,!0).format(dr),_=I!=="Invalid Date";p(S.target.value),o&&o(_?I:S.target.value),b.onChange(_?I:S.target.value)},[p,o,b]);if(i)return ke.jsx(Ua,{label:t,value:b.value?Pe(b.value,dr,!0).format(Ft):void 0,isEdited:d,hideLabel:a,size:f});const O={...h,fromDate:g,toDate:k,dropdownCaption:g&&k?!0:void 0};return ke.jsx(ca,{...O,children:ke.jsx(ca.Input,{...A,hideLabel:a,onChange:D,value:T,size:f,label:t,description:r,disabled:s,error:_r(v,e)})})},OE=/^(\d+[,]?(\d{1,2})?)$/,SE=/^(\d{1,20}[,.]?(\d{1,10})?)$/,ea=({name:e,label:t,hideLabel:r,validate:n=[],readOnly:a=!1,description:s,autoFocus:i,isEdited:o,forceTwoDecimalDigits:l=!1,disabled:d,className:u,returnAsNumber:g=!1,onChange:k})=>{const[f,v]=m.useState(!1),{formState:{errors:b}}=Bn(),{field:y}=ut({name:e,rules:{validate:m.useMemo(()=>gt(n),[n])}});if(a)return ke.jsx(Ua,{label:t,value:y.value,isEdited:o,hideLabel:r});const T=l?OE:SE,p=y.value!==void 0&&y.value!==null?y.value.toString():"",h=!f&&l&&p!==""&&!Number.isNaN(p)?parseFloat(p).toFixed(2):p;return ke.jsx(E0,{size:"small",description:s,label:t,error:_r(b,e),...y,value:h.replace(".",","),autoFocus:i,autoComplete:"off",disabled:d,type:"text",hideLabel:r,inputMode:"decimal",className:u,onChange:A=>{v(!0);const D=A.currentTarget.value;let O;return D===""?O=null:T.test(D)?O=D.replace(",","."):O=y.value,k&&k(O),g&&(O=parseFloat(O),Number.isNaN(O)&&(O=null)),y.onChange(O)},onBlur:()=>{v(!1),y.onBlur(),l&&p.slice(-1)==="."&&y.onChange(p+0)}})},DE="_hideRadioLabels_1u3xf_1",IE={hideRadioLabels:DE},fl=({label:e,description:t,name:r,validate:n=[],radios:a,onChange:s,disabled:i=!1,isReadOnly:o=!1,isHorizontal:l=!1,parse:d=b=>b,isTrueOrFalseSelection:u=!1,hideLegend:g=!1,hideRadioLabels:k=!1,isEdited:f=!1,size:v="small"})=>{const{formState:{errors:b}}=Bn(),{field:y}=ut({name:r,rules:{validate:m.useMemo(()=>gt(n),[n])}}),T=u?h=>h==="true":d,p=ke.jsxs(vn,{justify:"center",gap:"2",children:[e,o&&f&&ke.jsx(Ni,{})]});return ke.jsxs(k0,{name:r,value:y.value!==void 0?y.value:null,onChange:h=>{s&&s(h),y.onChange(h)},size:v,legend:p,description:t,error:_r(b,r),className:k?IE.hideRadioLabels:"",hideLegend:g,children:[!l&&a.map(h=>ke.jsxs(m.Fragment,{children:[ke.jsx(Ko,{size:v,value:T(h.value),disabled:h.disabled||i||o,children:h.label}),y.value===T(h.value)&&h.element]},h.value)),l&&ke.jsxs(ke.Fragment,{children:[ke.jsx(vn,{gap:"4",children:a.map(h=>ke.jsx(Ko,{size:v,value:T(h.value),disabled:h.disabled||i||o,children:h.label},h.value))}),a.filter(h=>y.value===T(h.value)).map(h=>ke.jsx(m.Fragment,{children:h.element},h.value))]})]})},Ta=({name:e,label:t,selectValues:r,validate:n=[],readOnly:a=!1,description:s,hideValueOnDisable:i=!1,onChange:o,disabled:l,className:d,hideLabel:u,isEdited:g,size:k})=>{const{formState:{errors:f}}=Bn(),{field:v}=ut({name:e,rules:{validate:m.useMemo(()=>gt(n),[n])}});if(a){const T=r.map(h=>h.props).find(h=>h.value===v.value),p=T?T.children:void 0;return ke.jsx(Ua,{value:p,label:t,hideLabel:u,isEdited:g,size:k})}const b=v.value||"",y=!r.map(T=>T.props.value).includes(b)&&b!=="";return y&&console.warn(`No corresponding option found for value '${b}'`),ke.jsxs(Is,{size:"small",className:d,error:_r(f,e),label:t,description:s,value:i&&l||y?"":v.value,disabled:l,onChange:T=>{o&&o(T),v.onChange(T)},hideLabel:u,children:[ke.jsx("option",{style:{display:"none"}}),",",r]})},qE="_textAreaFieldWithBadges_bdz0b_1",_E="_etikettWrapper_bdz0b_4",cl={textAreaFieldWithBadges:qE,etikettWrapper:_E},NE=({name:e,label:t,readOnly:r,maxLength:n,badges:a,validate:s=[],parse:i=k=>k,className:o,description:l,isEdited:d,size:u="small",...g})=>{const{formState:{errors:k}}=Bn(),{field:f}=ut({name:e,rules:{validate:m.useMemo(()=>gt(s),[s])}});return r?ke.jsx(Ua,{size:u,label:t,value:f.value,type:"textarea",isEdited:d,hideLabel:g.hideLabel}):ke.jsxs("div",{className:a?cl.textAreaFieldWithBadges:null,children:[a&&ke.jsx("div",{className:cl.etikettWrapper,children:a.map(({type:v,titleText:b})=>ke.jsx(FT,{variant:v,size:"small",children:b},b))}),ke.jsx(h0,{size:u,label:t,description:l,className:o,autoComplete:"off",...f,onChange:v=>f.onChange(v.currentTarget.value!==""?i(v.currentTarget.value):null),value:f.value?f.value:"",error:_r(k,e),maxLength:n,...g})]})},Mg=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return m.useEffect(()=>()=>{a&&a(i())},[]),ke.jsx(Q0,{...e,children:ke.jsx("form",{className:n,onSubmit:t?s(o=>t(o)):void 0,children:r})})};function Ug(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fs={exports:{}},PE=Fs.exports,yl;function jE(){return yl||(yl=1,function(e,t){(function(r,n){e.exports=n()})(PE,function(){return function(r,n){n.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(Fs)),Fs.exports}var FE=jE();const xE=Ug(FE);var xs={exports:{}},ME=xs.exports,pl;function UE(){return pl||(pl=1,function(e,t){(function(r,n){e.exports=n()})(ME,function(){return function(r,n){n.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(xs)),xs.exports}var BE=UE();const VE=Ug(BE),LE="Dato må være før eller lik {limit}",KE="Dato må være etter eller lik {limit}",CE="Perioder kan ikke overlappe i tid",GE="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",HE="Dato må være lik {value}",$E="Dato må skrives slik: dd.mm.åååå",YE="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",WE="Tallet kan ikke inneholde mer enn to desimaler",zE="Tallet kan ikke ha desimaler",XE="Feltet kan kun inneholde tall",QE="Ugyldig fødselsnummer",JE="Feltet må være et fødselsnummer (11 siffer)",ZE="Ugyldig organisasjonsnummer.",eR="Ugyldig organisasjonsnummer eller fødselsnummer",nR="Startdato må være før eller lik sluttdato",rR="Periode er utenfor opptjeningsperioden",tR="Ugyldig saksnummer eller fødselsnummer",aR="Feltet inneholder ugyldige tegn: {text}",sR="Feltet inneholder en ugyldig verdi: {value}",iR="Feltet kan ikke inneholde mellomrom",oR="Feltet må fylles ut",lR="Du kan skrive maksimalt {length} tegn",dR="Du må skrive minst {length} tegn",uR="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",gR="Feltet må være mindre eller lik {length}",mR="Feltet må være større eller lik {length}",kR="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",fR={DateNotBeforeOrEqual:LE,DateNotAfterOrEqual:KE,DateRangesOverlapping:CE,DateRangesOverlappingPeriodTypes:GE,DatesNotEqual:HE,InvalidDate:$E,InvalidDatesInPeriod:YE,InvalidDecimal:WE,InvalidInteger:zE,InvalidNumber:XE,InvalidFodselsnr:QE,InvalidFodselsnrFormat:JE,InvalidOrgnr:ZE,InvalidOrgnrOrFodselsnr:eR,InvalidPeriod:nR,InvalidPeriodRange:rR,InvalidSaksnrOrFodselsnrFormat:tR,InvalidText:aR,InvalidValue:sR,IllegalWhiteSpace:iR,IsRequired:oR,MaxLength:lR,MinLength:dR,MaxLengthOrFodselsnr:uR,MaxValue:gR,MinValue:mR,SammeFodselsnrSomSoker:kR},{formatMessage:zn}=Pn(fR),cR=()=>zn({id:"InvalidDate"}),yR=e=>zn({id:"InvalidDecimal"},{text:e}),pR=e=>zn({id:"InvalidInteger"},{text:e}),vR=e=>zn({id:"InvalidNumber"},{text:e}),bR=e=>zn({id:"InvalidText"},{text:e}),Bg=()=>zn({id:"IsRequired"}),hR=e=>zn({id:"MaxLength"},{length:e}),TR=e=>zn({id:"MinLength"},{length:e}),ER=e=>zn({id:"MaxValue"},{length:e}),RR=e=>zn({id:"MinValue"},{length:e}),AR=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,wR=/^\d+([,.]\d+)?$/,OR=/^\s*\d+\s*$/,SR=/^\d+(.\d{1,2})?$/,DR=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,IR=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Mr=e=>e==null||e.toString().trim().length===0;Pe.extend(xE);Pe.extend(VE);const Sn=e=>Mr(e)?Bg():void 0,Ea=e=>e==="-"?Bg():void 0,qR=e=>t=>Mr(t)||t.toString().trim().length>=e?null:TR(e),Vg=e=>t=>Mr(t)||t.toString().trim().length<=e?null:hR(e),_R=e=>t=>t>=e?null:RR(e),Lg=e=>t=>t<=e?null:ER(e),Kg=e=>Mr(e)||wR.test(e.toString())?null:vR(e.toString()),NR=e=>Mr(e)||OR.test(e.toString())?null:pR(e.toString()),PR=e=>Mr(e)||SR.test(e.toString())?null:yR(e.toString()),jR=e=>Kg(e)||NR(e),Ms=e=>Kg(e)||PR(e),FR=(e="")=>Mr(e)||AR.test(e)?null:cR(),xR=e=>{if(!DR.test(e)){const t=e.replace(IR,"");return bR(t.replace(/[\t]/g,"Tabulatortegn"))}return null},jt={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};Pn(jt);Pn(jt);Pn(jt);Pn(jt);Pn(jt);const MR=(e,...t)=>{const r=t.find(n=>n===e);if(!r)throw Error(`Det finnes ikke enum for kode ${e}`);return r},UR="_modal_mcjz4_1",BR="_dager_mcjz4_6",vl={modal:UR,dager:BR},VR=(e,t,r)=>n=>!Pe(n).isBefore(e)&&Pe(n).isBefore(t)?null:r.formatMessage({id:"DelOppPeriodeModal.UgyldigDato"}),Cg=({fomDato:e,tomDato:t,submit:r,cancel:n})=>{const a=tr(),s=xg(),i=s.watch("dato"),o=na(e,i);return E.jsx(Mg,{formMethods:s,onSubmit:l=>r(l.dato),children:E.jsxs(kr,{open:!0,"aria-label":a.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,className:vl.modal,children:[E.jsx(kr.Header,{children:E.jsx(Cs,{size:"small",children:E.jsx(oe,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),E.jsx(kr.Body,{children:E.jsxs(An,{gap:"4",children:[E.jsxs(An,{gap:"1",children:[E.jsx(er,{children:E.jsx(oe,{id:"DelOppPeriodeModalImpl.Periode"})}),E.jsx(_e,{size:"small",children:E.jsx(C0,{dateStringFom:e,dateStringTom:t})})]}),E.jsxs(vn,{justify:"space-between",children:[E.jsx(wE,{name:"dato",label:E.jsx(oe,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[Sn,FR,VR(e,t,a)],defaultMonth:new Date(e),fromDate:Pe(e).toDate(),toDate:Pe(t).toDate()}),i&&E.jsx(_e,{size:"small",className:vl.dager,children:o.formattedString})]})]})}),E.jsxs(kr.Footer,{children:[E.jsx(Xe,{size:"small",variant:"primary",children:E.jsx(oe,{id:"DelOppPeriodeModalImpl.Ok"})}),E.jsx(Xe,{size:"small",variant:"secondary",onClick:n,type:"button",children:E.jsx(oe,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};Cg.__docgenInfo={description:"",methods:[],displayName:"SplittPeriodeModal",props:{fomDato:{required:!0,tsType:{name:"string"},description:""},tomDato:{required:!0,tsType:{name:"string"},description:""},cancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"(dato: string) => void",signature:{arguments:[{type:{name:"string"},name:"dato"}],return:{name:"void"}}},description:""}}};const Ui={ORDINÆRT_ARBEID:"RenderUttakTable.ArbeidType.ORDINÆRT_ARBEID",FRILANS:"RenderUttakTable.ArbeidType.FRILANS",SELVSTENDIG_NÆRINGSDRIVENDE:"RenderUttakTable.ArbeidType.SELVSTENDIG_NÆRINGSDRIVENDE",ANNET:"RenderUttakTable.ArbeidType.ANNET"},LR="_weekPosition_14dys_1",KR="_tableOverflow_14dys_7",CR="_forsteKolWidth_14dys_10",GR="_utbetalingsgrad_14dys_17",HR="_selectStonad_14dys_23",$R="_numberWidth_14dys_29",lr={weekPosition:LR,tableOverflow:KR,forsteKolWidth:CR,utbetalingsgrad:GR,selectStonad:HR,numberWidth:$R},bl=Vg(3),YR=_R(0),WR=Lg(100),Us=(e,t,r)=>{const{prosentArbeid:n,arbeidsgiverReferanse:a,eksternArbeidsforholdId:s,uttakArbeidType:i}=e,o=typeof n<"u"?`${n}%`:"";let l;if(i&&i!==Aa.ORDINÆRT_ARBEID&&(l=r.formatMessage({id:Ui[i]})),a){const d=t[a];l=d?ad(d,s):a}return{prosentArbeidText:o,arbeidsforhold:l||""}},zR=(e,t,r)=>n=>!t&&(!r||r==="-")&&parseFloat(n)>0?e.formatMessage({id:"RenderUttakTable.MerEnNullUtaksprosent"}):null,XR=(e,t,r,n)=>a=>{const s=!t.periodeType&&t.aktiviteter[0].stønadskontoType==="-";return t.utsettelseType==="-"&&!s&&n&&parseFloat(a)<=0&&r===0?e.formatMessage({id:"ValidationMessage.HøyereEnn0NårInnvilgetUttak"}):null},QR=(e,t)=>r=>{const n=t("samtidigUttak"),a=t("samtidigUttaksprosent");return n&&a&&a<r?e.formatMessage({id:"ValidationMessage.utbetalingsgradErMerSamtidigUttaksprosent"}):null},JR=(e,t,r)=>n=>{const s=t("aktiviteter")[r];return parseFloat(s.weeks)===0&&parseFloat(s.days)===0&&parseFloat(n)>0?e.formatMessage({id:"ValidationMessage.ukerOgDagerVidNullUtbetalningsgradMessage"}):null},ZR=[en.FELLESPERIODE,en.FEDREKVOTE,en.FORELDREPENGER_FOR_FODSEL,en.FORELDREPENGER,en.MODREKVOTE,en.UDEFINERT],eA=e=>e.filter(({kode:t})=>ZR.some(r=>r===t)).map(({kode:t,navn:r})=>E.jsx("option",{value:t,children:r},t)),nA=(e,t)=>r=>{const n=e(`aktiviteter.${t}.weeks`),a=e(`aktiviteter.${t}.days`);if(parseFloat(n)!==0||parseFloat(a)!==0){const i=Sn(r);if(i)return i;const o=Ea(r);if(o)return o}return null},hl=(e,t,r)=>n=>t&&t!=="-"&&e("erOppfylt")&&parseFloat(n)>0?r.formatMessage({id:"ValidationMessage.trekkdagerErMerEnnNullUtsettelse"}):null,Gg=({periodeTyper:e,isReadOnly:t,arbeidsgiverOpplysningerPerId:r,aktiviteter:n,erOppfylt:a,valgtPeriode:s})=>{const i=tr(),{control:o,getValues:l,watch:d}=Bn(),{fields:u}=fE({control:o,name:"aktiviteter"}),g=eA(e),{utsettelseType:k}=s,f=d("aktiviteter");return E.jsx("div",{className:lr.tableOverflow,children:u.length>0&&E.jsxs(ve,{children:[E.jsx(ve.Header,{children:E.jsxs(ve.Row,{children:[E.jsx(ve.HeaderCell,{scope:"col",children:E.jsx(oe,{id:"RenderUttakTable.PeriodeData.Aktivitet"})}),E.jsx(ve.HeaderCell,{scope:"col",children:E.jsx(oe,{id:"RenderUttakTable.PeriodeData.Stonadskonto"})}),E.jsx(ve.HeaderCell,{scope:"col",children:E.jsx(oe,{id:"RenderUttakTable.PeriodeData.Trekk"})}),E.jsx(ve.HeaderCell,{scope:"col",children:E.jsx(oe,{id:"RenderUttakTable.PeriodeData.Andel"})}),E.jsx(ve.HeaderCell,{scope:"col",children:E.jsx(oe,{id:"RenderUttakTable.PeriodeData.Utbetalingsgrad"})})]})}),E.jsx(ve.Body,{children:u.map((v,b)=>{const y=Us(n[b],r,i),T=f.reduce((p,h,A)=>A!==b?p+parseInt(h.utbetalingsgrad,10):p,0);return E.jsxs(ve.Row,{children:[E.jsx(ve.DataCell,{children:E.jsx(_e,{size:"small",className:lr.forsteKolWidth,children:y.arbeidsforhold})}),E.jsx(ve.DataCell,{children:E.jsx("div",{className:lr.selectStonad,children:E.jsx(Ta,{name:`aktiviteter.${b}.stønadskontoType`,selectValues:g,hideLabel:!0,label:"",readOnly:t,validate:[nA(l,b)]})})}),E.jsx(ve.DataCell,{children:E.jsxs(vn,{gap:"2",align:"center",children:[E.jsx("span",{className:lr.weekPosition,children:E.jsx(ea,{name:`aktiviteter.${b}.weeks`,className:lr.numberWidth,readOnly:t,validate:[Sn,jR,bl,hl(l,k,i)]})}),t?E.jsx("div",{children:"/"}):E.jsx("div",{className:lr.verticalCharPlacementInTable,children:"/"}),E.jsx(ea,{name:`aktiviteter.${b}.days`,className:lr.numberWidth,readOnly:t,validate:[Sn,Ms,bl,hl(l,k,i)]})]})}),E.jsx(ve.DataCell,{children:E.jsx(_e,{size:"small",children:y.prosentArbeidText})}),E.jsx(ve.DataCell,{children:E.jsx("div",{className:lr.utbetalingsgrad,children:E.jsx(ea,{name:`aktiviteter.${b}.utbetalingsgrad`,validate:[Sn,YR,WR,Ms,XR(i,s,T,a),zR(i,a,k),JR(i,l,b),QR(i,l),p=>k&&k!=="-"&&l("erOppfylt")&&parseFloat(p)>0?i.formatMessage({id:"ValidationMessage.utbetalingMerEnnNullUtsettelse"}):null],readOnly:t,forceTwoDecimalDigits:!0})})})]},v.id)})})]})})};Gg.__docgenInfo={description:"",methods:[],displayName:"UttakAktiviteterTabell",props:{periodeTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'UttakPeriodeType'>[]"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},aktiviteter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`}],raw:"PeriodeSokerAktivitet[]"},description:""},erOppfylt:{required:!1,tsType:{name:"boolean"},description:""},valgtPeriode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`},description:""}}};const rA="_orangeDetailsPeriod_m6wvn_1",tA="_greenDetailsPeriod_m6wvn_6",aA="_redDetailsPeriod_m6wvn_11",sA="_suffix_m6wvn_16",iA="_select_m6wvn_25",oA="_numberFieldLength_m6wvn_29",Jr={orangeDetailsPeriod:rA,greenDetailsPeriod:tA,redDetailsPeriod:aA,suffix:sA,select:iA,numberFieldLength:oA},lA=Lg(100),dA={INGEN:"Ingen årsak",UTTAK_MØDREKVOTE_ANNEN_FORELDER:"Mødrekvote",UTTAK_FEDREKVOTE_ANNEN_FORELDER:"Fedrekvote",UTTAK_FELLESP_ANNEN_FORELDER:"Fellesperiode",UTTAK_FORELDREPENGER_ANNEN_FORELDER:"Foreldrepenger",UDEFINERT:"-"},uA=(e,t)=>e.periodeResultatType===Je.INNVILGET&&!t?Jr.greenDetailsPeriod:e.periodeResultatType===Je.MANUELL_BEHANDLING||t?Jr.orangeDetailsPeriod:Jr.redDetailsPeriod,gA=e=>e.periodeResultatType===Je.INNVILGET,mA=(e,t)=>{let r="";if(e.gradertAktivitet){const{arbeidsgiverReferanse:n,uttakArbeidType:a}=e.gradertAktivitet;if(a&&a!==Aa.ORDINÆRT_ARBEID)return E.jsx(oe,{id:Ui[a]});if(n&&t[n]){const{navn:s,identifikator:i}=t[n];r=s?`${s}`:r,r=i?`${r} (${i})`:r}}return r},kA=(e,t,r)=>{var n;return e.utsettelseType==="-"&&!r?E.jsx(oe,{id:"UttakActivity.Uttak"}):e.utsettelseType!=="-"?E.jsx(oe,{id:"UttakActivity.Utsettelse",values:{utsettelseType:(n=t.UttakUtsettelseType.find(a=>a.kode===e.utsettelseType))==null?void 0:n.navn}}):r?E.jsx(oe,{id:"UttakActivity.IngenKonto"}):""},fA=(e,t)=>{var r,n;return gA(e)?E.jsx(oe,{id:"UttakActivity.InnvilgelseAarsak",values:{innvilgelseAarsak:(r=t.PeriodeResultatÅrsak.find(a=>a.kode===e.periodeResultatÅrsak))==null?void 0:r.navn,b:a=>E.jsx("b",{children:a})}}):E.jsx(oe,{id:"UttakActivity.IkkeOppfyltAarsak",values:{avslagAarsak:(n=t.PeriodeResultatÅrsak.find(a=>a.kode===e.periodeResultatÅrsak))==null?void 0:n.navn,b:a=>E.jsx("b",{children:a})}})},cA=(e,t,r)=>{var a;let n="";return r||(n=((a=t.StønadskontoType.find(s=>{var i;return s.kode===((i=e.aktiviteter[0])==null?void 0:i.stønadskontoType)}))==null?void 0:a.navn)??""),n},yA=[Cn.UTTAK_MØDREKVOTE_ANNEN_FORELDER,Cn.UTTAK_FEDREKVOTE_ANNEN_FORELDER,Cn.UTTAK_FELLESP_ANNEN_FORELDER,Cn.UTTAK_FORELDREPENGER_ANNEN_FORELDER],pA=e=>e.filter(({kode:t})=>yA.some(r=>r===t)).map(({kode:t})=>E.jsx("option",{value:t,children:dA[t]},t)),vA=(e,t,r)=>e.periodeResultatType===Je.INNVILGET&&!!e.gradertAktivitet&&r===!1&&t,Hg=({valgtPeriode:e,isReadOnly:t,graderingInnvilget:r,erSamtidigUttak:n,harSoktOmFlerbarnsdager:a,alleKodeverk:s,arbeidsgiverOpplysningerPerId:i,erTilknyttetStortinget:o,erOppfylt:l,valgtInnvilgelsesÅrsak:d})=>{var f;const u=tr(),g=s.OppholdÅrsak,k=!e.periodeType&&e.aktiviteter[0].stønadskontoType==="-";return E.jsxs(An,{gap:"4",className:uA(e,o),children:[e.oppholdÅrsak==="-"&&E.jsxs(vn,{justify:"space-between",children:[E.jsxs("div",{children:[E.jsx(qn,{size:"small",children:kA(e,s,k)}),E.jsx(_e,{children:cA(e,s,k)})]}),E.jsx("div",{children:t&&fA(e,s)}),E.jsxs("div",{children:[a&&E.jsx(gl,{name:"flerbarnsdager",label:u.formatMessage({id:"UttakActivity.Flerbarnsdager"}),readOnly:t}),E.jsx(gl,{name:"samtidigUttak",label:u.formatMessage({id:"UttakActivity.SamtidigUttak"}),readOnly:t,validate:[v=>l&&v!==!0&&d==="2038"?u.formatMessage({id:"ValidationMessage.SamtidigUttakErObligatorisk"}):null]},"samtidigUttak"),n&&E.jsxs(vn,{gap:"2",children:[E.jsx(ea,{name:"samtidigUttaksprosent",className:Jr.numberFieldLength,readOnly:t,label:u.formatMessage({id:"UttakInfo.SamtidigUttaksprosent"}),validate:[Sn,lA,Ms],forceTwoDecimalDigits:!0}),!t&&E.jsx("div",{className:Jr.suffix,children:"%"})]})]})]}),E.jsxs(vn,{gap:"10",children:[E.jsxs("div",{children:[E.jsx(qn,{size:"small",children:Vs(e.fom,e.tom)}),e.oppholdÅrsak==="-"&&E.jsx(_e,{children:na(e.fom,e.tom).formattedString})]}),E.jsxs("div",{children:[e.gradertAktivitet&&E.jsx(er,{children:E.jsx(oe,{id:"UttakActivity.Gradering"})}),e.oppholdÅrsak!=="-"&&E.jsx("div",{children:na(e.fom,e.tom).formattedString}),mA(e,i)]}),vA(e,t,r)&&E.jsxs("div",{children:[E.jsxs("b",{children:[E.jsx(oe,{id:"UttakActivity.GraderingIkkeOppfylt"}),":"]}),(f=s.GraderingAvslagÅrsak.find(v=>v.kode===e.graderingAvslagÅrsak))==null?void 0:f.navn]})]}),e.oppholdÅrsak!=="-"&&E.jsxs("div",{className:Jr.select,children:[E.jsx(er,{children:E.jsx(oe,{id:"UttakInfo.Opphold.AnnenForelder"})}),E.jsx(Ta,{name:"oppholdArsak",selectValues:pA(g),label:"",hideLabel:!0,readOnly:t,validate:[Sn,Ea]})]}),e.mottattDato&&E.jsx(_e,{children:E.jsx(oe,{id:"UttakInfo.MottattDato",values:{dato:td(e.mottattDato)}})})]})};Hg.__docgenInfo={description:"",methods:[],displayName:"UttakPeriodeInfo",props:{valgtPeriode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},harSoktOmFlerbarnsdager:{required:!0,tsType:{name:"boolean"},description:""},graderingInnvilget:{required:!1,tsType:{name:"boolean"},description:""},erSamtidigUttak:{required:!1,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erTilknyttetStortinget:{required:!0,tsType:{name:"boolean"},description:""},erOppfylt:{required:!1,tsType:{name:"boolean"},description:""},valgtInnvilgelsesÅrsak:{required:!1,tsType:{name:"string"},description:""}}};const bA="_alert_1ojrb_5",hA={alert:bA},TA=qR(3),EA=Vg(1500),RA=(e,t)=>{if(e.periodeResultatType&&e.periodeResultatType===Je.INNVILGET)return!0;if(!e.periodeType&&e.aktiviteter[0].stønadskontoType==="-")return!1;if(e.periodeResultatType&&e.periodeResultatType===Je.MANUELL_BEHANDLING){const n=t.find(a=>a.kode===e.periodeResultatÅrsak);return n&&n.utfallType==="INNVILGET"||e.oppholdÅrsak!==Cn.UDEFINERT?!0:n&&n.utfallType==="AVSLÅTT"?!1:void 0}return!1},AA=(e,t)=>e.sortering<t.sortering?-1:e.sortering>t.sortering?1:e.navn<t.navn?-1:e.navn>t.navn?1:0,wA=(e,t,r,n,a,s)=>{e.sort(AA);const i=e.filter(l=>!r||l.utfallType===r).filter(OA(n,t)).filter(SA(n)),o=l=>E.jsx("option",{value:l.kode,children:l.navn},l.kode);return s&&s!=="-"?i.filter(l=>{var d;return(d=l.uttakTyper)==null?void 0:d.includes("UTSETTELSE")}).map(o):i.filter(l=>{var d;return(d=l.uttakTyper)==null?void 0:d.includes("UTTAK")}).filter(l=>{var d;return a==="-"||((d=l.valgbarForKonto)==null?void 0:d.includes(a))}).map(o)},OA=(e,t)=>r=>r.gyldigForLovendringer===void 0?!0:Pe(t).isAfter(e.kreverSammenhengendeUttakTom)?e.utenMinsterett?r.gyldigForLovendringer.includes("FRITT_UTTAK"):r.gyldigForLovendringer.includes("MINSTERETT_2022"):r.gyldigForLovendringer.includes("KREVER_SAMMENHENGENDE_UTTAK"),SA=e=>t=>t.synligForRolle===void 0?!0:e.søkerErMor?t.synligForRolle.includes("MOR"):t.synligForRolle.includes("IKKE_MOR"),DA=(e,t)=>t.periodeResultatType&&!e.trekkdagerDesimaler&&t.periodeResultatType===Je.MANUELL_BEHANDLING||e.trekkdagerDesimaler&&e.trekkdagerDesimaler<0?"0":e.trekkdagerDesimaler?Math.floor(e.trekkdagerDesimaler/5).toString():"0",IA=(e,t)=>t.periodeResultatType&&!e.trekkdagerDesimaler&&t.periodeResultatType===Je.MANUELL_BEHANDLING||e.trekkdagerDesimaler&&e.trekkdagerDesimaler<0?"0":e.trekkdagerDesimaler?parseFloat((e.trekkdagerDesimaler%5).toFixed(1)).toString():"0",qA=(e,t)=>e.navn<t.navn?-1:e.navn>t.navn?1:0,_A=e=>[...e.GraderingAvslagÅrsak].sort(qA).map(({kode:r,navn:n})=>E.jsx("option",{value:r,children:n},r)),NA=(e,t,r,n)=>{if(e&&e===md.ARBEID&&n&&t&&t.reduce((s,i)=>s+(i.prosentArbeid??0),0)<100)return r.formatMessage({id:"UttakActivity.MerEn100ProsentOgOgyldigUtsettlse"})},PA=(e,t,r)=>e.some((a,s)=>parseFloat(a.utbetalingsgrad)+(t[s].prosentArbeid??0)>100)?r.formatMessage({id:"UttakActivity.MerEn100Prosent"}):void 0,jA=(e,t)=>(r,n)=>{const a=Us(r,e,t),s=Us(n,e,t);return a.arbeidsforhold.localeCompare(s.arbeidsforhold)},FA=(e,t,r)=>{const n=!e.periodeType&&e.aktiviteter[0].stønadskontoType==="-";return{begrunnelse:e.begrunnelse,erOppfylt:RA(e,r),periodeAarsak:e.periodeResultatÅrsak,graderingInnvilget:e.graderingInnvilget,samtidigUttak:e.samtidigUttak,graderingAvslagAarsak:e.graderingAvslagÅrsak??"-",samtidigUttaksprosent:e.samtidigUttaksprosent?e.samtidigUttaksprosent.toString():void 0,flerbarnsdager:e.flerbarnsdager,oppholdArsak:e.oppholdÅrsak,aktiviteter:t.map(a=>({stønadskontoType:a.stønadskontoType,weeks:DA(a,e),days:IA(a,e),utbetalingsgrad:!n&&a.utbetalingsgrad?a.utbetalingsgrad.toString():"0"}))}},xA=(e,t,r)=>({...t,begrunnelse:e.begrunnelse,graderingInnvilget:e.erOppfylt?e.graderingInnvilget:!1,oppholdÅrsak:e.oppholdArsak,periodeResultatType:e.erOppfylt||e.oppholdArsak!==Cn.UDEFINERT?Je.INNVILGET:Je.AVSLATT,graderingAvslagÅrsak:e.graderingAvslagAarsak,periodeResultatÅrsak:e.periodeAarsak,samtidigUttaksprosent:e.samtidigUttaksprosent?parseFloat(e.samtidigUttaksprosent):void 0,samtidigUttak:e.samtidigUttak,flerbarnsdager:e.flerbarnsdager,aktiviteter:r.map((n,a)=>{const s=e.aktiviteter[a];return{...n,stønadskontoType:s.stønadskontoType,utbetalingsgrad:parseFloat(s.utbetalingsgrad),trekkdagerDesimaler:parseFloat(s.weeks)*5+parseFloat(s.days)}})}),$g=({valgtPeriode:e,oppdaterPeriode:t,lukkPeriodeVisning:r,isReadOnly:n,erHovedsøkersPeriode:a,alleKodeverk:s,årsakFilter:i,arbeidsgiverOpplysningerPerId:o,harSoktOmFlerbarnsdager:l,erTilknyttetStortinget:d})=>{const u=tr(),g=s.PeriodeResultatÅrsak,k=m.useMemo(()=>{const x=jA(o,u);return[...e.aktiviteter].sort(x)},[e.aktiviteter]),f=m.useMemo(()=>FA(e,k,g),[e,k,o]),v=xg({defaultValues:f});m.useEffect(()=>{v.reset(f)},[f]);const b=v.watch("erOppfylt"),y=v.watch("graderingInnvilget"),T=v.watch("samtidigUttak"),p=v.watch("periodeAarsak"),h=v.watch("aktiviteter"),A=h.length===1?h[0].stønadskontoType:Q.UDEFINERT,D=wA(g,e.fom,b?"INNVILGET":"AVSLÅTT",i,A,e.utsettelseType),O=_A(s),S=NA(e.utsettelseType,e.aktiviteter,u,b),I=PA(h,k,u),_=S??I;return E.jsx(Mg,{formMethods:v,onSubmit:x=>t([xA(x,e,k)]),children:E.jsxs(An,{gap:"4",children:[E.jsx(Hg,{valgtPeriode:e,alleKodeverk:s,isReadOnly:n,arbeidsgiverOpplysningerPerId:o,harSoktOmFlerbarnsdager:l,graderingInnvilget:y,erSamtidigUttak:T,erTilknyttetStortinget:d,erOppfylt:b,valgtInnvilgelsesÅrsak:p}),e.oppholdÅrsak===Cn.UDEFINERT&&E.jsx(Gg,{isReadOnly:n,periodeTyper:s.UttakPeriodeType,arbeidsgiverOpplysningerPerId:o,aktiviteter:k,erOppfylt:b,valgtPeriode:e}),a&&E.jsx(NE,{name:"begrunnelse",label:u.formatMessage({id:"UttakActivity.Vurdering"}),validate:[Sn,TA,EA,xR],maxLength:1500,readOnly:n}),a&&!n&&E.jsxs(E.Fragment,{children:[E.jsx(fl,{name:"erOppfylt",hideLegend:!0,validate:[Sn],isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:u.formatMessage({id:"UttakActivity.Oppfylt"}),value:"true"},{label:u.formatMessage({id:"UttakActivity.IkkeOppfylt"}),value:"false"}]}),b!==void 0&&E.jsx(_0,{alignOffset:b?0:92,children:E.jsxs(An,{gap:"4",children:[E.jsx(Ta,{name:"periodeAarsak",label:u.formatMessage({id:b?"UttakActivity.InnvilgelseAarsaker":"UttakActivity.AvslagAarsak"}),selectValues:D,validate:[Sn,Ea]}),e.gradertAktivitet&&b&&E.jsxs(E.Fragment,{children:[E.jsx(fl,{name:"graderingInnvilget",label:u.formatMessage({id:"UttakActivity.Gradering"}),validate:[Sn],isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:u.formatMessage({id:"UttakActivity.Oppfylt"}),value:"true"},{label:u.formatMessage({id:"UttakActivity.IkkeOppfylt"}),value:"false"}]}),y===!1&&E.jsx(Ta,{name:"graderingAvslagAarsak",label:u.formatMessage({id:"UttakActivity.GraderingAvslagAarsaker"}),validate:[Sn,Ea],selectValues:O})]})]})}),_&&E.jsx(ii,{size:"small",variant:"info",className:hA.alert,children:_}),E.jsxs(vn,{gap:"2",children:[E.jsx(Xe,{size:"small",variant:"primary",disabled:!v.formState.isDirty,children:E.jsx(oe,{id:"UttakActivity.Oppdater"})}),E.jsx(Xe,{size:"small",variant:"secondary",onClick:r,type:"button",children:E.jsx(oe,{id:"UttakActivity.Avbryt"})})]})]})]})})};$g.__docgenInfo={description:"",methods:[],displayName:"UttakPeriodeForm",props:{valgtPeriode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},erHovedsøkersPeriode:{required:!0,tsType:{name:"boolean"},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(perioder: PeriodeSoker[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]"},name:"perioder"}],return:{name:"void"}}},description:""},lukkPeriodeVisning:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},årsakFilter:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kreverSammenhengendeUttakTom: string;
  utenMinsterett: boolean;
  søkerErMor: boolean;
}`,signature:{properties:[{key:"kreverSammenhengendeUttakTom",value:{name:"string",required:!0}},{key:"utenMinsterett",value:{name:"boolean",required:!0}},{key:"søkerErMor",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  kreverSammenhengendeUttakTom: string;
  utenMinsterett: boolean;
  søkerErMor: boolean;
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},harSoktOmFlerbarnsdager:{required:!0,tsType:{name:"boolean"},description:""},erTilknyttetStortinget:{required:!0,tsType:{name:"boolean"},description:""}}};const MA=(e,t,r,n)=>{const a=[];let s=!1;const i=n!=null&&n.stonadskontoer?n==null?void 0:n.stonadskontoer[r]:void 0;return i!=null&&i.aktivitetSaldoDtoList&&i.aktivitetSaldoDtoList.forEach(o=>{var l;if(o.saldo===0)if(o.aktivitetIdentifikator.arbeidsgiverReferanse){const d=t[o.aktivitetIdentifikator.arbeidsgiverReferanse];a.push(d.navn)}else{const d=(l=e.UttakArbeidType.find(u=>u.kode===o.aktivitetIdentifikator.uttakArbeidType))==null?void 0:l.navn;d&&a.push(d)}else s=!0}),s?a:[]},UA=(e,t,r,n,a)=>{var i,o;const s=[];if(e===be.STØNADSKONTO_TOM_FOR_STØNADSDAGER){const l=MA(t,r,a,n),d=l.join();l.length>1?s.push(E.jsx(oe,{id:"UttakPanel.manuellBehandlingÅrsakArbeidsforhold",values:{arbeidsforhold:d}},"manuellÅrsak")):l.length===1?s.push(E.jsx(oe,{id:"UttakPanel.manuellBehandlingÅrsakEnskiltArbeidsforhold",values:{arbeidsforhold:l}},"manuellÅrsak")):s.push(E.jsx(c.Fragment,{children:(i=t.ManuellBehandlingÅrsak.find(u=>u.kode===e))==null?void 0:i.navn},`kode-${e}`))}else s.push(E.jsx(c.Fragment,{children:(o=t.ManuellBehandlingÅrsak.find(l=>l.kode===e))==null?void 0:o.navn},`kode-${e}`));return s},BA=(e,t,r,n)=>{let a=e.gradering&&e.prosentArbeid?(100-e.prosentArbeid)/100:1;a=r&&n?n/100:a;const s=a*t;return parseFloat(s.toFixed(1))},Tl=(e,t,r)=>{const{aktiviteter:n,samtidigUttak:a,samtidigUttaksprosent:s}=e,i=id(t,r),o=n.map(l=>l.trekkdagerDesimaler&&l.trekkdagerDesimaler>0?{...l,trekkdagerDesimaler:BA(l,i,a,s)}:l);return{...e,fom:t,tom:r,begrunnelse:e.begrunnelse||" ",aktiviteter:o}},Yg=({perioderSøker:e,behandling:t,uttaksresultat:r,valgtPeriodeIndex:n,oppdaterPeriode:a,isReadOnly:s,alleKodeverk:i,arbeidsgiverOpplysningerPerId:o,uttakStonadskontoer:l,setValgtPeriodeIndex:d,erTilknyttetStortinget:u,harÅpneAksjonspunkter:g,endringsdato:k})=>{const f=tr(),[v,b]=m.useState(!1),y=()=>b(F=>!F),{perioderAnnenpart:T}=r,p=T.concat(e),h=p[n],A=n+1>T.length,D=F=>{const q=Tl(h,h.fom,F),w=Tl(h,Pe(F).add(1,"days").format("YYYY-MM-DD"),h.tom);a([q,w]),y()},O=()=>d(void 0),S=A?e.some(F=>F.flerbarnsdager):T.some(F=>F.flerbarnsdager),I=t.type===sd.REVURDERING&&h.tom<k,_=()=>{d(F=>F===0||F===void 0?F:F-1)},x=()=>{d(F=>F===p.length-1||F===void 0?F:F+1)};return E.jsx(tg,{borderWidth:"1",padding:"4",children:E.jsxs(An,{gap:"4",children:[E.jsxs(vn,{align:"center",justify:"space-between",children:[E.jsxs(qn,{size:"small",children:[E.jsx(oe,{id:"UttakTimeLineData.PeriodeData.Detaljer"}),!!h.begrunnelse&&!g&&E.jsx(Ni,{})]}),!s&&A&&!I&&E.jsxs(E.Fragment,{children:[E.jsx(Xe,{size:"xsmall",icon:E.jsx(uk,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:f.formatMessage({id:"UttakTimeLineData.PeriodeData.DelOppPerioden"}),children:E.jsx(oe,{id:"UttakTimeLineData.PeriodeData.DelOppPerioden"})}),v&&E.jsx(Cg,{cancel:y,fomDato:h.fom,tomDato:h.tom,submit:D})]}),E.jsxs(vn,{gap:"2",children:[E.jsx(Xe,{size:"xsmall",icon:E.jsx(Gs,{"aria-hidden":!0}),onClick:_,variant:"secondary-neutral",type:"button",title:f.formatMessage({id:"UttakPeriodePanel.prevPeriod"}),children:E.jsx(oe,{id:"UttakPeriodePanel.prevPeriodShort"})}),E.jsx(Xe,{size:"xsmall",icon:E.jsx(Hs,{"aria-hidden":!0}),onClick:x,variant:"secondary-neutral",type:"button",title:f.formatMessage({id:"UttakPeriodePanel.nextPeriod"}),iconPosition:"right",children:E.jsx(oe,{id:"UttakPeriodePanel.nextPeriodShort"})}),E.jsx(Xe,{size:"xsmall",icon:E.jsx($s,{"aria-hidden":!0}),onClick:O,variant:"tertiary-neutral",type:"button",title:f.formatMessage({id:"UttakPeriodePanel.LukkPeriode"})})]})]}),h.manuellBehandlingÅrsak&&h.manuellBehandlingÅrsak!=="-"&&E.jsx(hg,{children:UA(h.manuellBehandlingÅrsak,i,o,l,h.periodeType)}),E.jsx($g,{valgtPeriode:h,oppdaterPeriode:a,isReadOnly:s||!A||I,erHovedsøkersPeriode:A,lukkPeriodeVisning:O,alleKodeverk:i,årsakFilter:r.årsakFilter,arbeidsgiverOpplysningerPerId:o,harSoktOmFlerbarnsdager:S,erTilknyttetStortinget:u})]})})};Yg.__docgenInfo={description:"",methods:[],displayName:"UttakPeriodePanel",props:{perioderSøker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
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
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},uttaksresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  årsakFilter: AarsakFilter;
  endringsdato: string;
}`,signature:{properties:[{key:"perioderSøker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]",required:!0}},{key:"perioderAnnenpart",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]",required:!0}},{key:"årsakFilter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kreverSammenhengendeUttakTom: string;
  utenMinsterett: boolean;
  søkerErMor: boolean;
}`,signature:{properties:[{key:"kreverSammenhengendeUttakTom",value:{name:"string",required:!0}},{key:"utenMinsterett",value:{name:"boolean",required:!0}},{key:"søkerErMor",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  kreverSammenhengendeUttakTom: string;
  utenMinsterett: boolean;
  søkerErMor: boolean;
}>`,required:!0}},{key:"endringsdato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  årsakFilter: AarsakFilter;
  endringsdato: string;
}>`},description:""},valgtPeriodeIndex:{required:!0,tsType:{name:"number"},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(perioder: PeriodeSoker[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]"},name:"perioder"}],return:{name:"void"}}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},uttakStonadskontoer:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
}`,signature:{properties:[{key:"stonadskontoer",value:{name:"Record",elements:[{name:"StonadskontoType"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}`,signature:{properties:[{key:"stonadskontotype",value:{name:"string",required:!0}},{key:"maxDager",value:{name:"number",required:!0}},{key:"saldo",value:{name:"number",required:!0}},{key:"aktivitetSaldoDtoList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}`,signature:{properties:[{key:"aktivitetIdentifikator",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}`,signature:{properties:[{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}>`,required:!0}},{key:"saldo",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}>`}],raw:"AktivitetSaldo[]",required:!0}},{key:"gyldigForbruk",value:{name:"boolean",required:!0}},{key:"kontoUtvidelser",value:{name:"signature",type:"object",raw:`{
  prematurdager: number;
  flerbarnsdager: number;
}`,signature:{properties:[{key:"prematurdager",value:{name:"number",required:!0}},{key:"flerbarnsdager",value:{name:"number",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}>`}],raw:"Record<StonadskontoType, Stonadskonto>",required:!0}},{key:"tapteDagerFpff",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
}>`},description:""},setValgtPeriodeIndex:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number | undefined>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number | undefined>",elements:[{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}]}]},description:""},erTilknyttetStortinget:{required:!0,tsType:{name:"boolean"},description:""},harÅpneAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},endringsdato:{required:!0,tsType:{name:"string"},description:""}}};var fs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var El;function VA(){return El||(El=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,n.call(this,o)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(fs)),fs.exports}var LA=VA();const KA=nd(LA),CA="_tabs_1ay00_1",GA="_tab_1ay00_1",HA="_aktiv_1ay00_8",$A="_error_1ay00_17",YA="_tabInner_1ay00_20",Wg={tabs:CA,tab:GA,aktiv:HA,error:$A,tabInner:YA},Rl=KA.bind(Wg),WA=e=>{switch(e){case Q.FEDREKVOTE:return"TimeLineTab.Stonadinfo.Fedrekvote";case Q.MØDREKVOTE:return"TimeLineTab.Stonadinfo.Modrekvote";case Q.FELLESPERIODE:return"TimeLineTab.Stonadinfo.Fellesperiode";case Q.FORELDREPENGER_FØR_FØDSEL:return"TimeLineTab.Stonadinfo.ForeldrepengerFF";case Q.FLERBARNSDAGER:return"TimeLineTab.Stonadinfo.Flerbarnsdager";case Q.FORELDREPENGER:return"TimeLineTab.Stonadinfo.ForeldrePenger";case Q.UTEN_AKTIVITETSKRAV:return"TimeLineTab.Stonadinfo.UtenAktivitetskrav";case Q.MINSTERETT:return"TimeLineTab.Stonadinfo.Minsterett";case Q.MINSTERETT_NESTE_STØNADSPERIODE:return"TimeLineTab.Stonadinfo.MinsterettNesteStønadsperiode";default:return"TimeLineTab.Stonadinfo.Empty"}},zg=e=>{const t=e<0?-1:1,r=e*t;return{uker:Math.floor(r/5)*t,dager:r%5*t}},Xg=({stønadskonto:e,visDagerForKonto:t,aktiv:r=!1})=>{const n=zg(e.saldo),a=WA(e.stonadskontotype),s=()=>t(e.stonadskontotype),i=Math.floor(e.maxDager/5);return E.jsx("div",{className:Wg.tabs,children:E.jsx("li",{role:"presentation",className:Rl("tab",{aktiv:r,error:e&&!e.gyldigForbruk}),children:E.jsx("button",{role:"tab",className:Rl("tabInner",{error:e&&!e.gyldigForbruk}),type:"button",onClick:s,"aria-selected":r,children:E.jsxs(An,{gap:"1",children:[E.jsx(er,{children:E.jsx(oe,{id:a,values:{uker:i,dager:e.maxDager-i*5}})}),E.jsx(_e,{size:"small",children:E.jsx(oe,{id:"TimeLineTab.Stonadinfo.UkerDager",values:{ukerVerdi:n.uker,dagerVerdi:n.dager,b:ys}})})]})})})})};Xg.__docgenInfo={description:"",methods:[],displayName:"StonadsdagerTab",props:{stønadskonto:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}`,signature:{properties:[{key:"stonadskontotype",value:{name:"string",required:!0}},{key:"maxDager",value:{name:"number",required:!0}},{key:"saldo",value:{name:"number",required:!0}},{key:"aktivitetSaldoDtoList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}`,signature:{properties:[{key:"aktivitetIdentifikator",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}`,signature:{properties:[{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}>`,required:!0}},{key:"saldo",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}>`}],raw:"AktivitetSaldo[]",required:!0}},{key:"gyldigForbruk",value:{name:"boolean",required:!0}},{key:"kontoUtvidelser",value:{name:"signature",type:"object",raw:`{
  prematurdager: number;
  flerbarnsdager: number;
}`,signature:{properties:[{key:"prematurdager",value:{name:"number",required:!0}},{key:"flerbarnsdager",value:{name:"number",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}>`},description:""},visDagerForKonto:{required:!0,tsType:{name:"signature",type:"function",raw:"(stønadskontotype: string) => void",signature:{arguments:[{type:{name:"string"},name:"stønadskontotype"}],return:{name:"void"}}},description:""},aktiv:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const zA="_disponibeltUttak_1nqn2_1",XA="_tabs_1nqn2_9",QA="_visKonto_1nqn2_19",cs={disponibeltUttak:zA,tabs:XA,visKonto:QA},Al={[Q.FORELDREPENGER_FØR_FØDSEL]:0,[Q.FELLESPERIODE]:1,[Q.MØDREKVOTE]:2,[Q.FEDREKVOTE]:3,[Q.FORELDREPENGER]:4,[Q.UTEN_AKTIVITETSKRAV]:5,[Q.MINSTERETT]:6,[Q.MINSTERETT_NESTE_STØNADSPERIODE]:7,[Q.FLERBARNSDAGER]:8},JA=(e,t)=>Al[e.stonadskontotype]-Al[t.stonadskontotype],ZA=(e,t)=>{const{uttakArbeidType:r,arbeidsgiverReferanse:n,arbeidsforholdId:a}=e.aktivitetIdentifikator,s=n?t[n]:void 0;let i=r;return i=s?`${i} ${s.navn}`:i,i=a?`${i} ${a}`:i,i=s?`${i} ${s.identifikator}`:i,`${i} ${e.saldo}`},ew=e=>{if(!e)return{uker:0,dager:0};const t=e.reduce((n,a)=>{const s=a.stonadskontotype;return s!==Q.FLERBARNSDAGER&&s!==Q.UTEN_AKTIVITETSKRAV&&s!==Q.MINSTERETT&&s!==Q.MINSTERETT_NESTE_STØNADSPERIODE?n+(a.maxDager??0):n},0),r=Math.floor(t/5);return{uker:r,dager:t-r*5}},nw=(e,t,r)=>{const{arbeidsgiverReferanse:n,uttakArbeidType:a}=e;if(a&&a!==Aa.ORDINÆRT_ARBEID)return r.formatMessage({id:Ui[a]});if(n){const s=t[n];return s?ad(s):n}return r.formatMessage({id:"RenderUttakTable.ArbeidType.ANNET"})},Qg=({stønadskontoer:e,arbeidsgiverOpplysningerPerId:t})=>{const r=tr(),[n,a]=m.useState(),s=d=>{a(u=>u===d?void 0:d)},i=e?Object.values(e).sort(JA):[],o=ew(e),l=m.useMemo(()=>{if(!n)return;const d=i.find(g=>g.stonadskontotype===n);return((d==null?void 0:d.aktivitetSaldoDtoList)??[]).map(g=>({...g,navn:nw(g.aktivitetIdentifikator,t,r)})).sort((g,k)=>g.navn.localeCompare(k.navn))},[n,i]);return E.jsxs("div",{className:cs.disponibeltUttak,children:[E.jsxs(vn,{gap:"4",children:[E.jsx(qn,{size:"small",children:E.jsx(oe,{id:"TimeLineInfo.Stonadinfo.DisponibleStonadsdager"})}),E.jsx(_e,{size:"small",children:E.jsx(oe,{id:"TimeLineInfo.Stonadinfo.Total",values:{uker:o.uker,dager:o.dager,b:ys}})})]}),E.jsx("div",{className:cs.tabs,children:E.jsx("ul",{children:i.map(d=>E.jsx(Xg,{aktiv:d.stonadskontotype===n,stønadskonto:d,visDagerForKonto:s},d.stonadskontotype))})}),n&&l&&l.length>0&&E.jsx("div",{className:cs.visKonto,children:E.jsxs(ve,{children:[E.jsx(ve.Header,{children:E.jsxs(ve.Row,{children:[E.jsx(ve.HeaderCell,{scope:"col",children:E.jsx(oe,{id:"TimeLineInfo.Aktivitet"})}),E.jsx(ve.HeaderCell,{scope:"col",children:E.jsx(oe,{id:"TimeLineInfo.Disponibelt"})})]})}),E.jsx(ve.Body,{children:l.map(d=>{const u=zg(d.saldo);return E.jsxs(ve.Row,{children:[E.jsx(ve.DataCell,{textSize:"small",children:d.navn}),E.jsx(ve.DataCell,{textSize:"small",children:d.saldo&&E.jsx(oe,{id:"TimeLineInfo.Stonadinfo.UkerDager",values:{ukerVerdi:u.uker,dagerVerdi:u.dager,b:ys}})})]},ZA(d,t))})})]})})]})};Qg.__docgenInfo={description:"",methods:[],displayName:"DisponibleStonadskontoerPanel",props:{stønadskontoer:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}`,signature:{properties:[{key:"stonadskontotype",value:{name:"string",required:!0}},{key:"maxDager",value:{name:"number",required:!0}},{key:"saldo",value:{name:"number",required:!0}},{key:"aktivitetSaldoDtoList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}`,signature:{properties:[{key:"aktivitetIdentifikator",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}`,signature:{properties:[{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}>`,required:!0}},{key:"saldo",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}>`}],raw:"AktivitetSaldo[]",required:!0}},{key:"gyldigForbruk",value:{name:"boolean",required:!0}},{key:"kontoUtvidelser",value:{name:"signature",type:"object",raw:`{
  prematurdager: number;
  flerbarnsdager: number;
}`,signature:{properties:[{key:"prematurdager",value:{name:"number",required:!0}},{key:"flerbarnsdager",value:{name:"number",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}>`}],raw:"Stonadskonto[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const rw={[en.MODREKVOTE]:E.jsx(xt,{}),[en.FEDREKVOTE]:E.jsx(xt,{}),[en.FELLESPERIODE]:E.jsx(xt,{}),[en.FORELDREPENGER]:E.jsx(xt,{}),[en.FORELDREPENGER_FOR_FODSEL]:E.jsx(ik,{})},tw={[en.MODREKVOTE]:"UttakTidslinje.Modrekvote",[en.FEDREKVOTE]:"UttakTidslinje.Fedrekvote",[en.FELLESPERIODE]:"UttakTidslinje.Fellesperiode",[en.FORELDREPENGER]:"UttakTidslinje.Foreldrepenger",[en.FORELDREPENGER_FOR_FODSEL]:"UttakTidslinje.ForeldrepengerForFodsel"},aw=(e,t)=>e.periode.fom<t.periode.fom?-1:e.periode.fom>t.periode.fom?1:0,sw=(e,t)=>e.periodeResultatType===Je.MANUELL_BEHANDLING||t?"warning":e.gradertAktivitet&&e.graderingInnvilget&&e.periodeResultatType===Je.INNVILGET?"success":"erOppfylt"in e&&e.erOppfylt===!1?"danger":"erOppfylt"in e&&e.erOppfylt===!0||e.periodeResultatType===Je.INNVILGET&&!t?"success":"danger",iw=e=>{var r,n;return!(e.aktiviteter.length===0||!e.periodeType&&e.aktiviteter[0].stønadskontoType==="-")&&((r=e.aktiviteter[0])!=null&&r.stønadskontoType)?(n=e.aktiviteter[0])==null?void 0:n.stønadskontoType:""},ow=(e,t=[])=>t.map(r=>({...r,start:r.periode.fom,end:r.periode.tom,status:sw(r.periode,e),periodeType:iw(r.periode),erGradert:!!r.periode.gradertAktivitet&&!!r.periode.graderingInnvilget,erOpphold:r.periode.oppholdÅrsak!==Cn.UDEFINERT,harUtsettelse:r.periode.utsettelseType!=="-",begrunnelse:r.periode.begrunnelse})),lw=(e=[])=>e.every(t=>!t.hovedsoker)?[1,2]:e.reduce((t,r)=>(t.some(a=>a.group===r.group)||t.push(r),t),[]).map(t=>t.group),dw=(e,t)=>{const r=t?e.relasjonsRolleType:e.annenpartBehandling.relasjonsRolleType;return r===Ka.MOR||r===Ka.MEDMOR?E.jsx(Lm,{width:20,height:20,color:"var(--a-red-200)"}):r===Ka.FAR?E.jsx(mk,{width:20,height:20,color:"var(--a-blue-600)"}):E.jsx(Bm,{width:20,height:20})},Kt=(e,t)=>Pe(e).isBefore(t)?t.subtract(1,"days").format(dr):e,uw=e=>e.reduce((t,r)=>{const n=t.findIndex(a=>a.datoITidslinjen===r.datoITidslinjen);return n!==-1?t.filter((a,s)=>s!==n).concat({dato:r.dato,datoITidslinjen:r.datoITidslinjen,tekstIder:r.tekstIder.concat(t[n].tekstIder)}):t.concat(r)},[]),gw=(e,t)=>{const r=new Array;return e.dodSoker&&r.push({dato:e.dodSoker,datoITidslinjen:Kt(e.dodSoker,t),tekstIder:["UttakTidslinje.DodSoker"]}),e.fodsel&&r.push({dato:e.fodsel,datoITidslinjen:Kt(e.fodsel,t),tekstIder:["UttakTidslinje.Fodsel"]}),e.revurdering&&r.push({dato:e.revurdering,datoITidslinjen:Kt(e.revurdering,t),tekstIder:["UttakTidslinje.Revurdering"]}),e.soknad&&r.push({dato:e.soknad,datoITidslinjen:Kt(e.soknad,t),tekstIder:["UttakTidslinje.Soknad"]}),uw(r)},mw=(e,t,r)=>{const n=Vs(e.start,e.end),a=na(e.start,e.end).formattedString;let s="";e.periodeType!=="-"&&e.periodeType!==""&&(s=r.formatMessage({id:tw[e.periodeType]}));let i="";e.erGradert?i=r.formatMessage({id:"UttakTidslinje.GradertPeriode"}):e.harUtsettelse?i=r.formatMessage({id:"UttakTidslinje.UtsettelsePeriode"}):e.erOpphold&&(i=r.formatMessage({id:"UttakTidslinje.OppholdPeriode"}));const o=e.begrunnelse&&t===od.FATTER_VEDTAK?r.formatMessage({id:"UttakTidslinje.ManueltEditert"}):"";return E.jsxs(E.Fragment,{children:[E.jsx(_e,{children:E.jsx(oe,{id:"UttakTidslinje.Stonadskonto",values:{periodeType:s||"-"}})}),E.jsx(_e,{children:E.jsx(oe,{id:"UttakTidslinje.Periode",values:{periodeString:n}})}),E.jsxs(An,{gap:"2",children:[E.jsx(_e,{children:E.jsx(oe,{id:"UttakTidslinje.Dager",values:{dager:a}})}),i]}),o]})},kw=(e,t)=>e.erGradert?E.jsx(ek,{}):e.begrunnelse&&t===od.FATTER_VEDTAK?E.jsx(rk,{}):e.harUtsettelse?E.jsx(Jm,{}):e.erOpphold?E.jsx(Fm,{}):rw[e.periodeType],fw=(e,t,r)=>{var s;const n=t.RelasjonsRolleType,a=r?e.relasjonsRolleType:e.annenpartBehandling.relasjonsRolleType;return((s=n.find(i=>i.kode===a))==null?void 0:s.navn)??"-"},Jg=({tidslinjeTider:e,selectedPeriod:t,uttakPerioder:r,tilknyttetStortinget:n,setValgtPeriodeIndex:a,behandlingStatusKode:s,fagsak:i,alleKodeverk:o})=>{const l=tr(),d=lw(r),u=ow(n,r),g=[...r].sort(aw),k=t?{fom:t.periode.fom,tom:t.periode.tom,id:t.id}:void 0,f=Pe(g[0].periode.fom),v=Pe(g[g.length-1].periode.tom),b=gw(e,f),[y,T]=m.useState(f),[p,h]=m.useState(v),A=()=>{y.subtract(1,"month").isBefore(f)||(T(y.subtract(1,"month")),h(p.subtract(1,"month")))},D=()=>{p.add(1,"month").isAfter(v)||(T(y.add(1,"month")),h(p.add(1,"month")))},O=()=>{y.add(3,"month").isAfter(p)||(T(y.add(1,"month")),h(p.subtract(1,"month")))},S=()=>{p.add(1,"month").diff(y.subtract(1,"month"),"months")<36&&(T(y.subtract(1,"month")),h(p.add(1,"month")))};return E.jsxs(An,{gap:"6",children:[E.jsxs(fr,{startDate:Pe(y).toDate(),endDate:Pe(p).add(1,"days").toDate(),children:[b.map(I=>E.jsxs(fr.Pin,{date:Pe(I.datoITidslinjen).toDate(),children:[E.jsx(An,{gap:"1",children:I.tekstIder.map(_=>E.jsx(qn,{size:"small",children:E.jsx(oe,{id:_})},_))}),E.jsx(_e,{size:"small",children:E.jsx(K0,{dateString:I.dato})})]},I.dato)),d.map((I,_)=>{const x=d.length===1||_>0;return E.jsx(fr.Row,{label:fw(i,o,x),icon:dw(i,x),children:u.filter(F=>F.group===I).map(F=>E.jsx(fr.Period,{start:Pe(F.start).toDate(),end:Pe(F.end).toDate(),status:F.status,onSelectPeriod:()=>a(F.id),isActive:F.id===(k==null?void 0:k.id),icon:kw(F,s),placement:_===0?"top":"bottom",children:mw(F,s,l)},F.id))},I)})]}),E.jsxs(vn,{gap:"2",justify:"end",children:[E.jsx(Xe,{size:"small",icon:E.jsx(lk,{"aria-hidden":!0}),onClick:O,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"UttakTidslinje.ZoomInn"})}),E.jsx(Xe,{size:"small",icon:E.jsx(zm,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"UttakTidslinje.ZoomUt"})}),E.jsx(Xe,{size:"small",icon:E.jsx(Gs,{"aria-hidden":!0}),onClick:A,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"UttakTidslinje.ScrollTilVenstre"})}),E.jsx(Xe,{size:"small",icon:E.jsx(Hs,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"UttakTidslinje.ScrollTilHogre"})})]})]})};Jg.__docgenInfo={description:`UttakTidslinje

Formaterer tidslinjen for uttak`,methods:[],displayName:"UttakTidslinje",props:{tidslinjeTider:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  soknad: string;
  fodsel?: string;
  revurdering?: string;
  dodSoker?: string;
}`,signature:{properties:[{key:"soknad",value:{name:"string",required:!0}},{key:"fodsel",value:{name:"string",required:!1}},{key:"revurdering",value:{name:"string",required:!1}},{key:"dodSoker",value:{name:"string",required:!1}}]}},description:""},selectedPeriod:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  id: number;
  periode: PeriodeSoker;
  hovedsoker: boolean;
  group: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`,required:!0}},{key:"hovedsoker",value:{name:"boolean",required:!0}},{key:"group",value:{name:"number",required:!0}}]}},description:""},uttakPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  periode: PeriodeSoker;
  hovedsoker: boolean;
  group: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`,required:!0}},{key:"hovedsoker",value:{name:"boolean",required:!0}},{key:"group",value:{name:"number",required:!0}}]}}],raw:"PeriodeSøkerMedTidslinjedata[]"},description:""},tilknyttetStortinget:{required:!0,tsType:{name:"boolean"},description:""},setValgtPeriodeIndex:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number | undefined>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number | undefined>",elements:[{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}]}]},description:""},behandlingStatusKode:{required:!0,tsType:{name:"string"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
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
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const cw={INGEN:Q.UDEFINERT,UTTAK_MØDREKVOTE_ANNEN_FORELDER:Q.MØDREKVOTE,UTTAK_FEDREKVOTE_ANNEN_FORELDER:Q.FEDREKVOTE,UTTAK_FELLESP_ANNEN_FORELDER:Q.FELLESPERIODE,UTTAK_FORELDREPENGER_ANNEN_FORELDER:Q.FORELDREPENGER},yw=e=>{var n;const{mottattDato:t}=e,r=((n=e.søknadsfrist)==null?void 0:n.mottattDato)??e.mottattDato;return Pe(t)<Pe(r)?t:r},pw=(e,t)=>{if(t!=null&&t.avklartBarn&&t.avklartBarn.length>0)return t.avklartBarn[0].fodselsdato;const{fodselsdatoer:r,termindato:n,adopsjonFodelsedatoer:a}=e;if(r&&Object.keys(r).length>0)return Object.values(r)[0];if(n)return n;if(a&&Object.keys(a).length>0)return Object.values(a)[0]},vw=(e,t,r,n,a)=>{var f,v;const s=r==null?void 0:r.gjeldende,i=pw(t,s),o=s!=null&&s.avklartBarn&&s.avklartBarn.length>0?s.avklartBarn[0].fodselsdato:void 0,l=t.soknadType===gd.FODSEL?o??i:t.omsorgsovertakelseDato,d=e.type===sd.REVURDERING,u=((f=r.register)==null?void 0:f.avklartBarn)??[],g=s&&!s.brukAntallBarnFraTps&&s.avklartBarn&&s.avklartBarn.length>0?s.avklartBarn.filter(b=>b.dodsdato):u.filter(b=>b.dodsdato),k={soknad:yw(t),fodsel:l,revurdering:d?a:void 0,dodSoker:((v=n==null?void 0:n.bruker)==null?void 0:v.dødsdato)??void 0};return g.forEach((b,y)=>{Object.defineProperty(k,`barndod${y}`,{value:Pe(b.dodsdato,dr).toDate(),enumerable:!0})}),k},wl=(e,t,r)=>(e?t:r).map((a,s)=>({periode:a,id:s,tomMoment:Pe(a.tom).add(1,"days"),hovedsoker:e,group:r.length>0&&e?2:1})),bw=e=>e.map(t=>{const{...r}=t;if(t.oppholdÅrsak!==Cn.UDEFINERT){const a={stønadskontoType:cw[t.oppholdÅrsak],trekkdagerDesimaler:id(t.fom,t.tom)};r.aktiviteter=[a]}return r}),Zg=({behandling:e,søknad:t,personoversikt:r,perioderSøker:n,perioderAnnenpart:a,valgtPeriodeIndex:s,familiehendelse:i,endringsdato:o,tilknyttetStortinget:l,setValgtPeriodeIndex:d,fagsak:u,alleKodeverk:g})=>{const k=bw(n),f=wl(!0,k,a),v=wl(!1,k,a),b=v.concat(f.map(T=>({...T,id:T.id+v.length}))),y=vw(e,t,i,r,o);return E.jsx(Jg,{tidslinjeTider:y,selectedPeriod:s!==void 0?b[s]:void 0,uttakPerioder:b,tilknyttetStortinget:l,setValgtPeriodeIndex:d,behandlingStatusKode:e.status,fagsak:u,alleKodeverk:g})};Zg.__docgenInfo={description:"",methods:[],displayName:"UttakTidslinjeIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
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
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},søknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},perioderSøker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]"},description:""},perioderAnnenpart:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]"},description:""},valgtPeriodeIndex:{required:!0,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},endringsdato:{required:!0,tsType:{name:"string"},description:""},tilknyttetStortinget:{required:!0,tsType:{name:"boolean"},description:""},setValgtPeriodeIndex:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number | undefined>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number | undefined>",elements:[{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}]}]},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
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
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const hw={5067:"UttakPanel.Aksjonspunkt.5067",5069:"UttakPanel.Aksjonspunkt.5069",5072:"UttakPanel.Aksjonspunkt.5072",5073:"UttakPanel.Aksjonspunkt.5073",5074:"UttakPanel.Aksjonspunkt.5074",5075:"UttakPanel.Aksjonspunkt.5075",5076:"UttakPanel.Aksjonspunkt.5076",5077:"UttakPanel.Aksjonspunkt.5077",5078:"UttakPanel.Aksjonspunkt.5078",5079:"UttakPanel.Aksjonspunkt.5079",5098:"UttakPanel.Aksjonspunkt.5098"},Ol={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},Tw=(e,t)=>{const r=t.filter(a=>a.definisjon!==Ve.FASTSETT_UTTAKPERIODER&&a.definisjon!==Ve.OVERSTYRING_AV_UTTAKPERIODER),n=[];return r.forEach(a=>{const s=hw[a.definisjon];s&&n.push(E.jsx(oe,{id:s},s))}),e.perioderSøker.some(a=>a.periodeResultatType===Je.MANUELL_BEHANDLING)&&n.push(E.jsx(oe,{id:"UttakPanel.Aksjonspunkt.Generell"},"generellTekst")),t.length===1&&t[0].definisjon===Ve.OVERSTYRING_AV_UTTAKPERIODER&&(t[0].status!=="UTFO"?n.push(E.jsx(oe,{id:"UttakPanel.Overstyrt.KontrollerPaNytt"},"aksjonspunktTekst")):n.push(E.jsx(oe,{id:"UttakPanel.Overstyrt.Utfort"},"aksjonspunktTekst"))),n},Ew=(e,t,r)=>{const n=new Array;if(e.forEach(s=>{const i=s.aktiviteter.filter(o=>t.stonadskontoer[o.stønadskontoType]===void 0&&!!o.trekkdagerDesimaler&&o.trekkdagerDesimaler>0);if(s.periodeResultatType===Je.INNVILGET&&i.length>0){const o=r.formatMessage({id:"UttakPanel.InvalidStonadskonto"},{konto:Ol[i[0].stønadskontoType]});n.includes(o)||n.push(o)}}),n.length===0){const s=Object.values(t.stonadskontoer).filter(i=>!i.gyldigForbruk);s.length>0&&n.push(r.formatMessage({id:"UttakPanel.KontoMedUgyldigForbruk"},{konto:Ol[s[0].stonadskontotype]}))}const a=t[Q.FLERBARNSDAGER];return n.length===0&&a&&!a.gyldigForbruk&&n.push(r.formatMessage({id:"UttakPanel.InvalidTrekkDagerFlerbarnsdager"},{maxDays:a.maxDager})),n},Rw=(e,t)=>{const r=t.some(s=>s.definisjon===Ve.OVERSTYRING_AV_UTTAKPERIODER);return(t.length===0||t.length===1&&r?[Ve.OVERSTYRING_AV_UTTAKPERIODER]:t.filter(s=>s.definisjon!==Ve.OVERSTYRING_AV_UTTAKPERIODER).map(s=>s.definisjon)).map(s=>({kode:MR(s,Ve.FASTSETT_UTTAKPERIODER,Ve.OVERSTYRING_AV_UTTAKPERIODER,Ve.TILKNYTTET_STORTINGET,Ve.ANNENPART_EØS,Ve.TETTE_SAKER,Ve.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,Ve.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN,Ve.KONTROLLER_OPPLYSNINGER_OM_DØD,Ve.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,Ve.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET,Ve.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT),perioder:e}))},Aw=(e,t)=>e.fom<t.fom?-1:e.fom>t.fom?1:0,em=({uttaksresultat:e,uttakStonadskontoer:t,familiehendelse:r,soknad:n,personoversikt:a,kanOverstyre:s,oppdaterStønadskontoer:i,arbeidsgiverOpplysningerPerId:o})=>{const l=tr(),{fagsak:d,behandling:u,submitCallback:g,alleKodeverk:k,isReadOnly:f,aksjonspunkterForPanel:v}=dm(),[b,y]=m.useState(!1),[T,p]=m.useState(!1),[h,A]=m.useState(!1),D=()=>{y(J=>!J)},{mellomlagretFormData:O,setMellomlagretFormData:S}=um(),[I,_]=m.useState(O??e.perioderSøker),[x,F]=m.useState(),[q,w]=m.useState(t);m.useEffect(()=>()=>S(I),[I]);const N=e.perioderAnnenpart.concat(I),j=J=>{const z=J.findIndex(Y=>Y.periodeResultatType===Je.MANUELL_BEHANDLING);z!==-1?F(z):x!==void 0&&F(void 0)};m.useEffect(()=>{j(N)},[]);const L=()=>{A(!0),g(Rw(I,v))},B=J=>{const Y=[...I.filter(le=>le.fom!==J[0].fom).concat(J)].sort(Aw);_(Y),p(!0),i({behandlingUuid:u.uuid,perioder:Y}).then(le=>{if(w(le),J.length===2){const ie=Y.findIndex(fe=>fe.fom===J[0].fom);F(e.perioderAnnenpart.length+ie)}else j(e.perioderAnnenpart.concat(Y))})},V=v.some(J=>J.status===ps.OPPRETTET),U=v.some(J=>J.definisjon===Ve.TILKNYTTET_STORTINGET&&V),$=m.useMemo(()=>v.some(J=>J.definisjon===Ve.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE)?!1:I.some(J=>J.periodeResultatType===Je.MANUELL_BEHANDLING)?!0:x!==void 0||!T,[I,q,x,T]),Z=!T||x!==void 0?[]:Ew(I,q,l),K=v.filter(J=>J.definisjon!==Ve.OVERSTYRING_AV_UTTAKPERIODER).length===0||v.some(J=>J.toTrinnsBehandlingGodkjent===!0&&J.status===ps.UTFORT),re=v.some(J=>J.definisjon===Ve.OVERSTYRING_AV_UTTAKPERIODER);return E.jsxs(An,{gap:"6",children:[E.jsxs(vn,{gap:"4",children:[E.jsx(Cs,{size:"small",children:E.jsx(oe,{id:"UttakPanel.Title"})}),!f&&s&&(!V||re)&&E.jsx(O0,{onClick:D,erOverstyrt:b})]}),v.length>0&&V&&E.jsx(hg,{children:Tw(e,v)}),E.jsx(Qg,{stønadskontoer:q.stonadskontoer?Object.values(q.stonadskontoer):void 0,arbeidsgiverOpplysningerPerId:o}),E.jsx(Zg,{perioderSøker:I,perioderAnnenpart:e.perioderAnnenpart,valgtPeriodeIndex:x,setValgtPeriodeIndex:F,behandling:u,søknad:n,personoversikt:a,familiehendelse:r,endringsdato:e.endringsdato,tilknyttetStortinget:U,fagsak:d,alleKodeverk:k}),x!==void 0&&E.jsx(Yg,{perioderSøker:I,behandling:u,uttaksresultat:e,valgtPeriodeIndex:x,oppdaterPeriode:B,isReadOnly:(K||f)&&!b,alleKodeverk:k,arbeidsgiverOpplysningerPerId:o,uttakStonadskontoer:q,setValgtPeriodeIndex:F,erTilknyttetStortinget:U,harÅpneAksjonspunkter:V,endringsdato:e.endringsdato},x),(!K&&!f||b)&&E.jsxs(E.Fragment,{children:[Z.length>0&&E.jsx(E.Fragment,{children:Z.map(J=>E.jsx(ii,{size:"small",variant:"error",children:J},J))}),E.jsx("div",{children:E.jsx(Xe,{size:"small",variant:"primary",disabled:Z.length>0||h||$,loading:h,onClick:L,type:"button",children:E.jsx(oe,{id:"Uttak.Confirm"})})})]})]})};em.__docgenInfo={description:"",methods:[],displayName:"UttakProsessPanel",props:{uttaksresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  årsakFilter: AarsakFilter;
  endringsdato: string;
}`,signature:{properties:[{key:"perioderSøker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]",required:!0}},{key:"perioderAnnenpart",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]",required:!0}},{key:"årsakFilter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kreverSammenhengendeUttakTom: string;
  utenMinsterett: boolean;
  søkerErMor: boolean;
}`,signature:{properties:[{key:"kreverSammenhengendeUttakTom",value:{name:"string",required:!0}},{key:"utenMinsterett",value:{name:"boolean",required:!0}},{key:"søkerErMor",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  kreverSammenhengendeUttakTom: string;
  utenMinsterett: boolean;
  søkerErMor: boolean;
}>`,required:!0}},{key:"endringsdato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  årsakFilter: AarsakFilter;
  endringsdato: string;
}>`},description:""},uttakStonadskontoer:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
}`,signature:{properties:[{key:"stonadskontoer",value:{name:"Record",elements:[{name:"StonadskontoType"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}`,signature:{properties:[{key:"stonadskontotype",value:{name:"string",required:!0}},{key:"maxDager",value:{name:"number",required:!0}},{key:"saldo",value:{name:"number",required:!0}},{key:"aktivitetSaldoDtoList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}`,signature:{properties:[{key:"aktivitetIdentifikator",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}`,signature:{properties:[{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}>`,required:!0}},{key:"saldo",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}>`}],raw:"AktivitetSaldo[]",required:!0}},{key:"gyldigForbruk",value:{name:"boolean",required:!0}},{key:"kontoUtvidelser",value:{name:"signature",type:"object",raw:`{
  prematurdager: number;
  flerbarnsdager: number;
}`,signature:{properties:[{key:"prematurdager",value:{name:"number",required:!0}},{key:"flerbarnsdager",value:{name:"number",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}>`}],raw:"Record<StonadskontoType, Stonadskonto>",required:!0}},{key:"tapteDagerFpff",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
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
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},kanOverstyre:{required:!0,tsType:{name:"boolean"},description:""},oppdaterStønadskontoer:{required:!0,tsType:{name:"signature",type:"function",raw:`(params: {
  behandlingUuid: string;
  perioder: PeriodeSoker[];
}) => Promise<UttakStonadskontoer>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  perioder: PeriodeSoker[];
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
}`,signature:{properties:[{key:"stonadskontoer",value:{name:"Record",elements:[{name:"StonadskontoType"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}`,signature:{properties:[{key:"stonadskontotype",value:{name:"string",required:!0}},{key:"maxDager",value:{name:"number",required:!0}},{key:"saldo",value:{name:"number",required:!0}},{key:"aktivitetSaldoDtoList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}`,signature:{properties:[{key:"aktivitetIdentifikator",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}`,signature:{properties:[{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}>`,required:!0}},{key:"saldo",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}>`}],raw:"AktivitetSaldo[]",required:!0}},{key:"gyldigForbruk",value:{name:"boolean",required:!0}},{key:"kontoUtvidelser",value:{name:"signature",type:"object",raw:`{
  prematurdager: number;
  flerbarnsdager: number;
}`,signature:{properties:[{key:"prematurdager",value:{name:"number",required:!0}},{key:"flerbarnsdager",value:{name:"number",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}>`}],raw:"Record<StonadskontoType, Stonadskonto>",required:!0}},{key:"tapteDagerFpff",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
}>`}],raw:"Promise<UttakStonadskontoer>"}}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const ww={"UttakPanel.Aksjonspunkt.5067":"Innvilget perioder etter start neste stønadsperiode pga minsterett ved tette saker. Vurder evt overlapp med brukers senere stønadsperioder.","UttakPanel.Aksjonspunkt.5069":"Annen forelder har godkjent opptjening i EØS. Vurder annen parts uttak i EØS.","UttakPanel.Aksjonspunkt.5072":"Søker er stortingsrepresentant. Vurder alle periodene og sett utbetalingsgrad til 0.","UttakPanel.Aksjonspunkt.5073":"Kontroller realitetsbehandling/klage.","UttakPanel.Aksjonspunkt.5074":"Kontroller opplysninger om medlemskap.","UttakPanel.Aksjonspunkt.5075":"Kontroller opplysninger om fordeling av stønadsperioden.","UttakPanel.Aksjonspunkt.5076":"Kontroller opplysninger om død. Opphør stønadsperioden fra riktig dato.","UttakPanel.Aksjonspunkt.5077":"Kontroller opplysninger om søknadsfrist.","UttakPanel.Aksjonspunkt.5078":"Kontroller tilstøtende ytelser innvilget.","UttakPanel.Aksjonspunkt.5079":"Kontroller tilstøtende ytelser opphørt.","UttakPanel.Aksjonspunkt.5098":"Adopsjon ikke implementert, må behandles manuelt.","UttakPanel.Aksjonspunkt.Generell":"Alle aksjonspunkter skal vurderes manuelt. Kontakt søker ved behov.","UttakPanel.Aksjonspunkt.Behandlet":"Fastsett uttaksperioder manuelt.","UttakPanel.Overstyrt.KontrollerPaNytt":"Perioden var overstyrt i forrige behandling, vurder om perioden fortsatt må overstyres.","UttakPanel.Overstyrt.Utfort":"Perioder er overstyrt.","UttakPanel.Title":"Uttak","UttakPanel.manuellBehandlingÅrsakEnskiltArbeidsforhold":"{arbeidsforhold} er tom for stønadsdager. Vurder å endre stønadskonto eller sette trekkdager og utbetalingsgrad til null. Kontakt søker ved behov.","UttakPanel.manuellBehandlingÅrsakArbeidsforhold":"{arbeidsforhold} er tomme for stønadsdager. Vurder å endre stønadskonto eller sette trekkdager og utbetalingsgrad til null. Kontakt søker ved behov.","PeriodeResultatType.INNVILGET":"Innvilget","PeriodeResultatType.AVSLÅTT":"Avslått","PeriodeResultatType.IKKE_FASTSATT":"Ikke fastsatt","PeriodeResultatType.GYLDIG_UTSETTELSE":"Gyldig utsettelse","PeriodeResultatType.UGYLDIG_UTSETTELSE":"Ugyldig utsettelse","Uttak.Confirm":"Bekreft og fortsett","Uttak.ManuellOverstyring":"Manuell overstyring","Uttak.Overstyrt":"Kun overstyrer kan endre på periodene","RenderUttakTable.ArbeidType.ANNET":"Annet","RenderUttakTable.ArbeidType.FRILANS":"Frilanser","RenderUttakTable.ArbeidType.SELVSTENDIG_NÆRINGSDRIVENDE":"Selvstendig næringsdrivende","RenderUttakTable.ArbeidType.ORDINÆRT_ARBEID":"Arbeidstaker","RenderUttakTable.PeriodeData.Aktivitet":"Aktivitet","RenderUttakTable.PeriodeData.Stonadskonto":"Stønadskonto","RenderUttakTable.PeriodeData.Stillingsprosent":"Stillingsprosent","RenderUttakTable.PeriodeData.SamtidigUttak":"Samtidig uttak","RenderUttakTable.PeriodeData.SamtidigUttakProsent":"Prosentandel samtidig uttak","RenderUttakTable.PeriodeData.Trekk":"Trekk antall uker/dager","RenderUttakTable.PeriodeData.Andel":"Andel i arbeid","RenderUttakTable.PeriodeData.Utbetalingsgrad":"Utbetalingsgrad (%)","RenderUttakTable.MerEnNullUtaksprosent":"Uttak av foreldrepenger i denne perioden er avslått, utbetalingsgrad kan ikke være større enn 0.","UttakTimeLineData.PeriodeData.Detaljer":"Detaljer for valgt periode","UttakTimeLineData.PeriodeData.DelOppPerioden":"Del opp perioden","TimeLineInfo.Aktivitet":"Aktivitet","TimeLineInfo.Disponibelt":"Disponibelt","TimeLineInfo.Stonadinfo.DisponibleStonadsdager":"Disponible stønadsdager (u/d)","TimeLineInfo.Stonadinfo.Total":"Sum permisjon: <b>{uker} </b> uker {dager, select, 0 {} other {og <b>{dager}</b> dager}}","TimeLineInfo.Stonadinfo.MaksDato":"Maks dato: <b>{dato} </b>","TimeLineInfo.Stonadinfo.UkerDager":"<b>{ukerVerdi}/{dagerVerdi}</b>","TimeLineTab.Stonadinfo.UkerDager":"<b>{ukerVerdi}/{dagerVerdi}</b>","TimeLineTab.Stonadinfo.ForeldrepengerFF":"Før fødsel","TimeLineTab.Stonadinfo.UtenAktivitetskrav":"Uten aktivitetskrav","TimeLineTab.Stonadinfo.Minsterett":"Minsterett ({uker}u{dager, select, 0 {} other {, {dager}d}})","TimeLineTab.Stonadinfo.MinsterettNesteStønadsperiode":"Gjenværende rett ({uker}u)","TimeLineTab.Stonadinfo.Fellesperiode":"Fellesperiode","TimeLineTab.Stonadinfo.Modrekvote":"Mødrekvote","TimeLineTab.Stonadinfo.Fedrekvote":"Fedrekvote","TimeLineTab.Stonadinfo.SamtidigUttak":"Samtidig uttak","TimeLineTab.Stonadinfo.Flerbarnsdager":"Flerbarnsdager","TimeLineTab.Stonadinfo.ForeldrePenger":"Foreldrepenger","TimeLineTab.Stonadinfo.Empty":" ","UttakTidslinje.DodSoker":"Dødstidspunkt","UttakTidslinje.Fodsel":"Tidspunkt for familiehendelse","UttakTidslinje.Revurdering":"Startpunkt for revurdering","UttakTidslinje.Soknad":"Tidspunkt for mottatt søknad","UttakTidslinje.ZoomInn":"Zoom inn","UttakTidslinje.ZoomUt":"Zoom ut","UttakTidslinje.ScrollTilVenstre":"Scroll til venstre","UttakTidslinje.ScrollTilHogre":"Scroll til høyre","UttakTidslinje.GradertPeriode":"Gradert","UttakTidslinje.ManueltEditert":"Endret av saksbehandler","UttakTidslinje.UtsettelsePeriode":"Utsettelse","UttakTidslinje.OppholdPeriode":"Opphold","UttakTidslinje.Modrekvote":"Mødrekvote","UttakTidslinje.Fedrekvote":"Fedrekvote","UttakTidslinje.Fellesperiode":"Fellesperiode","UttakTidslinje.Foreldrepenger":"Foreldrepenger","UttakTidslinje.ForeldrepengerForFodsel":"Foreldrepenger før fødsel","UttakTidslinje.Stonadskonto":"Stønadskonto: {periodeType}","UttakTidslinje.Periode":"Periode: {periodeString}","UttakTidslinje.Dager":"Dager: {dager}","UttakActivity.Vurdering":"Vurdering: ","UttakActivity.Oppfylt":"Oppfylt","UttakActivity.IkkeOppfylt":"Ikke oppfylt","UttakActivity.IkkeOppfyltAarsak":"<b>Ikke oppfylt: </b> {avslagAarsak}","UttakActivity.InnvilgelseAarsak":"<b>Innvilget: </b> {innvilgelseAarsak}","UttakActivity.InnvilgelseAarsaker":"Årsak til innvilgelse","UttakActivity.GraderingLabel":"Gradering","UttakActivity.GraderingAvslagAarsaker":"Årsak til avslag om gradering","UttakActivity.Oppdater":"Oppdater","UttakActivity.Avbryt":"Avbryt","UttakActivity.AvslagAarsak":"Årsak til avslag","UttakActivity.Flerbarnsdager":"Flerbarnsdager","UttakActivity.SamtidigUttak":"Samtidig uttak","UttakActivity.Gradering":"Gradering av arbeidsforhold","UttakActivity.GraderingIkkeOppfylt":"Gradering ikke oppfylt","UttakActivity.Uttak":"Uttak","UttakActivity.IngenKonto":"Ingen stønadskonto","UttakActivity.Utsettelse":"Utsettelse - {utsettelseType}","UttakInfo.MottattDato":"Mottatt dato: {dato}","UttakInfoPanel.FaktaUttak":"Fakta om uttak","UttakInfoPanel.Aksjonspunkt.5070":"Kontakt søker ved behov. Fastsett korrekt og dokumentert søknadsperiode og andel i arbeid.","UttakInfoPanel.Aksjonspunkt.5081":"Første dato for uttak er {value}. Rediger søknadsperiodene så de stemmer overens med startdato. Kontakt søker ved behov.","UttakInfoPanel.Aksjonspunkt.5088":`Søker har oppgitt at annen forelder ikke har rett, men annen forelder har uttak av foreldrepenger for samme barn.
Endre søknadsperiodene under til perioder med kvoter. Ved behov ta kontakt med bruker`,"UttakInfoPanel.Aksjonspunkt.6070":"Saksbehandler initierer kontroll av søknadsperiodene","UttakInfoPanel.Aksjonspunkt.5086":`Vurder om den andre forelderen har rett til foreldrepenger. Slå opp i relevant fagsystem for å finne informasjon om inntekt.
Dersom den andre forelderen har rett må du endre til riktige kvoter i alle søknadsperiodene.`,"UttakInfoPanel.Aksjonspunkt.6013":"Perioder er overstyrt.","UttakInfoPanel.Aksjonspunkt.FarSøkerFør6Uker":"Far/medmor søker fedrekvote før 7. uke etter fødsel. Vurder om far/medmor har gyldig grunn for uttak av fedrekvote i denne perioden. Kontakt søker ved behov.","UttakInfoPanel.TilpassSoknadsperiode":"Tilpass søknadsperiode til inntektsmeldingen","UttakInfoPanel.SykdomSkadenDokumentertAngiAvklartPeriode":"Sykdommen/skaden er dokumentert, angi periode","UttakInfoPanel.SykdomSkadenIkkeDokumentert":"Sykdommen/skaden er ikke dokumentert","UttakInfoPanel.InnleggelsenErDokumentertAngiAvklartPeriode":"Innleggelsen er dokumentert, angi avklart periode","UttakInfoPanel.ForeldreansvarErIkkeDokumentert":"Overføringen er ikke dokumentert","UttakInfoPanel.ForeldreansvarErDokumentertAngiAvklartPeriode":"Overføringen er dokumentert, angi avklart periode","UttakInfoPanel.InnleggelsenErIkkeDokumentert":"Innleggelsen er ikke dokumentert","UttakInfoPanel.PeriodeKanIkkeAvklares":"Perioden kan ikke avklares","UttakInfoPanel.VelgPeriodeFraInntektsmeldingen":"Velg periode fra inntektsmeldingen","UttakInfoPanel.BegrunnEndringene":"Begrunn endringene","UttakInfoPanel.BegrunnEndringen":"Begrunn endringen","UttakInfoPanel.Vurdering":"Vurdering","UttakInfoPanel.OverlappendePeriode":"Overlappende periode","UttakInfoPanel.OverlappendePerioder":"En eller flere perioder overlapper","UttakInfoPanel.AndelIArbeid":"Andel i arbeid","UttakInfoPanel.BekreftOgFortsett":"Bekreft og fortsett","UttakInfoPanel.SoknadsPeriode":"Søknadsperiode","UttakInfoPanel.PeriodenErOk":"Perioden er ok","UttakInfoPanel.FraSøknad":"Fra søknad","UttakInfoPanel.AvvikiInntektsmelding":"Avvikende inntektsmelding","UttakInfoPanel.EndreSoknadsperioden":"Endre søknadsperioden","UttakInfoPanel.PeriodenKanIkkeAvklares":"Gå videre med avvikende opplysninger og vurder om ytelsen skal reduseres","UttakInfoPanel.PeriodenErOverlappende":"Perioden er overlappende","UttakInfoPanel.Periode":"Periode","UttakInfoPanel.NyPeriode":"Ny periode","UttakInfoPanel.PeriodeType":"Periodetype","UttakInfoPanel.PeriodeArsak":"Periodeårsak","UttakInfoPanel.ArsakUtsettelse":"Årsak for utsettelse","UttakInfoPanel.AngiArsakforOverforing":"Angi årsak for overføring av kvote","UttakInfoPanel.AvklartPeriode":"Avklart periode","UttakInfoPanel.Ok":"OK","UttakInfoPanel.Avbryt":"Avbryt","UttakInfoPanel.Nullstill":"Nullstill","UttakInfoPanel.Oppdater":"Oppdater","UttakInfoPanel.SlettPerioden":"Slett perioden","UttakInfoPanel.EndrePerioden":"Endre perioden","UttakInfoPanel.Gradering":"Gradering","UttakInfoPanel.IkkeOppgittGradering":"Ikke oppgitt gradering","UttakInfoPanel.SamtidigUttak":"Samtidig uttak","UttakInfoPanel.SamtidigUttakProsentandel":"Uttak","UttakInfoPanel.Flerbarnsdager":"Flerbarnsdager","UttakInfoPanel.ArbeidsForhold":"Arbeidsforhold","UttakInfoPanel.Aktivitet":"Aktivitet","UttakInfoPanel.ErArbeidstaker":"Er arbeidstaker","UttakInfoPanel.StonadsKonto":"Stønadskonto","UttakInfoPanel.TypeUttak":"Type Uttak","UttakInfoPanel.LeggTilPeriode":"Legg til periode","UttakInfoPanel.FulltUttak":"Fullt uttak","UttakInfoPanel.GradertUttak":"Gradert uttak","UttakInfoPanel.Utsettelse":"Utsettelse","UttakInfoPanel.OverføringMedÅrsak":"Overføring: {årsak}","UttakInfoPanel.UtsettelseMedÅrsak":"Utsettelse: {årsak}","UttakInfoPanel.OppholdMedÅrsak":"Opphold: annen forelders uttak","UttakInfoPanel.UttakMedGradering":"Uttak: Gradering","UttakInfoPanel.Uttak":"Uttak","UttakInfoPanel.GraderPerioden":"Grader perioden","UttakInfoPanel.FastsettResultat":"Fastsett resultat for perioden","UttakInfoPanel.TomPeriode":"Tom periode","UttakInfoPanel.PeriodenharTommeDagerFremTilNestePeriode":"Perioden har tomme dager frem til neste periode","UttakInfoPanel.DokumentertSykdom":"Sykdommen/skaden er vurdert som dokumentert i Fakta om fødsel. Vurderingene må være like.","UttakInfoPanel.IkkeDokumentertSykdom":"Sykdommen/skaden er vurdert som ikke dokumentert i Fakta om fødsel. Vurderingene må være like.","UttakInfoPanel.PeriodeMellomFørsteuttaksdatoOgEndringsdato":"Endringstidspunktet i denne behandlingen er {endringsdato}. Perioder før endringstidspunktet vises først i uttaksresultat fordi de i utgangspunktet ikke skal vurderes på nytt i denne behandlingen. Ved behov legg inn søknadsperioder før endringsdato. De nye periodene vil medføre flytting av endringsdatoen og ny vurdering av tidligere vedtatte perioder. Du kan ikke legge inn perioder som er før første uttaksdag {førsteuttaksdato}.","UttakInfoPanel.OrginaleStartdatoKanIkkeEndres":`Den originale startdatoen til søknadsperioden må ikke endres.
Original startdato: {originalStartDato}`,"UttakInfoPanel.manglerPeriodeEtterFørsteuttaksdato":"Mangler periode etter første uttaksdag: {førsteuttaksdato}","UttakInfoPanel.periodeFørFørsteuttaksdato":"Første søknadsperiode {nyStartDato} kan ikke starte før første uttaksdag {førsteUttaksdato}","UttakInfoPanel.ForHoyArbeidstidsprosent":"En eller flere perioder har en arbeidstidsprosent over 100%.","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","UttakInfoPanel.AnnenForelderHarRett":"Annen forelder har rett","UttakInfoPanel.AnnenForelderHarIkkeRett":"Annen forelder har ikke rett","UttakInfoPanel.ManuellOverstyring":"Manuell overstyring","UttakInfo.Uttaksdager":"Prosentandel samtidig uttak","UttakPeriodePanel.nextPeriod":"Neste periode","UttakPeriodePanel.nextPeriodShort":"Neste","UttakPeriodePanel.prevPeriod":"Forrige periode","UttakPeriodePanel.prevPeriodShort":"Forrige","UttakPeriodePanel.LukkPeriode":"Lukk periode","UttakInfo.SamtidigUttaksprosent":"Uttak","UttakInfo.Opphold.AnnenForelder":"Opphold i uttak grunnet annen foreldres uttak","Person.Age":"{age} år","Person.ImageText":"Personinformasjon","Person.Woman":"Kvinne","Person.Man":"Mann","Person.Unknown":"Ukjent","Person.ManglerDodsdato":"Dødsdato mangler","Person.HarIkkeNorskFnrEllerDnr":"Har ikke norsk f.nr. eller d-nr.","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.prevPeriod":"Forrige periode","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode","ValidationMessage.MerEn100Prosent":"Samlet utbetalingsgrad og andel i arbeid bør ikke overskride 100%.","ValidationMessage.UtsettelseUtenFullArbeid":"Søker har ikke 100% stilling, vurder om perioden kan utsettes.","ValidationMessage.ukerOgDagerVidNullUtbetalningsgradMessage":"Trekk minst en dag når utbetalingsgraden er høyre enn 0%","ValidationMessage.utbetalingsgradErMerSamtidigUttaksprosent":"Feltet kan ikke være høyere enn samtidig uttaksprosent","ValidationMessage.trekkdagerErMerEnnNullUtsettelse":"Ingen trekkdager for utsettelse","ValidationMessage.utbetalingMerEnnNullUtsettelse":"Ingen utbetalingsgrad for utsettelse","ValidationMessage.HøyereEnn0NårInnvilgetUttak":"Feltet må være høyere enn 0","ValidationMessage.SamtidigUttakErObligatorisk":"Feltet er obligatorisk","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","UttakPanel.NegativeSaldo":"Antall dager kan ikke overstige dagene som gjenstår på {periode}. Det er oppgitt {days} dager for mye.","UttakPanel.KontoMedUgyldigForbruk":"Antall dager valgt for {konto} er ikke gyldig","UttakPanel.InvalidTrekkDagerFlerbarnsdager":"Antall dager med flerbarnsdager kan ikke være høyere enn {maxDays}","UttakPanel.InvalidStonadskonto":"Stønadskonto {konto} er ikke tilgjengelig","UttakActivity.MerEn100Prosent":"Samlet utbetalingsgrad og andel i arbeid bør ikke overskride 100%.","UttakActivity.MerEn100ProsentOgOgyldigUtsettlse":"Samlet utbetalingsgrad og andel i arbeid bør ikke overskride 100%. Søker har ikke 100% stilling, vurder om perioden kan utsettes."},Ow=Pn(ww),Bs=({uttaksresultat:e,uttakStonadskontoer:t,familiehendelse:r,soknad:n,personoversikt:a,kanOverstyre:s,oppdaterStønadskontoer:i,arbeidsgiverOpplysningerPerId:o})=>E.jsx(gm,{value:Ow,children:E.jsx(em,{uttaksresultat:e,uttakStonadskontoer:t,familiehendelse:r,soknad:n,personoversikt:a,kanOverstyre:s,oppdaterStønadskontoer:i,arbeidsgiverOpplysningerPerId:o})});Bs.__docgenInfo={description:"",methods:[],displayName:"UttakProsessIndex",props:{uttakStonadskontoer:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
}`,signature:{properties:[{key:"stonadskontoer",value:{name:"Record",elements:[{name:"StonadskontoType"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}`,signature:{properties:[{key:"stonadskontotype",value:{name:"string",required:!0}},{key:"maxDager",value:{name:"number",required:!0}},{key:"saldo",value:{name:"number",required:!0}},{key:"aktivitetSaldoDtoList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}`,signature:{properties:[{key:"aktivitetIdentifikator",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}`,signature:{properties:[{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}>`,required:!0}},{key:"saldo",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}>`}],raw:"AktivitetSaldo[]",required:!0}},{key:"gyldigForbruk",value:{name:"boolean",required:!0}},{key:"kontoUtvidelser",value:{name:"signature",type:"object",raw:`{
  prematurdager: number;
  flerbarnsdager: number;
}`,signature:{properties:[{key:"prematurdager",value:{name:"number",required:!0}},{key:"flerbarnsdager",value:{name:"number",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}>`}],raw:"Record<StonadskontoType, Stonadskonto>",required:!0}},{key:"tapteDagerFpff",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
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
}>`},description:""},uttaksresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  årsakFilter: AarsakFilter;
  endringsdato: string;
}`,signature:{properties:[{key:"perioderSøker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]",required:!0}},{key:"perioderAnnenpart",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]",required:!0}},{key:"årsakFilter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kreverSammenhengendeUttakTom: string;
  utenMinsterett: boolean;
  søkerErMor: boolean;
}`,signature:{properties:[{key:"kreverSammenhengendeUttakTom",value:{name:"string",required:!0}},{key:"utenMinsterett",value:{name:"boolean",required:!0}},{key:"søkerErMor",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  kreverSammenhengendeUttakTom: string;
  utenMinsterett: boolean;
  søkerErMor: boolean;
}>`,required:!0}},{key:"endringsdato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  årsakFilter: AarsakFilter;
  endringsdato: string;
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
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},kanOverstyre:{required:!0,tsType:{name:"boolean"},description:""},oppdaterStønadskontoer:{required:!0,tsType:{name:"signature",type:"function",raw:`(params: {
  behandlingUuid: string;
  perioder: PeriodeSoker[];
}) => Promise<UttakStonadskontoer>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  perioder: PeriodeSoker[];
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}],raw:"PeriodeSokerAktivitet[]",required:!0}},{key:"periodeResultatType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"periodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"manuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"graderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!0}},{key:"samtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"graderingInnvilget",value:{name:"boolean",required:!0}},{key:"gradertAktivitet",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}`,signature:{properties:[{key:"stønadskontoType",value:{name:"StonadskontoType",required:!1}},{key:"prosentArbeid",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"utbetalingsgrad",value:{name:"number",required:!1}},{key:"uttakArbeidType",value:{name:"string",required:!1}},{key:"gradering",value:{name:"boolean",required:!1}},{key:"trekkdagerDesimaler",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>`,required:!1}},{key:"periodeType",value:{name:"string",required:!0}},{key:"utsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>`}],raw:"PeriodeSoker[]",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
}`,signature:{properties:[{key:"stonadskontoer",value:{name:"Record",elements:[{name:"StonadskontoType"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}`,signature:{properties:[{key:"stonadskontotype",value:{name:"string",required:!0}},{key:"maxDager",value:{name:"number",required:!0}},{key:"saldo",value:{name:"number",required:!0}},{key:"aktivitetSaldoDtoList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}`,signature:{properties:[{key:"aktivitetIdentifikator",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}`,signature:{properties:[{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}>`,required:!0}},{key:"saldo",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}>`}],raw:"AktivitetSaldo[]",required:!0}},{key:"gyldigForbruk",value:{name:"boolean",required:!0}},{key:"kontoUtvidelser",value:{name:"signature",type:"object",raw:`{
  prematurdager: number;
  flerbarnsdager: number;
}`,signature:{properties:[{key:"prematurdager",value:{name:"number",required:!0}},{key:"flerbarnsdager",value:{name:"number",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}>`}],raw:"Record<StonadskontoType, Stonadskonto>",required:!0}},{key:"tapteDagerFpff",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
}>`}],raw:"Promise<UttakStonadskontoer>"}}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const{action:nm}=__STORYBOOK_MODULE_ACTIONS__,Ur=[{definisjon:Ve.FASTSETT_UTTAKPERIODER,status:ps.OPPRETTET,begrunnelse:null,toTrinnsBehandling:!0,aksjonspunktType:ud.MANUELL,kanLoses:!0}],Sw={gjeldende:{skjaringstidspunkt:"2019-11-04",avklartBarn:[{fodselsdato:"2019-11-04"}]}},Dw={uuid:"1",versjon:1,type:"BT-002",behandlingsresultat:{skjæringstidspunkt:{dato:"2019-10-14"}},status:"UTRED",språkkode:"-"},Et={tapteDagerFpff:1,stonadskontoer:{FEDREKVOTE:{stonadskontotype:"FEDREKVOTE",maxDager:75,saldo:50,aktivitetSaldoDtoList:[{aktivitetIdentifikator:{uttakArbeidType:"ORDINÆRT_ARBEID",arbeidsgiverReferanse:"910909088"},saldo:50}],gyldigForbruk:!0},MØDREKVOTE:{stonadskontotype:"MØDREKVOTE",maxDager:75,saldo:35,aktivitetSaldoDtoList:[{aktivitetIdentifikator:{uttakArbeidType:"ORDINÆRT_ARBEID",arbeidsgiverReferanse:"910909088"},saldo:35}],gyldigForbruk:!0},FELLESPERIODE:{stonadskontotype:"FELLESPERIODE",maxDager:80,saldo:80,aktivitetSaldoDtoList:[{aktivitetIdentifikator:{uttakArbeidType:"ORDINÆRT_ARBEID",arbeidsgiverReferanse:"910909088"},saldo:80}],gyldigForbruk:!0},FORELDREPENGER_FØR_FØDSEL:{stonadskontotype:"FORELDREPENGER_FØR_FØDSEL",maxDager:15,saldo:0,aktivitetSaldoDtoList:[{aktivitetIdentifikator:{uttakArbeidType:"ORDINÆRT_ARBEID",arbeidsgiverReferanse:"910909088"},saldo:0}],gyldigForbruk:!0}}},Iw={soknadType:"ST-001",mottattDato:"2019-11-18",fodselsdatoer:{1:"2019-11-04"},søknadsfrist:{mottattDato:"2019-11-18",utledetSøknadsfrist:"2020-01-31",søknadsperiodeStart:"2019-10-14",søknadsperiodeSlutt:"2020-02-02",dagerOversittetFrist:-74}},qw={342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},910909088:{erPrivatPerson:!1,referanse:"910909088",identifikator:"910909088",navn:"BEDRIFT AS"},994884174:{erPrivatPerson:!1,referanse:"994884174",identifikator:"994884174",navn:"Nav"}},jw={title:"prosess/prosess-uttak",component:Bs,decorators:[mm,km],args:{behandling:Dw,uttakStonadskontoer:Et,soknad:Iw,personoversikt:{bruker:{kjønn:Ks.KVINNE}},kanOverstyre:!1,familiehendelse:Sw,oppdaterStønadskontoer:e=>(nm("button-click")(e),Promise.resolve(Et)),arbeidsgiverOpplysningerPerId:qw},render:e=>E.jsx(Bs,{...e})},Ct={args:{aksjonspunkterForPanel:Ur,uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15},{stønadskontoType:Q.FORELDREPENGER,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c1",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:14}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.ÅRSAK_5002,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0},{fom:"2022-11-10",tom:"2022-12-21",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:30}],periodeResultatType:"AVSLÅTT",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4103,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:void 0,gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},Gt={args:{kanOverstyre:!0,uttaksresultat:{perioderSøker:[{fom:"2019-10-11",tom:"2019-10-31",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER_FØR_FØDSEL,prosentArbeid:0,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2006,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER_FØR_FØDSEL",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-11-01",gradertAktivitet:void 0},{fom:"2019-11-01",tom:"2019-12-12",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:30}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-11-01",gradertAktivitet:void 0},{fom:"2019-12-13",tom:"2020-01-23",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:50,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:50,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!0,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2031,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!0,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-11-01",gradertAktivitet:{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:50,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:50,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!0,trekkdagerDesimaler:15}},{fom:"2020-01-24",tom:"2020-02-13",aktiviteter:[{stønadskontoType:Q.UDEFINERT,prosentArbeid:100,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2011,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2019-11-01",gradertAktivitet:void 0},{fom:"2020-02-14",tom:"2020-02-20",aktiviteter:[{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:0,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:5}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2002,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FELLESPERIODE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2020-01-24",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!0,søkerErMor:!0},endringsdato:"2019-10-11"}}},Ht={args:{aksjonspunkterForPanel:Ur,uttaksresultat:{perioderSøker:[{fom:"2019-10-11",tom:"2019-10-31",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER_FØR_FØDSEL,prosentArbeid:0,arbeidsforholdId:"0716ce9f-d93d-40cd-a52c-c7c569995948",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15},{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:51,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:50,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2006,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER_FØR_FØDSEL",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-09-20",gradertAktivitet:void 0},{fom:"2019-11-01",tom:"2019-12-12",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"0716ce9f-d93d-40cd-a52c-c7c569995948",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:30}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-09-20",gradertAktivitet:void 0},{fom:"2019-12-13",tom:"2019-12-26",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:100,arbeidsforholdId:"0716ce9f-d93d-40cd-a52c-c7c569995948",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:10}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4082,manuellBehandlingÅrsak:be.ÅRSAK_5010,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2019-12-27",gradertAktivitet:void 0},{fom:"2019-12-27",tom:"2020-01-09",aktiviteter:[{stønadskontoType:Q.UDEFINERT,prosentArbeid:100,arbeidsforholdId:"0716ce9f-d93d-40cd-a52c-c7c569995948",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2011,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2019-12-27",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!0,søkerErMor:!0},endringsdato:"2019-10-11"}}},$t={args:{uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER_FØR_FØDSEL,prosentArbeid:0,arbeidsforholdId:"7272d1a7-8dbb-4953-bb39-e0742635b2a5",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2006,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER_FØR_FØDSEL",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-10",gradertAktivitet:void 0},{fom:"2022-11-10",tom:"2022-12-21",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"7272d1a7-8dbb-4953-bb39-e0742635b2a5",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:30}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-10",gradertAktivitet:void 0},{fom:"2022-12-22",tom:"2022-12-28",aktiviteter:[{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:0,arbeidsforholdId:"7272d1a7-8dbb-4953-bb39-e0742635b2a5",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:5}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2002,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FELLESPERIODE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-12-01",gradertAktivitet:void 0},{fom:"2022-12-29",tom:"2023-01-04",aktiviteter:[{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:0,arbeidsforholdId:"7272d1a7-8dbb-4953-bb39-e0742635b2a5",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:5}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FELLESPERIODE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-12-01",gradertAktivitet:void 0}],perioderAnnenpart:[{fom:"2022-10-27",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:"b97a7bc5-26ef-4fd8-874e-b475a732c7a8",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:10}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!0,samtidigUttaksprosent:100,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-17",gradertAktivitet:void 0},{fom:"2022-12-22",tom:"2022-12-28",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:"b97a7bc5-26ef-4fd8-874e-b475a732c7a8",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"AVSLÅTT",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4084,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-17",gradertAktivitet:void 0},{fom:"2023-01-05",tom:"2023-02-01",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:"b97a7bc5-26ef-4fd8-874e-b475a732c7a8",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:20}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-17",gradertAktivitet:void 0}],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},Yt={args:{aksjonspunkterForPanel:Ur,personoversikt:{bruker:{kjønn:Ks.MANN}},uttaksresultat:{perioderSøker:[{fom:"2022-11-10",tom:"2022-11-11",aktiviteter:[{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:34,arbeidsforholdId:"f41fad23-a318-4ecb-8949-8a8492b65c56",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!0,trekkdagerDesimaler:2}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.UDEFINERT,manuellBehandlingÅrsak:be.ÅRSAK_5010,graderingAvslagÅrsak:Ae.ÅRSAK_4501,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FELLESPERIODE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:34,arbeidsforholdId:"f41fad23-a318-4ecb-8949-8a8492b65c56",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!0,trekkdagerDesimaler:2}},{fom:"2022-11-12",tom:"2022-11-23",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:"f41fad23-a318-4ecb-8949-8a8492b65c56",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:8}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!0,samtidigUttaksprosent:100,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0},{fom:"2022-12-22",tom:"2023-01-04",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"f41fad23-a318-4ecb-8949-8a8492b65c56",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:10}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2021,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],perioderAnnenpart:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER_FØR_FØDSEL,prosentArbeid:0,arbeidsforholdId:"a94992b7-e454-458c-800c-a74b4f072c00",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2006,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER_FØR_FØDSEL",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0},{fom:"2022-11-10",tom:"2022-12-21",aktiviteter:[{stønadskontoType:Q.UDEFINERT,prosentArbeid:0,arbeidsforholdId:"a94992b7-e454-458c-800c-a74b4f072c00",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2027,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.SYKDOM_SKADE,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!1},endringsdato:"2022-11-10"}}},Sl={...Et,stonadskontoer:{...Et.stonadskontoer,MØDREKVOTE:{...Et.stonadskontoer.MØDREKVOTE,gyldigForbruk:!1}}},Wt={args:{aksjonspunkterForPanel:Ur,uttakStonadskontoer:Sl,oppdaterStønadskontoer:e=>(nm("button-click")(e),Promise.resolve(Sl)),uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.ÅRSAK_5002,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},zt={args:{aksjonspunkterForPanel:Ur,uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.ÅRSAK_5002,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},Xt={args:{aksjonspunkterForPanel:Ur,uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:51,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:50,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.ÅRSAK_5002,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},Qt={args:{aksjonspunkterForPanel:Ur,uttaksresultat:{perioderSøker:[{fom:"2023-02-15",tom:"2023-05-05",aktiviteter:[],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.UDEFINERT,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",mottattDato:"2023-01-18",gradertAktivitet:void 0}],perioderAnnenpart:[{fom:"2023-02-03",tom:"2023-02-14",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"886998562",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:8},{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"987195428",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:8},{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"972315575",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:8}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-28",gradertAktivitet:void 0},{fom:"2023-05-16",tom:"2023-05-17",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"987195428",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0},{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"886998562",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0},{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"972315575",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"AVSLÅTT",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4084,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-28",gradertAktivitet:void 0}],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!0,søkerErMor:!0},endringsdato:"2023-02-03"}}};var Dl,Il,ql;Ct.parameters={...Ct.parameters,docs:{...(Dl=Ct.parameters)==null?void 0:Dl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: åpentAksjonspunkt,
    uttaksresultat: {
      perioderSøker: [{
        fom: '2022-10-20',
        tom: '2022-11-09',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FORELDREPENGER,
          prosentArbeid: 0,
          arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: undefined,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15.0
        }, {
          stønadskontoType: StonadskontoType.FORELDREPENGER,
          prosentArbeid: 0,
          arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c1',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: undefined,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 14.0
        }],
        periodeResultatType: 'MANUELL_BEHANDLING',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_4002,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.ÅRSAK_5002,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2023-01-05',
        gradertAktivitet: undefined
      }, {
        fom: '2022-11-10',
        tom: '2022-12-21',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: 0,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 30.0
        }],
        periodeResultatType: 'AVSLÅTT',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_4103,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: undefined,
        gradertAktivitet: undefined
      }],
      perioderAnnenpart: [],
      årsakFilter: {
        kreverSammenhengendeUttakTom: '2021-09-30',
        utenMinsterett: false,
        søkerErMor: true
      },
      endringsdato: '2022-10-20'
    }
  }
}`,...(ql=(Il=Ct.parameters)==null?void 0:Il.docs)==null?void 0:ql.source}}};var _l,Nl,Pl;Gt.parameters={...Gt.parameters,docs:{...(_l=Gt.parameters)==null?void 0:_l.docs,source:{originalSource:`{
  args: {
    kanOverstyre: true,
    uttaksresultat: {
      perioderSøker: [{
        fom: '2019-10-11',
        tom: '2019-10-31',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FORELDREPENGER_FØR_FØDSEL,
          prosentArbeid: 0,
          arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2006,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER_FØR_FØDSEL',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2019-11-01',
        gradertAktivitet: undefined
      }, {
        fom: '2019-11-01',
        tom: '2019-12-12',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 30.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2003,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'MØDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2019-11-01',
        gradertAktivitet: undefined
      }, {
        fom: '2019-12-13',
        tom: '2020-01-23',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 50,
          arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 50,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: true,
          trekkdagerDesimaler: 15.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2031,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: true,
        periodeType: 'MØDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2019-11-01',
        gradertAktivitet: {
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 50,
          arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 50,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: true,
          trekkdagerDesimaler: 15.0
        }
      }, {
        fom: '2020-01-24',
        tom: '2020-02-13',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.UDEFINERT,
          prosentArbeid: 100,
          arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 0,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 0.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2011,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: '-',
        utsettelseType: UttakUtsettelseType.ARBEID,
        oppholdÅrsak: '-',
        mottattDato: '2019-11-01',
        gradertAktivitet: undefined
      }, {
        fom: '2020-02-14',
        tom: '2020-02-20',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FELLESPERIODE,
          prosentArbeid: 0,
          arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 5.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2002,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FELLESPERIODE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2020-01-24',
        gradertAktivitet: undefined
      }],
      perioderAnnenpart: [],
      årsakFilter: {
        kreverSammenhengendeUttakTom: '2021-09-30',
        utenMinsterett: true,
        søkerErMor: true
      },
      endringsdato: '2019-10-11'
    }
  }
}`,...(Pl=(Nl=Gt.parameters)==null?void 0:Nl.docs)==null?void 0:Pl.source}}};var jl,Fl,xl;Ht.parameters={...Ht.parameters,docs:{...(jl=Ht.parameters)==null?void 0:jl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: åpentAksjonspunkt,
    uttaksresultat: {
      perioderSøker: [{
        fom: '2019-10-11',
        tom: '2019-10-31',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FORELDREPENGER_FØR_FØDSEL,
          prosentArbeid: 0,
          arbeidsforholdId: '0716ce9f-d93d-40cd-a52c-c7c569995948',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15.0
        }, {
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 51,
          arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: 50,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2006,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER_FØR_FØDSEL',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2019-09-20',
        gradertAktivitet: undefined
      }, {
        fom: '2019-11-01',
        tom: '2019-12-12',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: '0716ce9f-d93d-40cd-a52c-c7c569995948',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 30.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2003,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'MØDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2019-09-20',
        gradertAktivitet: undefined
      }, {
        fom: '2019-12-13',
        tom: '2019-12-26',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 100,
          arbeidsforholdId: '0716ce9f-d93d-40cd-a52c-c7c569995948',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: undefined,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 10.0
        }],
        periodeResultatType: 'MANUELL_BEHANDLING',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_4082,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.ÅRSAK_5010,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: '-',
        utsettelseType: UttakUtsettelseType.ARBEID,
        oppholdÅrsak: '-',
        mottattDato: '2019-12-27',
        gradertAktivitet: undefined
      }, {
        fom: '2019-12-27',
        tom: '2020-01-09',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.UDEFINERT,
          prosentArbeid: 100,
          arbeidsforholdId: '0716ce9f-d93d-40cd-a52c-c7c569995948',
          eksternArbeidsforholdId: 'ARB001-001',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 0,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 0.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2011,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: '-',
        utsettelseType: UttakUtsettelseType.ARBEID,
        oppholdÅrsak: '-',
        mottattDato: '2019-12-27',
        gradertAktivitet: undefined
      }],
      perioderAnnenpart: [],
      årsakFilter: {
        kreverSammenhengendeUttakTom: '2021-09-30',
        utenMinsterett: true,
        søkerErMor: true
      },
      endringsdato: '2019-10-11'
    }
  }
}`,...(xl=(Fl=Ht.parameters)==null?void 0:Fl.docs)==null?void 0:xl.source}}};var Ml,Ul,Bl;$t.parameters={...$t.parameters,docs:{...(Ml=$t.parameters)==null?void 0:Ml.docs,source:{originalSource:`{
  args: {
    uttaksresultat: {
      perioderSøker: [{
        fom: '2022-10-20',
        tom: '2022-11-09',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FORELDREPENGER_FØR_FØDSEL,
          prosentArbeid: 0,
          arbeidsforholdId: '7272d1a7-8dbb-4953-bb39-e0742635b2a5',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2006,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER_FØR_FØDSEL',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2022-11-10',
        gradertAktivitet: undefined
      }, {
        fom: '2022-11-10',
        tom: '2022-12-21',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: '7272d1a7-8dbb-4953-bb39-e0742635b2a5',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 30.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2003,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'MØDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2022-11-10',
        gradertAktivitet: undefined
      }, {
        fom: '2022-12-22',
        tom: '2022-12-28',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FELLESPERIODE,
          prosentArbeid: 0,
          arbeidsforholdId: '7272d1a7-8dbb-4953-bb39-e0742635b2a5',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 5.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2002,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FELLESPERIODE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2022-12-01',
        gradertAktivitet: undefined
      }, {
        fom: '2022-12-29',
        tom: '2023-01-04',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FELLESPERIODE,
          prosentArbeid: 0,
          arbeidsforholdId: '7272d1a7-8dbb-4953-bb39-e0742635b2a5',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 5.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_4002,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FELLESPERIODE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2022-12-01',
        gradertAktivitet: undefined
      }],
      perioderAnnenpart: [{
        fom: '2022-10-27',
        tom: '2022-11-09',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: 'b97a7bc5-26ef-4fd8-874e-b475a732c7a8',
          eksternArbeidsforholdId: 'ARB001-003',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 10.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2003,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: true,
        samtidigUttaksprosent: 100,
        graderingInnvilget: false,
        periodeType: 'FEDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2022-11-17',
        gradertAktivitet: undefined
      }, {
        fom: '2022-12-22',
        tom: '2022-12-28',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: 'b97a7bc5-26ef-4fd8-874e-b475a732c7a8',
          eksternArbeidsforholdId: 'ARB001-003',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 0,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 0.0
        }],
        periodeResultatType: 'AVSLÅTT',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_4084,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FEDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2022-11-17',
        gradertAktivitet: undefined
      }, {
        fom: '2023-01-05',
        tom: '2023-02-01',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: 'b97a7bc5-26ef-4fd8-874e-b475a732c7a8',
          eksternArbeidsforholdId: 'ARB001-003',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 20.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2003,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FEDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2022-11-17',
        gradertAktivitet: undefined
      }],
      årsakFilter: {
        kreverSammenhengendeUttakTom: '2021-09-30',
        utenMinsterett: false,
        søkerErMor: true
      },
      endringsdato: '2022-10-20'
    }
  }
}`,...(Bl=(Ul=$t.parameters)==null?void 0:Ul.docs)==null?void 0:Bl.source}}};var Vl,Ll,Kl;Yt.parameters={...Yt.parameters,docs:{...(Vl=Yt.parameters)==null?void 0:Vl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: åpentAksjonspunkt,
    personoversikt: {
      bruker: {
        kjønn: NavBrukerKjonn.MANN
      }
    } as Personoversikt,
    uttaksresultat: {
      perioderSøker: [{
        fom: '2022-11-10',
        tom: '2022-11-11',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FELLESPERIODE,
          prosentArbeid: 34,
          arbeidsforholdId: 'f41fad23-a318-4ecb-8949-8a8492b65c56',
          eksternArbeidsforholdId: 'ARB001-003',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: undefined,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: true,
          trekkdagerDesimaler: 2.0
        }],
        periodeResultatType: 'MANUELL_BEHANDLING',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.UDEFINERT,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.ÅRSAK_5010,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.ÅRSAK_4501,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FELLESPERIODE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2023-01-05',
        gradertAktivitet: {
          stønadskontoType: StonadskontoType.FELLESPERIODE,
          prosentArbeid: 34,
          arbeidsforholdId: 'f41fad23-a318-4ecb-8949-8a8492b65c56',
          eksternArbeidsforholdId: 'ARB001-003',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: undefined,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: true,
          trekkdagerDesimaler: 2.0
        }
      }, {
        fom: '2022-11-12',
        tom: '2022-11-23',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: 'f41fad23-a318-4ecb-8949-8a8492b65c56',
          eksternArbeidsforholdId: 'ARB001-003',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 8.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2003,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: true,
        samtidigUttaksprosent: 100,
        graderingInnvilget: false,
        periodeType: 'FEDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2023-01-05',
        gradertAktivitet: undefined
      }, {
        fom: '2022-12-22',
        tom: '2023-01-04',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: 'f41fad23-a318-4ecb-8949-8a8492b65c56',
          eksternArbeidsforholdId: 'ARB001-003',
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 10.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2021,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'MØDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2023-01-05',
        gradertAktivitet: undefined
      }],
      perioderAnnenpart: [{
        fom: '2022-10-20',
        tom: '2022-11-09',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FORELDREPENGER_FØR_FØDSEL,
          prosentArbeid: 0,
          arbeidsforholdId: 'a94992b7-e454-458c-800c-a74b4f072c00',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2006,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER_FØR_FØDSEL',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2023-01-05',
        gradertAktivitet: undefined
      }, {
        fom: '2022-11-10',
        tom: '2022-12-21',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.UDEFINERT,
          prosentArbeid: 0,
          arbeidsforholdId: 'a94992b7-e454-458c-800c-a74b4f072c00',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: 0,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 0.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2027,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: '-',
        utsettelseType: UttakUtsettelseType.SYKDOM_SKADE,
        oppholdÅrsak: '-',
        mottattDato: '2023-01-05',
        gradertAktivitet: undefined
      }],
      årsakFilter: {
        kreverSammenhengendeUttakTom: '2021-09-30',
        utenMinsterett: false,
        søkerErMor: false
      },
      endringsdato: '2022-11-10'
    }
  }
}`,...(Kl=(Ll=Yt.parameters)==null?void 0:Ll.docs)==null?void 0:Kl.source}}};var Cl,Gl,Hl;Wt.parameters={...Wt.parameters,docs:{...(Cl=Wt.parameters)==null?void 0:Cl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: åpentAksjonspunkt,
    uttakStonadskontoer: uttakStønadskontoerForUgyldigForbrukt,
    oppdaterStønadskontoer: v => {
      action('button-click')(v);
      return Promise.resolve(uttakStønadskontoerForUgyldigForbrukt);
    },
    uttaksresultat: {
      perioderSøker: [{
        fom: '2022-10-20',
        tom: '2022-11-09',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: undefined,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15.0
        }],
        periodeResultatType: 'MANUELL_BEHANDLING',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_4002,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.ÅRSAK_5002,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2023-01-05',
        gradertAktivitet: undefined
      }],
      perioderAnnenpart: [],
      årsakFilter: {
        kreverSammenhengendeUttakTom: '2021-09-30',
        utenMinsterett: false,
        søkerErMor: true
      },
      endringsdato: '2022-10-20'
    }
  }
}`,...(Hl=(Gl=Wt.parameters)==null?void 0:Gl.docs)==null?void 0:Hl.source}}};var $l,Yl,Wl;zt.parameters={...zt.parameters,docs:{...($l=zt.parameters)==null?void 0:$l.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: åpentAksjonspunkt,
    uttaksresultat: {
      perioderSøker: [{
        fom: '2022-10-20',
        tom: '2022-11-09',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: undefined,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15.0
        }],
        periodeResultatType: 'MANUELL_BEHANDLING',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_4002,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.ÅRSAK_5002,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER',
        utsettelseType: UttakUtsettelseType.ARBEID,
        oppholdÅrsak: '-',
        mottattDato: '2023-01-05',
        gradertAktivitet: undefined
      }],
      perioderAnnenpart: [],
      årsakFilter: {
        kreverSammenhengendeUttakTom: '2021-09-30',
        utenMinsterett: false,
        søkerErMor: true
      },
      endringsdato: '2022-10-20'
    }
  }
}`,...(Wl=(Yl=zt.parameters)==null?void 0:Yl.docs)==null?void 0:Wl.source}}};var zl,Xl,Ql;Xt.parameters={...Xt.parameters,docs:{...(zl=Xt.parameters)==null?void 0:zl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: åpentAksjonspunkt,
    uttaksresultat: {
      perioderSøker: [{
        fom: '2022-10-20',
        tom: '2022-11-09',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.MØDREKVOTE,
          prosentArbeid: 51,
          arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
          eksternArbeidsforholdId: 'ARB001-002',
          arbeidsgiverReferanse: '994884174',
          utbetalingsgrad: 50,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15.0
        }],
        periodeResultatType: 'MANUELL_BEHANDLING',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_4002,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.ÅRSAK_5002,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER',
        utsettelseType: UttakUtsettelseType.ARBEID,
        oppholdÅrsak: '-',
        mottattDato: '2023-01-05',
        gradertAktivitet: undefined
      }],
      perioderAnnenpart: [],
      årsakFilter: {
        kreverSammenhengendeUttakTom: '2021-09-30',
        utenMinsterett: false,
        søkerErMor: true
      },
      endringsdato: '2022-10-20'
    }
  }
}`,...(Ql=(Xl=Xt.parameters)==null?void 0:Xl.docs)==null?void 0:Ql.source}}};var Jl,Zl,ed;Qt.parameters={...Qt.parameters,docs:{...(Jl=Qt.parameters)==null?void 0:Jl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: åpentAksjonspunkt,
    uttaksresultat: {
      perioderSøker: [{
        fom: '2023-02-15',
        tom: '2023-05-05',
        aktiviteter: [],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.UDEFINERT,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: '-',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: 'UTTAK_FEDREKVOTE_ANNEN_FORELDER',
        mottattDato: '2023-01-18',
        gradertAktivitet: undefined
      }],
      perioderAnnenpart: [{
        fom: '2023-02-03',
        tom: '2023-02-14',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: undefined,
          eksternArbeidsforholdId: undefined,
          arbeidsgiverReferanse: '886998562',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 8.0
        }, {
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: undefined,
          eksternArbeidsforholdId: undefined,
          arbeidsgiverReferanse: '987195428',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 8.0
        }, {
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: undefined,
          eksternArbeidsforholdId: undefined,
          arbeidsgiverReferanse: '972315575',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 8.0
        }],
        periodeResultatType: 'INNVILGET',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_2003,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FEDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2022-11-28',
        gradertAktivitet: undefined
      }, {
        fom: '2023-05-16',
        tom: '2023-05-17',
        aktiviteter: [{
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: undefined,
          eksternArbeidsforholdId: undefined,
          arbeidsgiverReferanse: '987195428',
          utbetalingsgrad: 0,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 0.0
        }, {
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: undefined,
          eksternArbeidsforholdId: undefined,
          arbeidsgiverReferanse: '886998562',
          utbetalingsgrad: 0,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 0.0
        }, {
          stønadskontoType: StonadskontoType.FEDREKVOTE,
          prosentArbeid: 0,
          arbeidsforholdId: undefined,
          eksternArbeidsforholdId: undefined,
          arbeidsgiverReferanse: '972315575',
          utbetalingsgrad: 0,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 0.0
        }],
        periodeResultatType: 'AVSLÅTT',
        begrunnelse: undefined,
        periodeResultatÅrsak: PeriodeResultatÅrsak.ÅRSAK_4084,
        manuellBehandlingÅrsak: ManuellBehandlingÅrsak.UDEFINERT,
        graderingAvslagÅrsak: GraderingAvslagÅrsak.UDEFINERT,
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: undefined,
        graderingInnvilget: false,
        periodeType: 'FEDREKVOTE',
        utsettelseType: UttakUtsettelseType.UDEFINERT,
        oppholdÅrsak: '-',
        mottattDato: '2022-11-28',
        gradertAktivitet: undefined
      }],
      årsakFilter: {
        kreverSammenhengendeUttakTom: '2021-09-30',
        utenMinsterett: true,
        søkerErMor: true
      },
      endringsdato: '2023-02-03'
    }
  }
}`,...(ed=(Zl=Qt.parameters)==null?void 0:Zl.docs)==null?void 0:ed.source}}};const Fw=["AksjonspunktDerValgtStønadskontoIkkeFinnes","PeriodeMedGraderingUtenAksjonspunkt","AksjonspunktIRevurdering","ProsessUttakToParter","AksjonspunktForFar","StønadskontoMedUgyldigForbruk","VisAdvarselNårProsentIArbeidTotaltErMindreEnn100Prosent","VisAdvarselNårUtbetalingsgradOgProsentArbeidOverstiger100Prosent","VisOppholdsperiode"];export{Ct as AksjonspunktDerValgtStønadskontoIkkeFinnes,Yt as AksjonspunktForFar,Ht as AksjonspunktIRevurdering,Gt as PeriodeMedGraderingUtenAksjonspunkt,$t as ProsessUttakToParter,Wt as StønadskontoMedUgyldigForbruk,zt as VisAdvarselNårProsentIArbeidTotaltErMindreEnn100Prosent,Xt as VisAdvarselNårUtbetalingsgradOgProsentArbeidOverstiger100Prosent,Qt as VisOppholdsperiode,Fw as __namedExportsOrder,jw as default};
