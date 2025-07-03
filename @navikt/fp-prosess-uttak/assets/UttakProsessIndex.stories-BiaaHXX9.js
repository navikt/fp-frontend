var om=Object.defineProperty;var lm=(e,t,n)=>t in e?om(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>lm(e,typeof t!="symbol"?t+"":t,n);import{g as od,r as m,u as ar,_ as Hi,s as Yi,c as rt,a as ee,R as f,b as Oa,m as dm,d as _r,S as tt,e as ld,j as R,f as at,h as Un,W as um,o as dd,Q as Ws,i as Fe,P as ur,n as Ut,k as aa,t as On,O as gm,l as mm,p as ud,q as Ss,v as km,w as gd,X as md,x as sa,y as cm,N as fm,B as kd,Y as cd,z as Ds,A as Xa,C as fd,D as pm,E as ym,F as Is,G as vm,H as bm,I as hm}from"./iframe-DJZoG7b2.js";import{r as Tm}from"./index-Do5GuwLl.js";var zs=Tm();const pd=od(zs);function Em(e,t){var n=e.values,r=Hi(e,["values"]),a=t.values,s=Hi(t,["values"]);return Yi(a,n)&&Yi(r,s)}function yd(e){var t=ar(),n=t.formatMessage,r=t.textComponent,a=r===void 0?m.Fragment:r,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,d=e.children,u=e.tagName,g=u===void 0?a:u,k=e.ignoreTag,c={id:s,description:i,defaultMessage:o},p=n(c,l,{ignoreTag:k});return typeof d=="function"?d(Array.isArray(p)?p:[p]):g?m.createElement(g,null,p):m.createElement(m.Fragment,null,p)}yd.displayName="FormattedMessage";var oe=m.memo(yd,Em);oe.displayName="MemoizedFormattedMessage";var Be=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(Be||{}),vd=(e=>(e.MANUELL="MANU",e.AUTOPUNKT="AUTO",e.OVERSTYRING="OVST",e.SAKSBEHANDLEROVERSTYRING="SAOV",e))(vd||{}),Xs=(e=>(e.KVINNE="K",e.MANN="M",e.UDEFINERT="-",e))(Xs||{}),Gn=(e=>(e.INGEN="INGEN",e.UTTAK_MØDREKVOTE_ANNEN_FORELDER="UTTAK_MØDREKVOTE_ANNEN_FORELDER",e.UTTAK_FEDREKVOTE_ANNEN_FORELDER="UTTAK_FEDREKVOTE_ANNEN_FORELDER",e.UTTAK_FELLESP_ANNEN_FORELDER="UTTAK_FELLESP_ANNEN_FORELDER",e.UTTAK_FORELDREPENGER_ANNEN_FORELDER="UTTAK_FORELDREPENGER_ANNEN_FORELDER",e.UDEFINERT="-",e))(Gn||{}),Ze=(e=>(e.INNVILGET="INNVILGET",e.AVSLATT="AVSLÅTT",e.IKKE_FASTSATT="IKKE_FASTSATT",e.GYLDIG_UTSETTELSE="GYLDIG_UTSETTELSE",e.UGYLDIG_UTSETTELSE="UGYLDIG_UTSETTELSE",e.MANUELL_BEHANDLING="MANUELL_BEHANDLING",e))(Ze||{}),bd=(e=>(e.FODSEL="ST-001",e.ADOPSJON="ST-002",e))(bd||{}),Q=(e=>(e.FELLESPERIODE="FELLESPERIODE",e.MØDREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FORELDREPENGER="FORELDREPENGER",e.UTEN_AKTIVITETSKRAV="UTEN_AKTIVITETSKRAV",e.MINSTERETT_NESTE_STØNADSPERIODE="MINSTERETT_NESTE_STØNADSPERIODE",e.MINSTERETT="MINSTERETT",e.FLERBARNSDAGER="FLERBARNSDAGER",e.FORELDREPENGER_FØR_FØDSEL="FORELDREPENGER_FØR_FØDSEL",e.UDEFINERT="-",e))(Q||{}),hd=(e=>(e.ARBEID="ARBEID",e.LOVBESTEMT_FERIE="LOVBESTEMT_FERIE",e.SYKDOM="SYKDOM",e.INSTITUSJONSOPPHOLD_SØKER="INSTITUSJONSOPPHOLD_SØKER",e.INSTITUSJONSOPPHOLD_BARNET="INSTITUSJONSOPPHOLD_BARNET",e.HV_OVELSE="HV_OVELSE",e.NAV_TILTAK="NAV_TILTAK",e.UDEFINERT="-",e))(hd||{}),Sa=(e=>(e.ORDINÆRT_ARBEID="ORDINÆRT_ARBEID",e.FRILANS="FRILANS",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.ANNET="ANNET",e))(Sa||{}),en=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(en||{}),be=(e=>(e.STØNADSKONTO_TOM_FOR_STØNADSDAGER="5001",e.ÅRSAK_5002="5002",e.ÅRSAK_5010="5010",e.UDEFINERT="-",e))(be||{}),Ee=(e=>(e.SYKDOM_SKADE="SYKDOM_SKADE",e.ARBEID="ARBEID",e.UDEFINERT="-",e))(Ee||{}),Re=(e=>(e.SØKERS_SYKDOM_IKKE_OPPFYLT="4038",e.ÅRSAK_4103="4103",e.ÅRSAK_4082="4082",e.ÅRSAK_4084="4084",e.ÅRSAK_4002="4002",e.ÅRSAK_2002="2002",e.ÅRSAK_2003="2003",e.ÅRSAK_2006="2006",e.ÅRSAK_2011="2011",e.ÅRSAK_2021="2021",e.ÅRSAK_2027="2027",e.ÅRSAK_2031="2031",e.UDEFINERT="-",e))(Re||{}),Ae=(e=>(e.ARBEID_100_ELLER_MER="4523",e.ÅRSAK_4501="4501",e.UDEFINERT="-",e))(Ae||{});const st=e=>rt({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Rm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Td=m.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=Rm(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=ee();return f.createElement(a,Object.assign({},g,{ref:t,className:k(n,"navds-body-long",`navds-body-long--${r}`,st({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var Am=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const qe=m.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=Am(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=ee();return f.createElement(a,Object.assign({},g,{ref:t,className:k(n,"navds-body-short",`navds-body-short--${r}`,st({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var wm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const nr=m.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:d,visuallyHidden:u,textColor:g}=e,k=wm(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=ee();return f.createElement(i,Object.assign({},k,{ref:t,className:c(n,"navds-detail",st({spacing:a,truncate:o,weight:l,align:d,visuallyHidden:u,textColor:g,uppercase:s}),{"navds-detail--small":r==="small"})}))});var Om=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const it=m.forwardRef((e,t)=>{var{children:n,className:r,size:a,spacing:s,as:i="p",showIcon:o=!1}=e,l=Om(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=ee();return f.createElement(i,Object.assign({},l,{ref:t,className:d("navds-error-message","navds-label",r,st({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&f.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),n)});var Sm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Qs=m.forwardRef((e,t)=>{var{level:n="1",size:r,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:d}=e,u=Sm(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=ee(),k=s??`h${n}`;return f.createElement(k,Object.assign({},u,{ref:t,className:g(a,"navds-heading",`navds-heading--${r}`,st({spacing:i,align:o,visuallyHidden:l,textColor:d}))}))});var Dm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};m.forwardRef((e,t)=>{var{className:n,spacing:r,as:a="p"}=e,s=Dm(e,["className","spacing","as"]);const{cn:i}=ee();return f.createElement(a,Object.assign({},s,{ref:t,className:i(n,"navds-ingress",{"navds-typo--spacing":!!r})}))});var Im=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const qn=m.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Im(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=ee();return f.createElement(a,Object.assign({},l,{ref:t,className:d(n,"navds-label",st({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":r==="small"})}))});function Ed(e,t=166,n=!1){let r;function a(...s){const i=()=>{r=void 0,e.apply(this,s)};!r&&n&&i(),clearTimeout(r),r=setTimeout(i,t)}return a.clear=()=>{clearTimeout(r)},a}function Ke(e,t){const n=Object.entries(e).filter(([r])=>!t.includes(r));return Object.fromEntries(n)}const Qr=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{};let $i=0;function qm(e){const[t,n]=m.useState(e),r=e||t;return m.useEffect(()=>{t==null&&($i+=1,n(`aksel-id-${$i}`))},[t]),r}const Wi=f.useId;function _n(e){var t;if(Wi!==void 0){const n=Wi();return e??n.replace(/(:)/g,"")}return(t=qm(e))!==null&&t!==void 0?t:""}function wt(e,t=[]){const n=m.useRef(e);return m.useEffect(()=>{n.current=e}),m.useCallback((...r)=>{var a;return(a=n.current)===null||a===void 0?void 0:a.call(n,...r)},t)}function ia({value:e,defaultValue:t,onChange:n}){const r=wt(n),[a,s]=m.useState(t),i=e!==void 0,o=i?e:a,l=wt(d=>{const g=typeof d=="function"?d(o):d;i||s(g),r(g)},[i,r,o]);return[o,l]}let zi=0;function _m(e){const[t,n]=m.useState(e),r=e||t;return m.useEffect(()=>{t==null&&(zi+=1,n(`aksel-icon-${zi}`))},[t]),r}const Xi=f.useId;function _e(e){var t;return Xi!==void 0?Xi().replace(/(:)/g,""):(t=_m(e))!==null&&t!==void 0?t:""}var Nm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Zs=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Nm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var Pm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Js=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Pm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var jm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Fm=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=jm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var xm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Mm=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=xm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Um=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bm=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Um(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Vm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Rd=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Vm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Lm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Km=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Lm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.545 2.404a.75.75 0 0 1 .505-.152l.05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596M12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}))});var Cm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gm=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Cm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Hm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ym=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Hm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.55 3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.8 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m3.5 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v7.106a.75.75 0 0 1-.75.75H14.8V21a.75.75 0 0 1-1.5 0v-4.894a.75.75 0 0 1 .75-.75h1.25V9.75h-1.25A.75.75 0 0 1 13.3 9m-2.78.916a.25.25 0 0 1 .235-.166h.295a.75.75 0 0 0 0-1.5h-.295c-.74 0-1.4.465-1.648 1.161l-2.263 6.337a.75.75 0 0 0 .706 1.002h2.75V21a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75H8.614z",clipRule:"evenodd"}))});var $m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Wm=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=$m(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.557 9.411a1.75 1.75 0 0 1 1.648-1.161h3.59c.74 0 1.4.465 1.648 1.161l2.263 6.337A.75.75 0 0 1 17 16.75h-2.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H7a.75.75 0 0 1-.706-1.002z",clipRule:"evenodd"}))});var zm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Xm=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=zm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Qm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Zm=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Qm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var Jm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ek=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Jm(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var nk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const rk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=nk(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.75 12a.75.75 0 0 1 .75-.75h13a.75.75 0 1 1 0 1.5h-13a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var tk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ad=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=tk(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var ak=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const sk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=ak(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 6.25a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75zm.75 10v-8.5h1.5v8.5zm6.25-10a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75zm.75 10v-8.5h1.5v8.5z",clipRule:"evenodd"}))});var ik=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ok=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=ik(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var lk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const dk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=lk(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M12 15.75A5.25 5.25 0 0 0 6.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 7.875-6.656.75.75 0 0 1-.25 1.48A5 5 0 0 0 12 15.75m8.53-.28a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06m-2 1.06a.664.664 0 0 1 .94.94l-2.34 2.339-1.174.235.235-1.174z",clipRule:"evenodd"}))});var uk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const gk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=uk(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var mk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const kk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=mk(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1 7.5c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-1.5 0v-8c0-1.013-1.088-2.25-2.75-2.25S9.25 11.987 9.25 13v1.75H8.5c-.793 0-1.32.287-1.664.719-.364.454-.586 1.145-.586 2.031s.222 1.577.586 2.032c.345.431.871.718 1.664.718a.75.75 0 0 1 0 1.5c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968s.278-2.173.914-2.969c.513-.64 1.222-1.064 2.086-1.217zm2.634 3.116a1.25 1.25 0 0 0-1.768 1.768l1.884 1.884 1.884-1.884a1.25 1.25 0 0 0-1.768-1.768l-.116.116z",clipRule:"evenodd"}))});var ck=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const fk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=ck(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",d:"M12.75 5.5a.75.75 0 0 0-1.5 0v5.75H5.5a.75.75 0 0 0 0 1.5h5.75v5.75a.75.75 0 0 0 1.5 0v-5.75h5.75a.75.75 0 0 0 0-1.5h-5.75z"}))});var pk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const yk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=pk(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.97 10.085A3.25 3.25 0 1 1 9.1 8.478l1.456.822 6.506-1.952a1.75 1.75 0 0 1 .79-.05l2.771.462a.75.75 0 0 1 .234 1.4l-5.336 2.89 5.326 2.785a.75.75 0 0 1-.224 1.405l-2.77.462a1.75 1.75 0 0 1-.791-.05l-6.46-1.938-1.5.813q.146.462.148.973a3.25 3.25 0 1 1-1.28-2.585 3.25 3.25 0 0 0 0-3.83M4.25 7.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m8.214 6.206 1.467-.795 4.24 2.217-.565.094a.25.25 0 0 1-.113-.007zM7.39 15.438l.018.023a1.75 1.75 0 1 1-.017-.023m2.493-2.04a4.8 4.8 0 0 0 .11-2.363l7.499-2.25a.25.25 0 0 1 .113-.007l.616.103z",clipRule:"evenodd"}))});var vk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const bk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=vk(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1-.75-.75z",clipRule:"evenodd"}))});var hk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Tk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=hk(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var Ek=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Rk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ek(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var Ak=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bt=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ak(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.47 2.97a.75.75 0 0 1 .53-.22c2.018 0 3.74.242 4.95 1.15 1.269.952 1.8 2.486 1.8 4.6V9c0 1.557-.255 2.997-1.015 4.06-.796 1.115-2.05 1.69-3.735 1.69h-6c-1.685 0-2.94-.575-3.735-1.69C5.505 11.998 5.25 10.558 5.25 9V6.5A1.75 1.75 0 0 0 3.5 4.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 6.75 6.5v.75h6.5V3.5a.75.75 0 0 1 .22-.53M14.75 8a.75.75 0 0 1-.75.75H6.75V9c0 1.443.245 2.503.735 3.19.454.635 1.2 1.06 2.515 1.06h6c1.315 0 2.06-.425 2.515-1.06.49-.687.735-1.747.735-3.19v-.5c0-1.886-.469-2.852-1.2-3.4-.685-.514-1.739-.776-3.3-.836zM9.5 17.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6.75 18.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m9.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",clipRule:"evenodd"}))});var wk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ei=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=wk(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Ok=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Sk=m.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ok(e,["title","titleId"]);let s=_e();return s=n?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?m.createElement("title",{id:s},n):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Yr(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}const[Dk,Da]=Oa({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),Ik=typeof window<"u"&&window.matchMedia===void 0,qk=(e,t)=>{const[n,r]=m.useState(t);return m.useEffect(()=>{if(Ik)return;const a=window.matchMedia(e);r(a.matches);const s=i=>{r(i.matches)};return a.addEventListener("change",s),()=>{a.removeEventListener("change",s)}},[e]),n};function In(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function gn(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=n!=null&&n.width?String(n.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[o]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(t):t;return a[s]}}function mn(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(a);if(!s)return null;const i=s[0],o=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?Nk(o,g=>g.test(i)):_k(o,g=>g.test(i));let d;d=e.valueCallback?e.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;const u=t.slice(i.length);return{value:d,rest:u}}}function _k(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Nk(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function ni(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],s=t.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=n.valueCallback?n.valueCallback(i):i;const o=t.slice(a.length);return{value:i,rest:o}}}const wd=6048e5,Pk=864e5,jk=6e4,Fk=36e5,xk=1e3,Qi=Symbol.for("constructDateFrom");function De(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Qi in e?e[Qi](t):e instanceof Date?new e.constructor(t):new Date(t)}function Wn(e,...t){const n=De.bind(null,t.find(r=>typeof r=="object"));return t.map(n)}let Mk={};function Nr(){return Mk}function de(e,t){return De(t||e,e)}function rr(e,t){var o,l,d,u;const n=Nr(),r=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((u=(d=n.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,a=de(e,t==null?void 0:t.in),s=a.getDay(),i=(s<r?7:0)+s-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const Uk={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Od=(e,t,n)=>{let r;const a=Uk[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},Bk={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Sd=(e,t,n,r)=>Bk[e],Vk={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Lk={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Kk={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ck={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Gk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Hk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Yk=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Dd={ordinalNumber:Yk,era:gn({values:Vk,defaultWidth:"wide"}),quarter:gn({values:Lk,defaultWidth:"wide",argumentCallback:e=>e-1}),month:gn({values:Kk,defaultWidth:"wide"}),day:gn({values:Ck,defaultWidth:"wide"}),dayPeriod:gn({values:Gk,defaultWidth:"wide",formattingValues:Hk,defaultFormattingWidth:"wide"})},$k=/^(\d+)(th|st|nd|rd)?/i,Wk=/\d+/i,zk={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Xk={any:[/^b/i,/^(a|c)/i]},Qk={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Zk={any:[/1/i,/2/i,/3/i,/4/i]},Jk={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ec={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},nc={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},rc={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},tc={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ac={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Id={ordinalNumber:ni({matchPattern:$k,parsePattern:Wk,valueCallback:e=>parseInt(e,10)}),era:mn({matchPatterns:zk,defaultMatchWidth:"wide",parsePatterns:Xk,defaultParseWidth:"any"}),quarter:mn({matchPatterns:Qk,defaultMatchWidth:"wide",parsePatterns:Zk,defaultParseWidth:"any",valueCallback:e=>e+1}),month:mn({matchPatterns:Jk,defaultMatchWidth:"wide",parsePatterns:ec,defaultParseWidth:"any"}),day:mn({matchPatterns:nc,defaultMatchWidth:"wide",parsePatterns:rc,defaultParseWidth:"any"}),dayPeriod:mn({matchPatterns:tc,defaultMatchWidth:"any",parsePatterns:ac,defaultParseWidth:"any"})},sc={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},ic={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},oc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},lc={date:In({formats:sc,defaultWidth:"full"}),time:In({formats:ic,defaultWidth:"full"}),dateTime:In({formats:oc,defaultWidth:"full"})},qd={code:"en-GB",formatDistance:Od,formatLong:lc,formatRelative:Sd,localize:Dd,match:Id,options:{weekStartsOn:1,firstWeekContainsDate:4}},dc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},uc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},gc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},mc={date:In({formats:dc,defaultWidth:"full"}),time:In({formats:uc,defaultWidth:"full"}),dateTime:In({formats:gc,defaultWidth:"full"})},Ia={code:"en-US",formatDistance:Od,formatLong:mc,formatRelative:Sd,localize:Dd,match:Id,options:{weekStartsOn:0,firstWeekContainsDate:1}},kc={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},cc=(e,t,n)=>{let r;const a=kc[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+r:r+" siden":r},fc={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},pc={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},yc={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},vc={date:In({formats:fc,defaultWidth:"full"}),time:In({formats:pc,defaultWidth:"full"}),dateTime:In({formats:yc,defaultWidth:"full"})},bc={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},hc=(e,t,n,r)=>bc[e],Tc={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Ec={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Rc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Ac={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},wc={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Oc=(e,t)=>Number(e)+".",Sc={ordinalNumber:Oc,era:gn({values:Tc,defaultWidth:"wide"}),quarter:gn({values:Ec,defaultWidth:"wide",argumentCallback:e=>e-1}),month:gn({values:Rc,defaultWidth:"wide"}),day:gn({values:Ac,defaultWidth:"wide"}),dayPeriod:gn({values:wc,defaultWidth:"wide"})},Dc=/^(\d+)\.?/i,Ic=/\d+/i,qc={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},_c={any:[/^f/i,/^e/i]},Nc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Pc={any:[/1/i,/2/i,/3/i,/4/i]},jc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Fc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},xc={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Mc={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Uc={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Bc={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Vc={ordinalNumber:ni({matchPattern:Dc,parsePattern:Ic,valueCallback:e=>parseInt(e,10)}),era:mn({matchPatterns:qc,defaultMatchWidth:"wide",parsePatterns:_c,defaultParseWidth:"any"}),quarter:mn({matchPatterns:Nc,defaultMatchWidth:"wide",parsePatterns:Pc,defaultParseWidth:"any",valueCallback:e=>e+1}),month:mn({matchPatterns:jc,defaultMatchWidth:"wide",parsePatterns:Fc,defaultParseWidth:"any"}),day:mn({matchPatterns:xc,defaultMatchWidth:"wide",parsePatterns:Mc,defaultParseWidth:"any"}),dayPeriod:mn({matchPatterns:Uc,defaultMatchWidth:"any",parsePatterns:Bc,defaultParseWidth:"any"})},_d={code:"nb",formatDistance:cc,formatLong:vc,formatRelative:hc,localize:Sc,match:Vc,options:{weekStartsOn:1,firstWeekContainsDate:4}},Lc={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},Kc=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Cc=(e,t,n)=>{let r;const a=Lc[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t<13?Kc[t]:String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+r:r+" sidan":r},Gc={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Hc={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Yc={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},$c={date:In({formats:Gc,defaultWidth:"full"}),time:In({formats:Hc,defaultWidth:"full"}),dateTime:In({formats:Yc,defaultWidth:"full"})},Wc={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},zc=(e,t,n,r)=>Wc[e],Xc={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Qc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Zc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Jc={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},ef={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},nf=(e,t)=>Number(e)+".",rf={ordinalNumber:nf,era:gn({values:Xc,defaultWidth:"wide"}),quarter:gn({values:Qc,defaultWidth:"wide",argumentCallback:e=>e-1}),month:gn({values:Zc,defaultWidth:"wide"}),day:gn({values:Jc,defaultWidth:"wide"}),dayPeriod:gn({values:ef,defaultWidth:"wide"})},tf=/^(\d+)\.?/i,af=/\d+/i,sf={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},of={any:[/^f/i,/^e/i]},lf={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},df={any:[/1/i,/2/i,/3/i,/4/i]},uf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},gf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},mf={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},kf={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},cf={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},ff={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},pf={ordinalNumber:ni({matchPattern:tf,parsePattern:af,valueCallback:e=>parseInt(e,10)}),era:mn({matchPatterns:sf,defaultMatchWidth:"wide",parsePatterns:of,defaultParseWidth:"any"}),quarter:mn({matchPatterns:lf,defaultMatchWidth:"wide",parsePatterns:df,defaultParseWidth:"any",valueCallback:e=>e+1}),month:mn({matchPatterns:uf,defaultMatchWidth:"wide",parsePatterns:gf,defaultParseWidth:"any"}),day:mn({matchPatterns:mf,defaultMatchWidth:"wide",parsePatterns:kf,defaultParseWidth:"any"}),dayPeriod:mn({matchPatterns:cf,defaultMatchWidth:"any",parsePatterns:ff,defaultParseWidth:"any"})},Nd={code:"nn",formatDistance:Cc,formatLong:$c,formatRelative:zc,localize:rf,match:pf,options:{weekStartsOn:1,firstWeekContainsDate:4}},yf={global:{dateLocale:_d,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},vf=m.createContext({locale:yf}),ri=()=>m.useContext(vf);function Zi(e){return e.sort((t,n)=>{const r=t.compareDocumentPosition(n);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const bf=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Ji(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function eo(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}const Qa=e=>e;class hf{constructor(){this.descendants=new Map,this.register=t=>{if(t!=null)return bf(t)?this.registerNode(t):n=>{this.registerNode(n,t)}},this.unregister=t=>{this.descendants.delete(t);const n=Zi(Array.from(this.descendants.keys()));this.assignIndex(n)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=t=>{this.descendants.forEach(n=>{const r=t.indexOf(n.node);n.index=r,n.node.dataset.index=n.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((n,r)=>n.index-r.index),this.enabledValues=()=>this.values().filter(t=>!t.disabled),this.item=t=>{if(this.count()!==0)return this.values()[t]},this.enabledItem=t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)},this.indexOf=t=>{var n,r;return t&&(r=(n=this.descendants.get(t))===null||n===void 0?void 0:n.index)!==null&&r!==void 0?r:-1},this.enabledIndexOf=t=>t==null?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(t)),this.next=(t,n=!0)=>{const r=Ji(t,this.count(),n);return this.item(r)},this.nextEnabled=(t,n=!0)=>{const r=this.item(t);if(!r)return;const a=this.enabledIndexOf(r.node),s=Ji(a,this.enabledCount(),n);return this.enabledItem(s)},this.prev=(t,n=!0)=>{const r=eo(t,this.count()-1,n);return this.item(r)},this.prevEnabled=(t,n=!0)=>{const r=this.item(t);if(!r)return;const a=this.enabledIndexOf(r.node),s=eo(a,this.enabledCount()-1,n);return this.enabledItem(s)},this.registerNode=(t,n)=>{if(!t)return;const r=this.descendants.get(t);if(r){this.descendants.set(t,Object.assign({index:r.index,node:t},n));return}const a=Array.from(this.descendants.keys()).concat(t),s=Zi(a);n!=null&&n.disabled&&(n.disabled=!!n.disabled);const i=Object.assign({node:t,index:-1},n);this.descendants.set(t,i),this.assignIndex(s)}}}function Tf(){const[e,t]=Oa({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),n=Qa(s=>f.createElement(e,Object.assign({},s.value),s.children));function r(s){const i=t(),[o,l]=m.useState(-1),d=m.useRef(null);Qr(()=>()=>{d.current&&i.unregister(d.current)},[]),Qr(()=>{if(!d.current)return;const g=Number(d.current.dataset.index);o!==g&&!Number.isNaN(g)&&l(g)});const u=Qa(s?i.register(s):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(d.current),register:dm([u,d])}}function a(){return m.useRef(new hf).current}return[n,t,a,r]}function Ef(e,t=globalThis==null?void 0:globalThis.document){const n=wt(e);m.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,!0),()=>t.removeEventListener("keydown",r,!0)},[n,t])}const Pd={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function jd(e,t,n,{discrete:r}={discrete:!1}){if(!t)return;const a=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});a.addEventListener(e,t,{once:!0}),r&&a?pd.flushSync(()=>a.dispatchEvent(s)):a.dispatchEvent(s)}function Rf(e,t=globalThis==null?void 0:globalThis.document){const n=wt(e),r=m.useRef(!1);return m.useEffect(()=>{const a=s=>{if(s.target&&!r.current){const i={originalEvent:s};jd(Pd.FOCUS_OUTSIDE,n,i)}};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>{r.current=!0},onBlurCapture:()=>{r.current=!1}}}function Af(e,t=globalThis==null?void 0:globalThis.document){const n=wt(e),r=m.useRef(!1),a=m.useRef(()=>{});return m.useEffect(()=>{const s=o=>{function l(){jd(Pd.POINTER_DOWN_OUTSIDE,n,{originalEvent:o},{discrete:!0})}o.target&&!r.current?o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=l,t.addEventListener("click",a.current,{once:!0})):l():t.removeEventListener("click",a.current),r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",s),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>{r.current=!0}}}var wf=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const[Of,Sf,Df,If]=Tf();let Ur=0,no;const qf=m.forwardRef((e,t)=>Sf(!1)?f.createElement(ro,Object.assign({ref:t},e)):f.createElement(_f,null,f.createElement(ro,Object.assign({ref:t},e)))),_f=({children:e})=>{const t=Df();return f.createElement(Of,{value:t},e)},ro=m.forwardRef((e,t)=>{var n,{children:r,asChild:a,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:l,onDismiss:d,safeZone:u,disableOutsidePointerEvents:g=!1,enabled:k=!0}=e,c=wf(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,p]=m.useState({}),{register:v,index:y,descendants:T}=If({disableOutsidePointerEvents:g,disabled:!k,forceUpdate:()=>p({})}),[h,b]=m.useState(null),w=_r(b,v,t),E=(n=h==null?void 0:h.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,D=m.useRef(!1),O=m.useRef(!1),I=(()=>{let S=-1;return T.enabledValues().forEach((F,L)=>{F.disableOutsidePointerEvents&&(S=L)}),{isPointerEventsEnabled:y>=S,isBodyPointerEventsDisabled:Ur>0,pointerStyle:y>=S&&Ur>0?"auto":void 0}})();function _(S){var N,F;if(!(u!=null&&u.anchor)&&!(u!=null&&u.dismissable)||!k)return;S.defaultPrevented||(D.current=!0,S.detail.originalEvent.type==="pointerdown"&&(O.current=!0));const L=S.target;S.detail.originalEvent.type==="pointerdown"?(!((N=u==null?void 0:u.anchor)===null||N===void 0)&&N.contains(L)||L===(u==null?void 0:u.anchor))&&S.preventDefault():!(L instanceof HTMLElement&&![u==null?void 0:u.anchor,u==null?void 0:u.dismissable].some(U=>U==null?void 0:U.contains(L))&&!L.contains((F=u==null?void 0:u.dismissable)!==null&&F!==void 0?F:null))&&S.preventDefault(),S.detail.originalEvent.type==="focusin"&&O.current&&S.preventDefault(),O.current=!1,D.current=!1}const x=Af(S=>{!I.isPointerEventsEnabled||!k||(i==null||i(S),l==null||l(S),u&&_(S),!S.defaultPrevented&&d&&d())},E),P=Rf(S=>{k&&(o==null||o(S),l==null||l(S),u&&_(S),!S.defaultPrevented&&d&&d())},E);Ef(S=>{!k||!(y===T.enabledCount()-1)||(s==null||s(S),!S.defaultPrevented&&d&&(S.preventDefault(),d()))},E),m.useEffect(()=>{if(!(!h||!k||!g))return Ur===0&&(no=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),Ur++,()=>{Ur===1&&(E.body.style.pointerEvents=no),Ur--}},[h,E,g,T,k]),m.useEffect(()=>()=>T.values().forEach(S=>S.forceUpdate()),[T,h]);const q=a?tt:"div";return f.createElement(q,Object.assign({ref:w},c,{onFocusCapture:P.onFocusCapture,onBlurCapture:P.onBlurCapture,onPointerDownCapture:x.onPointerDownCapture,style:Object.assign({pointerEvents:I.pointerStyle},c.style)}),r)}),Zr=Math.min,Rr=Math.max,oa=Math.round,Vt=Math.floor,$n=e=>({x:e,y:e}),Nf={left:"right",right:"left",bottom:"top",top:"bottom"},Pf={start:"end",end:"start"};function qs(e,t,n){return Rr(e,Zr(t,n))}function St(e,t){return typeof e=="function"?e(t):e}function Ar(e){return e.split("-")[0]}function Dt(e){return e.split("-")[1]}function Fd(e){return e==="x"?"y":"x"}function ti(e){return e==="y"?"height":"width"}function Jr(e){return["top","bottom"].includes(Ar(e))?"y":"x"}function ai(e){return Fd(Jr(e))}function jf(e,t,n){n===void 0&&(n=!1);const r=Dt(e),a=ai(e),s=ti(a);let i=a==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=la(i)),[i,la(i)]}function Ff(e){const t=la(e);return[_s(e),t,_s(t)]}function _s(e){return e.replace(/start|end/g,t=>Pf[t])}function xf(e,t,n){const r=["left","right"],a=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return n?t?a:r:t?r:a;case"left":case"right":return t?s:i;default:return[]}}function Mf(e,t,n,r){const a=Dt(e);let s=xf(Ar(e),n==="start",r);return a&&(s=s.map(i=>i+"-"+a),t&&(s=s.concat(s.map(_s)))),s}function la(e){return e.replace(/left|right|bottom|top/g,t=>Nf[t])}function Uf(e){return{top:0,right:0,bottom:0,left:0,...e}}function xd(e){return typeof e!="number"?Uf(e):{top:e,right:e,bottom:e,left:e}}function da(e){const{x:t,y:n,width:r,height:a}=e;return{width:r,height:a,top:n,left:t,right:t+r,bottom:n+a,x:t,y:n}}function to(e,t,n){let{reference:r,floating:a}=e;const s=Jr(t),i=ai(t),o=ti(i),l=Ar(t),d=s==="y",u=r.x+r.width/2-a.width/2,g=r.y+r.height/2-a.height/2,k=r[o]/2-a[o]/2;let c;switch(l){case"top":c={x:u,y:r.y-a.height};break;case"bottom":c={x:u,y:r.y+r.height};break;case"right":c={x:r.x+r.width,y:g};break;case"left":c={x:r.x-a.width,y:g};break;default:c={x:r.x,y:r.y}}switch(Dt(t)){case"start":c[i]-=k*(n&&d?-1:1);break;case"end":c[i]+=k*(n&&d?-1:1);break}return c}const Bf=async(e,t,n)=>{const{placement:r="bottom",strategy:a="absolute",middleware:s=[],platform:i}=n,o=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let d=await i.getElementRects({reference:e,floating:t,strategy:a}),{x:u,y:g}=to(d,r,l),k=r,c={},p=0;for(let v=0;v<o.length;v++){const{name:y,fn:T}=o[v],{x:h,y:b,data:w,reset:E}=await T({x:u,y:g,initialPlacement:r,placement:k,strategy:a,middlewareData:c,rects:d,platform:i,elements:{reference:e,floating:t}});u=h??u,g=b??g,c={...c,[y]:{...c[y],...w}},E&&p<=50&&(p++,typeof E=="object"&&(E.placement&&(k=E.placement),E.rects&&(d=E.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:a}):E.rects),{x:u,y:g}=to(d,k,l)),v=-1)}return{x:u,y:g,placement:k,strategy:a,middlewareData:c}};async function Md(e,t){var n;t===void 0&&(t={});const{x:r,y:a,platform:s,rects:i,elements:o,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:k=!1,padding:c=0}=St(t,e),p=xd(c),y=o[k?g==="floating"?"reference":"floating":g],T=da(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(y)))==null||n?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(o.floating)),boundary:d,rootBoundary:u,strategy:l})),h=g==="floating"?{x:r,y:a,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(o.floating)),w=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},E=da(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:h,offsetParent:b,strategy:l}):h);return{top:(T.top-E.top+p.top)/w.y,bottom:(E.bottom-T.bottom+p.bottom)/w.y,left:(T.left-E.left+p.left)/w.x,right:(E.right-T.right+p.right)/w.x}}const Vf=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:a,rects:s,platform:i,elements:o,middlewareData:l}=t,{element:d,padding:u=0}=St(e,t)||{};if(d==null)return{};const g=xd(u),k={x:n,y:r},c=ai(a),p=ti(c),v=await i.getDimensions(d),y=c==="y",T=y?"top":"left",h=y?"bottom":"right",b=y?"clientHeight":"clientWidth",w=s.reference[p]+s.reference[c]-k[c]-s.floating[p],E=k[c]-s.reference[c],D=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let O=D?D[b]:0;(!O||!await(i.isElement==null?void 0:i.isElement(D)))&&(O=o.floating[b]||s.floating[p]);const I=w/2-E/2,_=O/2-v[p]/2-1,x=Zr(g[T],_),P=Zr(g[h],_),q=x,S=O-v[p]-P,N=O/2-v[p]/2+I,F=qs(q,N,S),L=!l.arrow&&Dt(a)!=null&&N!==F&&s.reference[p]/2-(N<q?x:P)-v[p]/2<0,V=L?N<q?N-q:N-S:0;return{[c]:k[c]+V,data:{[c]:F,centerOffset:N-F-V,...L&&{alignmentOffset:V}},reset:L}}}),Lf=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:a,middlewareData:s,rects:i,initialPlacement:o,platform:l,elements:d}=t,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:k,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:v=!0,...y}=St(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const T=Ar(a),h=Jr(o),b=Ar(o)===o,w=await(l.isRTL==null?void 0:l.isRTL(d.floating)),E=k||(b||!v?[la(o)]:Ff(o)),D=p!=="none";!k&&D&&E.push(...Mf(o,v,p,w));const O=[o,...E],I=await Md(t,y),_=[];let x=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&_.push(I[T]),g){const N=jf(a,i,w);_.push(I[N[0]],I[N[1]])}if(x=[...x,{placement:a,overflows:_}],!_.every(N=>N<=0)){var P,q;const N=(((P=s.flip)==null?void 0:P.index)||0)+1,F=O[N];if(F)return{data:{index:N,overflows:x},reset:{placement:F}};let L=(q=x.filter(V=>V.overflows[0]<=0).sort((V,U)=>V.overflows[1]-U.overflows[1])[0])==null?void 0:q.placement;if(!L)switch(c){case"bestFit":{var S;const V=(S=x.filter(U=>{if(D){const M=Jr(U.placement);return M===h||M==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(M=>M>0).reduce((M,Y)=>M+Y,0)]).sort((U,M)=>U[1]-M[1])[0])==null?void 0:S[0];V&&(L=V);break}case"initialPlacement":L=o;break}if(a!==L)return{reset:{placement:L}}}return{}}}};async function Kf(e,t){const{placement:n,platform:r,elements:a}=e,s=await(r.isRTL==null?void 0:r.isRTL(a.floating)),i=Ar(n),o=Dt(n),l=Jr(n)==="y",d=["left","top"].includes(i)?-1:1,u=s&&l?-1:1,g=St(t,e);let{mainAxis:k,crossAxis:c,alignmentAxis:p}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return o&&typeof p=="number"&&(c=o==="end"?p*-1:p),l?{x:c*u,y:k*d}:{x:k*d,y:c*u}}const Cf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:a,y:s,placement:i,middlewareData:o}=t,l=await Kf(t,e);return i===((n=o.offset)==null?void 0:n.placement)&&(r=o.arrow)!=null&&r.alignmentOffset?{}:{x:a+l.x,y:s+l.y,data:{...l,placement:i}}}}},Gf=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:a}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:o={fn:y=>{let{x:T,y:h}=y;return{x:T,y:h}}},...l}=St(e,t),d={x:n,y:r},u=await Md(t,l),g=Jr(Ar(a)),k=Fd(g);let c=d[k],p=d[g];if(s){const y=k==="y"?"top":"left",T=k==="y"?"bottom":"right",h=c+u[y],b=c-u[T];c=qs(h,c,b)}if(i){const y=g==="y"?"top":"left",T=g==="y"?"bottom":"right",h=p+u[y],b=p-u[T];p=qs(h,p,b)}const v=o.fn({...t,[k]:c,[g]:p});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[k]:s,[g]:i}}}}}};function qa(){return typeof window<"u"}function vr(e){return Ud(e)?(e.nodeName||"").toLowerCase():"#document"}function vn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function zn(e){var t;return(t=(Ud(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ud(e){return qa()?e instanceof Node||e instanceof vn(e).Node:!1}function Ne(e){return qa()?e instanceof Element||e instanceof vn(e).Element:!1}function Qe(e){return qa()?e instanceof HTMLElement||e instanceof vn(e).HTMLElement:!1}function ua(e){return!qa()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof vn(e).ShadowRoot}function It(e){const{overflow:t,overflowX:n,overflowY:r,display:a}=Nn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(a)}function Hf(e){return["table","td","th"].includes(vr(e))}function _a(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function si(e){const t=Na(),n=Ne(e)?Nn(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Yf(e){let t=tr(e);for(;Qe(t)&&!er(t);){if(si(t))return t;if(_a(t))return null;t=tr(t)}return null}function Na(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function er(e){return["html","body","#document"].includes(vr(e))}function Nn(e){return vn(e).getComputedStyle(e)}function Pa(e){return Ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function tr(e){if(vr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ua(e)&&e.host||zn(e);return ua(t)?t.host:t}function Bd(e){const t=tr(e);return er(t)?e.ownerDocument?e.ownerDocument.body:e.body:Qe(t)&&It(t)?t:Bd(t)}function pr(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const a=Bd(e),s=a===((r=e.ownerDocument)==null?void 0:r.body),i=vn(a);if(s){const o=Ns(i);return t.concat(i,i.visualViewport||[],It(a)?a:[],o&&n?pr(o):[])}return t.concat(a,pr(a,[],n))}function Ns(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Vd(e){const t=Nn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const a=Qe(e),s=a?e.offsetWidth:n,i=a?e.offsetHeight:r,o=oa(n)!==s||oa(r)!==i;return o&&(n=s,r=i),{width:n,height:r,$:o}}function ii(e){return Ne(e)?e:e.contextElement}function $r(e){const t=ii(e);if(!Qe(t))return $n(1);const n=t.getBoundingClientRect(),{width:r,height:a,$:s}=Vd(t);let i=(s?oa(n.width):n.width)/r,o=(s?oa(n.height):n.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const $f=$n(0);function Ld(e){const t=vn(e);return!Na()||!t.visualViewport?$f:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wf(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==vn(e)?!1:t}function wr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect(),s=ii(e);let i=$n(1);t&&(r?Ne(r)&&(i=$r(r)):i=$r(e));const o=Wf(s,n,r)?Ld(s):$n(0);let l=(a.left+o.x)/i.x,d=(a.top+o.y)/i.y,u=a.width/i.x,g=a.height/i.y;if(s){const k=vn(s),c=r&&Ne(r)?vn(r):r;let p=k,v=Ns(p);for(;v&&r&&c!==p;){const y=$r(v),T=v.getBoundingClientRect(),h=Nn(v),b=T.left+(v.clientLeft+parseFloat(h.paddingLeft))*y.x,w=T.top+(v.clientTop+parseFloat(h.paddingTop))*y.y;l*=y.x,d*=y.y,u*=y.x,g*=y.y,l+=b,d+=w,p=vn(v),v=Ns(p)}}return da({width:u,height:g,x:l,y:d})}function oi(e,t){const n=Pa(e).scrollLeft;return t?t.left+n:wr(zn(e)).left+n}function Kd(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),a=r.left+t.scrollLeft-(n?0:oi(e,r)),s=r.top+t.scrollTop;return{x:a,y:s}}function zf(e){let{elements:t,rect:n,offsetParent:r,strategy:a}=e;const s=a==="fixed",i=zn(r),o=t?_a(t.floating):!1;if(r===i||o&&s)return n;let l={scrollLeft:0,scrollTop:0},d=$n(1);const u=$n(0),g=Qe(r);if((g||!g&&!s)&&((vr(r)!=="body"||It(i))&&(l=Pa(r)),Qe(r))){const c=wr(r);d=$r(r),u.x=c.x+r.clientLeft,u.y=c.y+r.clientTop}const k=i&&!g&&!s?Kd(i,l,!0):$n(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-l.scrollLeft*d.x+u.x+k.x,y:n.y*d.y-l.scrollTop*d.y+u.y+k.y}}function Xf(e){return Array.from(e.getClientRects())}function Qf(e){const t=zn(e),n=Pa(e),r=e.ownerDocument.body,a=Rr(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Rr(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let i=-n.scrollLeft+oi(e);const o=-n.scrollTop;return Nn(r).direction==="rtl"&&(i+=Rr(t.clientWidth,r.clientWidth)-a),{width:a,height:s,x:i,y:o}}function Zf(e,t){const n=vn(e),r=zn(e),a=n.visualViewport;let s=r.clientWidth,i=r.clientHeight,o=0,l=0;if(a){s=a.width,i=a.height;const d=Na();(!d||d&&t==="fixed")&&(o=a.offsetLeft,l=a.offsetTop)}return{width:s,height:i,x:o,y:l}}function Jf(e,t){const n=wr(e,!0,t==="fixed"),r=n.top+e.clientTop,a=n.left+e.clientLeft,s=Qe(e)?$r(e):$n(1),i=e.clientWidth*s.x,o=e.clientHeight*s.y,l=a*s.x,d=r*s.y;return{width:i,height:o,x:l,y:d}}function ao(e,t,n){let r;if(t==="viewport")r=Zf(e,n);else if(t==="document")r=Qf(zn(e));else if(Ne(t))r=Jf(t,n);else{const a=Ld(e);r={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return da(r)}function Cd(e,t){const n=tr(e);return n===t||!Ne(n)||er(n)?!1:Nn(n).position==="fixed"||Cd(n,t)}function ep(e,t){const n=t.get(e);if(n)return n;let r=pr(e,[],!1).filter(o=>Ne(o)&&vr(o)!=="body"),a=null;const s=Nn(e).position==="fixed";let i=s?tr(e):e;for(;Ne(i)&&!er(i);){const o=Nn(i),l=si(i);!l&&o.position==="fixed"&&(a=null),(s?!l&&!a:!l&&o.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||It(i)&&!l&&Cd(e,i))?r=r.filter(u=>u!==i):a=o,i=tr(i)}return t.set(e,r),r}function np(e){let{element:t,boundary:n,rootBoundary:r,strategy:a}=e;const i=[...n==="clippingAncestors"?_a(t)?[]:ep(t,this._c):[].concat(n),r],o=i[0],l=i.reduce((d,u)=>{const g=ao(t,u,a);return d.top=Rr(g.top,d.top),d.right=Zr(g.right,d.right),d.bottom=Zr(g.bottom,d.bottom),d.left=Rr(g.left,d.left),d},ao(t,o,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function rp(e){const{width:t,height:n}=Vd(e);return{width:t,height:n}}function tp(e,t,n){const r=Qe(t),a=zn(t),s=n==="fixed",i=wr(e,!0,s,t);let o={scrollLeft:0,scrollTop:0};const l=$n(0);if(r||!r&&!s)if((vr(t)!=="body"||It(a))&&(o=Pa(t)),r){const k=wr(t,!0,s,t);l.x=k.x+t.clientLeft,l.y=k.y+t.clientTop}else a&&(l.x=oi(a));const d=a&&!r&&!s?Kd(a,o):$n(0),u=i.left+o.scrollLeft-l.x-d.x,g=i.top+o.scrollTop-l.y-d.y;return{x:u,y:g,width:i.width,height:i.height}}function Za(e){return Nn(e).position==="static"}function so(e,t){if(!Qe(e)||Nn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return zn(e)===n&&(n=n.ownerDocument.body),n}function Gd(e,t){const n=vn(e);if(_a(e))return n;if(!Qe(e)){let a=tr(e);for(;a&&!er(a);){if(Ne(a)&&!Za(a))return a;a=tr(a)}return n}let r=so(e,t);for(;r&&Hf(r)&&Za(r);)r=so(r,t);return r&&er(r)&&Za(r)&&!si(r)?n:r||Yf(e)||n}const ap=async function(e){const t=this.getOffsetParent||Gd,n=this.getDimensions,r=await n(e.floating);return{reference:tp(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function sp(e){return Nn(e).direction==="rtl"}const ip={convertOffsetParentRelativeRectToViewportRelativeRect:zf,getDocumentElement:zn,getClippingRect:np,getOffsetParent:Gd,getElementRects:ap,getClientRects:Xf,getDimensions:rp,getScale:$r,isElement:Ne,isRTL:sp};function Hd(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function op(e,t){let n=null,r;const a=zn(e);function s(){var o;clearTimeout(r),(o=n)==null||o.disconnect(),n=null}function i(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),s();const d=e.getBoundingClientRect(),{left:u,top:g,width:k,height:c}=d;if(o||t(),!k||!c)return;const p=Vt(g),v=Vt(a.clientWidth-(u+k)),y=Vt(a.clientHeight-(g+c)),T=Vt(u),b={rootMargin:-p+"px "+-v+"px "+-y+"px "+-T+"px",threshold:Rr(0,Zr(1,l))||1};let w=!0;function E(D){const O=D[0].intersectionRatio;if(O!==l){if(!w)return i();O?i(!1,O):r=setTimeout(()=>{i(!1,1e-7)},1e3)}O===1&&!Hd(d,e.getBoundingClientRect())&&i(),w=!1}try{n=new IntersectionObserver(E,{...b,root:a.ownerDocument})}catch{n=new IntersectionObserver(E,b)}n.observe(e)}return i(!0),s}function li(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,d=ii(e),u=a||s?[...d?pr(d):[],...pr(t)]:[];u.forEach(T=>{a&&T.addEventListener("scroll",n,{passive:!0}),s&&T.addEventListener("resize",n)});const g=d&&o?op(d,n):null;let k=-1,c=null;i&&(c=new ResizeObserver(T=>{let[h]=T;h&&h.target===d&&c&&(c.unobserve(t),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var b;(b=c)==null||b.observe(t)})),n()}),d&&!l&&c.observe(d),c.observe(t));let p,v=l?wr(e):null;l&&y();function y(){const T=wr(e);v&&!Hd(v,T)&&n(),v=T,p=requestAnimationFrame(y)}return n(),()=>{var T;u.forEach(h=>{a&&h.removeEventListener("scroll",n),s&&h.removeEventListener("resize",n)}),g==null||g(),(T=c)==null||T.disconnect(),c=null,l&&cancelAnimationFrame(p)}}const lp=Cf,dp=Gf,up=Lf,io=Vf,gp=(e,t,n)=>{const r=new Map,a={platform:ip,...n},s={...a.platform,_c:r};return Bf(e,t,{...a,platform:s})};var na=typeof document<"u"?m.useLayoutEffect:m.useEffect;function ga(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!ga(e[r],t[r]))return!1;return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,a[r]))return!1;for(r=n;r--!==0;){const s=a[r];if(!(s==="_owner"&&e.$$typeof)&&!ga(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function Yd(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function oo(e,t){const n=Yd(e);return Math.round(t*n)/n}function Ja(e){const t=m.useRef(e);return na(()=>{t.current=e}),t}function mp(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:a,elements:{reference:s,floating:i}={},transform:o=!0,whileElementsMounted:l,open:d}=e,[u,g]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[k,c]=m.useState(r);ga(k,r)||c(r);const[p,v]=m.useState(null),[y,T]=m.useState(null),h=m.useCallback(U=>{U!==D.current&&(D.current=U,v(U))},[]),b=m.useCallback(U=>{U!==O.current&&(O.current=U,T(U))},[]),w=s||p,E=i||y,D=m.useRef(null),O=m.useRef(null),I=m.useRef(u),_=l!=null,x=Ja(l),P=Ja(a),q=Ja(d),S=m.useCallback(()=>{if(!D.current||!O.current)return;const U={placement:t,strategy:n,middleware:k};P.current&&(U.platform=P.current),gp(D.current,O.current,U).then(M=>{const Y={...M,isPositioned:q.current!==!1};N.current&&!ga(I.current,Y)&&(I.current=Y,zs.flushSync(()=>{g(Y)}))})},[k,t,n,P,q]);na(()=>{d===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,g(U=>({...U,isPositioned:!1})))},[d]);const N=m.useRef(!1);na(()=>(N.current=!0,()=>{N.current=!1}),[]),na(()=>{if(w&&(D.current=w),E&&(O.current=E),w&&E){if(x.current)return x.current(w,E,S);S()}},[w,E,S,x,_]);const F=m.useMemo(()=>({reference:D,floating:O,setReference:h,setFloating:b}),[h,b]),L=m.useMemo(()=>({reference:w,floating:E}),[w,E]),V=m.useMemo(()=>{const U={position:n,left:0,top:0};if(!L.floating)return U;const M=oo(L.floating,u.x),Y=oo(L.floating,u.y);return o?{...U,transform:"translate("+M+"px, "+Y+"px)",...Yd(L.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:M,top:Y}},[n,o,L.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:S,refs:F,elements:L,floatingStyles:V}),[u,S,F,L,V])}const kp=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:a}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?io({element:r.current,padding:a}).fn(n):{}:r?io({element:r,padding:a}).fn(n):{}}}},di=(e,t)=>({...lp(e),options:[e,t]}),ui=(e,t)=>({...dp(e),options:[e,t]}),gi=(e,t)=>({...up(e),options:[e,t]}),mi=(e,t)=>({...kp(e),options:[e,t]}),lo=/(\w+)/g;function cp(e,t){const n=Array.isArray(e)?e:fp(e);for(const r of t){if(!r)continue;let a=r;for(let s=0;s<n.length;s++){const i=a[n[s]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function fp(e){const t=[];let n=lo.exec(e);for(;n;){const[,r,a]=n;t.push(r||a),n=lo.exec(e)}return t}const pp=/{[^}]*}/g;function kn(e,...t){const n=ri(),r=n.translations||[],a=[...t,...Array.isArray(r)?r.map(i=>i[e]):[r[e]],n.locale[e]];return(i,o)=>{const l=cp(i,a);return o?l.replace(pp,d=>{const u=d.substring(1,d.length-1);if(o[u]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${g}'`)}return o[u]}):l}}function ki(){const e=ri(),t=e.translations||[],n=Array.isArray(t)?t.map(r=>r.global):[t.global];n.push(e.locale.global);for(const r of n)if(r!=null&&r.dateLocale)return r.dateLocale;throw new Error("dateLocale not found.")}var yp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const vp=m.forwardRef((e,t)=>{var{className:n,size:r="medium",title:a,transparent:s=!1,variant:i="neutral",id:o,"data-color":l}=e,d=yp(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:u}=ee(),g=_n(),k=kn("Loader");return f.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${g}`,ref:t,className:u("navds-loader",n,`navds-loader--${r}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":l??bp(i)},Ke(d,["children"]),{"data-variant":i}),f.createElement("title",{id:o??`loader-${g}`},a||k("title")),f.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),f.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function bp(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var hp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Xe=m.forwardRef((e,t)=>{var{as:n="button",variant:r="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,icon:d,iconPosition:u="left",onKeyUp:g,"data-color":k}=e,c=hp(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:p}=ee(),v=l||o?Ke(c,["href"]):c,y=T=>{T.key===" "&&!l&&!o&&T.currentTarget.click()};return f.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},{"data-color":k??Tp(r),"data-variant":Ep(r)},v,{ref:t,onKeyUp:Yr(g,y),className:p(a,"navds-button",`navds-button--${r}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),d&&u==="left"&&f.createElement("span",{className:p("navds-button__icon")},d),o&&f.createElement(vp,{size:i}),s&&f.createElement(qn,{as:"span",size:i==="medium"?"medium":"small"},s),d&&u==="right"&&f.createElement("span",{className:p("navds-button__icon")},d))});function Tp(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Ep(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Rp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ap={error:Sk,warning:Gm,info:Xm,success:Bm},ci=m.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:d=!1,onClose:u}=e,g=Rp(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:k}=ee(),c=kn("Alert"),p=Ap[a];return f.createElement("div",Object.assign({},g,{"data-color":wp(a),"data-variant":a,ref:t,className:k(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":d})}),f.createElement(p,{title:c(a),className:k("navds-alert__icon")}),f.createElement(Td,{as:"div",size:s,className:k("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},n),d&&!l&&f.createElement("div",{className:k("navds-alert__button-wrapper")},f.createElement(Xe,{className:k("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:f.createElement(ei,{title:["error","warning"].includes(a)?c("closeAlert"):c("closeMessage")})})))});function wp(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function Pr(e,t,n){const r=de(e,n==null?void 0:n.in);return isNaN(t)?De((n==null?void 0:n.in)||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function et(e,t,n){const r=de(e,n==null?void 0:n.in);if(isNaN(t))return De(e,NaN);if(!t)return r;const a=r.getDate(),s=De(e,r.getTime());s.setMonth(r.getMonth()+t+1,0);const i=s.getDate();return a>=i?s:(r.setFullYear(s.getFullYear(),s.getMonth(),a),r)}function ma(e,t){const n=de(e,t==null?void 0:t.in).getDay();return n===0||n===6}function Or(e,t){return rr(e,{...t,weekStartsOn:1})}function $d(e,t){const n=de(e,t==null?void 0:t.in),r=n.getFullYear(),a=De(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const s=Or(a),i=De(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const o=Or(i);return n.getTime()>=s.getTime()?r+1:n.getTime()>=o.getTime()?r:r-1}function ka(e){const t=de(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Rn(e,t){const n=de(e,t==null?void 0:t.in);return n.setHours(0,0,0,0),n}function Zn(e,t,n){const[r,a]=Wn(n==null?void 0:n.in,e,t),s=Rn(r),i=Rn(a),o=+s-ka(s),l=+i-ka(i);return Math.round((o-l)/Pk)}function Op(e,t){const n=$d(e,t),r=De(e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Or(r)}function Sp(e,t,n){return Pr(e,t*7,n)}function Sr(e,t,n){return et(e,t*12,n)}function Dp(e,t){let n,r=t==null?void 0:t.in;return e.forEach(a=>{!r&&typeof a=="object"&&(r=De.bind(null,a));const s=de(a,r);(!n||n<s||isNaN(+s))&&(n=s)}),De(r,n||NaN)}function Ip(e,t){let n,r=t==null?void 0:t.in;return e.forEach(a=>{!r&&typeof a=="object"&&(r=De.bind(null,a));const s=de(a,r);(!n||n>s||isNaN(+s))&&(n=s)}),De(r,n||NaN)}function ht(e,t){const n=+de(e)-+de(t);return n<0?-1:n>0?1:n}function Dr(e,t,n){const[r,a]=Wn(n==null?void 0:n.in,e,t);return+Rn(r)==+Rn(a)}function Wd(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function qp(e){return!(!Wd(e)&&typeof e!="number"||isNaN(+de(e)))}function zd(e,t,n){const[r,a]=Wn(n==null?void 0:n.in,e,t),s=r.getFullYear()-a.getFullYear(),i=r.getMonth()-a.getMonth();return s*12+i}function _p(e,t,n){const[r,a]=Wn(n==null?void 0:n.in,e,t);return r.getFullYear()-a.getFullYear()}function Xd(e,t,n){const[r,a]=Wn(n==null?void 0:n.in,e,t),s=uo(r,a),i=Math.abs(Zn(r,a));r.setDate(r.getDate()-s*i);const o=+(uo(r,a)===-s),l=s*(i-o);return l===0?0:l}function uo(e,t){const n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function go(e,t){return+de(e)-+de(t)}function ca(e,t){const n=de(e,t==null?void 0:t.in);return n.setHours(23,59,59,999),n}function ja(e,t){const n=de(e,t==null?void 0:t.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function Np(e,t){const n=de(e,t==null?void 0:t.in);return+ca(n,t)==+ja(n,t)}function Pp(e,t,n){const[r,a,s]=Wn(n==null?void 0:n.in,e,e,t),i=ht(a,s),o=Math.abs(zd(a,s));if(o<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-i*o);let l=ht(a,s)===-i;Np(r)&&o===1&&ht(r,s)===1&&(l=!1);const d=i*(o-+l);return d===0?0:d}function jp(e,t,n){const[r,a]=Wn(n==null?void 0:n.in,e,t),s=ht(r,a),i=Math.abs(_p(r,a));r.setFullYear(1584),a.setFullYear(1584);const o=ht(r,a)===-s,l=s*(i-+o);return l===0?0:l}function Fp(e,t){const[n,r]=Wn(e,t.start,t.end);return{start:n,end:r}}function Qd(e,t){const{start:n,end:r}=Fp(t==null?void 0:t.in,e);let a=+n>+r;const s=a?+n:+r,i=a?r:n;i.setHours(0,0,0,0),i.setDate(1);let o=1;const l=[];for(;+i<=s;)l.push(De(n,i)),i.setMonth(i.getMonth()+o);return a?l.reverse():l}function yr(e,t){const n=de(e,t==null?void 0:t.in);return n.setDate(1),n.setHours(0,0,0,0),n}function qt(e,t){const n=de(e,t==null?void 0:t.in),r=n.getFullYear();return n.setFullYear(r+1,0,0),n.setHours(23,59,59,999),n}function ot(e,t){const n=de(e,t==null?void 0:t.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Zd(e,t){var o,l,d,u;const n=Nr(),r=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((u=(d=n.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,a=de(e,t==null?void 0:t.in),s=a.getDay(),i=(s<r?-7:0)+6-(s-r);return a.setDate(a.getDate()+i),a.setHours(23,59,59,999),a}function xp(e,t){return Zd(e,{...t,weekStartsOn:1})}function Mp(e,t){const n=de(e,t==null?void 0:t.in);return Zn(n,ot(n))+1}function fi(e,t){const n=de(e,t==null?void 0:t.in),r=+Or(n)-+Op(n);return Math.round(r/wd)+1}function pi(e,t){var u,g,k,c;const n=de(e,t==null?void 0:t.in),r=n.getFullYear(),a=Nr(),s=(t==null?void 0:t.firstWeekContainsDate)??((g=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((c=(k=a.locale)==null?void 0:k.options)==null?void 0:c.firstWeekContainsDate)??1,i=De((t==null?void 0:t.in)||e,0);i.setFullYear(r+1,0,s),i.setHours(0,0,0,0);const o=rr(i,t),l=De((t==null?void 0:t.in)||e,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const d=rr(l,t);return+n>=+o?r+1:+n>=+d?r:r-1}function Up(e,t){var o,l,d,u;const n=Nr(),r=(t==null?void 0:t.firstWeekContainsDate)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((u=(d=n.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??1,a=pi(e,t),s=De((t==null?void 0:t.in)||e,0);return s.setFullYear(a,0,r),s.setHours(0,0,0,0),rr(s,t)}function yi(e,t){const n=de(e,t==null?void 0:t.in),r=+rr(n,t)-+Up(n,t);return Math.round(r/wd)+1}function Se(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const or={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return Se(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):Se(n+1,2)},d(e,t){return Se(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return Se(e.getHours()%12||12,t.length)},H(e,t){return Se(e.getHours(),t.length)},m(e,t){return Se(e.getMinutes(),t.length)},s(e,t){return Se(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return Se(a,t.length)}},Br={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},mo={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return or.y(e,t)},Y:function(e,t,n,r){const a=pi(e,r),s=a>0?a:1-a;if(t==="YY"){const i=s%100;return Se(i,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):Se(s,t.length)},R:function(e,t){const n=$d(e);return Se(n,t.length)},u:function(e,t){const n=e.getFullYear();return Se(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Se(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Se(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return or.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return Se(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=yi(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):Se(a,t.length)},I:function(e,t,n){const r=fi(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):Se(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):or.d(e,t)},D:function(e,t,n){const r=Mp(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Se(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return Se(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return Se(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return Se(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=Br.noon:r===0?a=Br.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=Br.evening:r>=12?a=Br.afternoon:r>=4?a=Br.morning:a=Br.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return or.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):or.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Se(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):Se(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):or.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):or.s(e,t)},S:function(e,t){return or.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return co(r);case"XXXX":case"XX":return br(r);case"XXXXX":case"XXX":default:return br(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return co(r);case"xxxx":case"xx":return br(r);case"xxxxx":case"xxx":default:return br(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ko(r,":");case"OOOO":default:return"GMT"+br(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ko(r,":");case"zzzz":default:return"GMT"+br(r,":")}},t:function(e,t,n){const r=Math.trunc(+e/1e3);return Se(r,t.length)},T:function(e,t,n){return Se(+e,t.length)}};function ko(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),s=r%60;return s===0?n+String(a):n+String(a)+t+Se(s,2)}function co(e,t){return e%60===0?(e>0?"-":"+")+Se(Math.abs(e)/60,2):br(e,t)}function br(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Se(Math.trunc(r/60),2),s=Se(r%60,2);return n+a+t+s}const fo=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Jd=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Bp=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return fo(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",fo(r,t)).replace("{{time}}",Jd(a,t))},Ps={p:Jd,P:Bp},Vp=/^D+$/,Lp=/^Y+$/,Kp=["D","DD","YY","YYYY"];function eu(e){return Vp.test(e)}function nu(e){return Lp.test(e)}function js(e,t,n){const r=Cp(e,t,n);if(console.warn(r),Kp.includes(e))throw new RangeError(r)}function Cp(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Gp=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Hp=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Yp=/^'([^]*?)'?$/,$p=/''/g,Wp=/[a-zA-Z]/;function nn(e,t,n){var u,g,k,c,p,v,y,T;const r=Nr(),a=(n==null?void 0:n.locale)??r.locale??Ia,s=(n==null?void 0:n.firstWeekContainsDate)??((g=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((c=(k=r.locale)==null?void 0:k.options)==null?void 0:c.firstWeekContainsDate)??1,i=(n==null?void 0:n.weekStartsOn)??((v=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((T=(y=r.locale)==null?void 0:y.options)==null?void 0:T.weekStartsOn)??0,o=de(e,n==null?void 0:n.in);if(!qp(o))throw new RangeError("Invalid time value");let l=t.match(Hp).map(h=>{const b=h[0];if(b==="p"||b==="P"){const w=Ps[b];return w(h,a.formatLong)}return h}).join("").match(Gp).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const b=h[0];if(b==="'")return{isToken:!1,value:zp(h)};if(mo[b])return{isToken:!0,value:h};if(b.match(Wp))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:h}});a.localize.preprocessor&&(l=a.localize.preprocessor(o,l));const d={firstWeekContainsDate:s,weekStartsOn:i,locale:a};return l.map(h=>{if(!h.isToken)return h.value;const b=h.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&nu(b)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&eu(b))&&js(b,t,String(e));const w=mo[b[0]];return w(o,b,a.localize,d)}).join("")}function zp(e){const t=e.match(Yp);return t?t[1].replace($p,"'"):e}function Xp(e,t){const n=de(e,t==null?void 0:t.in),r=n.getFullYear(),a=n.getMonth(),s=De(n,0);return s.setFullYear(r,a+1,0),s.setHours(0,0,0,0),s.getDate()}function Qp(){return Object.assign({},Nr())}function Zp(e,t){const n=de(e,t==null?void 0:t.in).getDay();return n===0?7:n}function vi(e,t){return de(e,t==null?void 0:t.in).getMonth()}function bi(e,t){return de(e,t==null?void 0:t.in).getFullYear()}function hi(e,t){return+de(e)>+de(t)}function _t(e,t){return+de(e)<+de(t)}function Jp(e,t){const n=ey(t)?new t(0):De(t,0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}function ey(e){var t;return typeof e=="function"&&((t=e.prototype)==null?void 0:t.constructor)===e}const ny=10;class ru{constructor(){X(this,"subPriority",0)}validate(t,n){return!0}}class ry extends ru{constructor(t,n,r,a,s){super(),this.value=t,this.validateValue=n,this.setValue=r,this.priority=a,s&&(this.subPriority=s)}validate(t,n){return this.validateValue(t,this.value,n)}set(t,n,r){return this.setValue(t,n,this.value,r)}}class ty extends ru{constructor(n,r){super();X(this,"priority",ny);X(this,"subPriority",-1);this.context=n||(a=>De(r,a))}set(n,r){return r.timestampIsSet?n:De(n,Jp(n,this.context))}}class he{run(t,n,r,a){const s=this.parse(t,n,r,a);return s?{setter:new ry(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(t,n,r){return!0}}class ay extends he{constructor(){super(...arguments);X(this,"priority",140);X(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,r,a){return r.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const $e={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Kn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function We(e,t){return e&&{value:t(e.value),rest:e.rest}}function Le(e,t){const n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function Cn(e,t){const n=t.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:t.slice(1)};const r=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,s=n[3]?parseInt(n[3],10):0,i=n[5]?parseInt(n[5],10):0;return{value:r*(a*Fk+s*jk+i*xk),rest:t.slice(n[0].length)}}function tu(e){return Le($e.anyDigitsSigned,e)}function Ge(e,t){switch(e){case 1:return Le($e.singleDigit,t);case 2:return Le($e.twoDigits,t);case 3:return Le($e.threeDigits,t);case 4:return Le($e.fourDigits,t);default:return Le(new RegExp("^\\d{1,"+e+"}"),t)}}function fa(e,t){switch(e){case 1:return Le($e.singleDigitSigned,t);case 2:return Le($e.twoDigitsSigned,t);case 3:return Le($e.threeDigitsSigned,t);case 4:return Le($e.fourDigitsSigned,t);default:return Le(new RegExp("^-?\\d{1,"+e+"}"),t)}}function Ti(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function au(e,t){const n=t>0,r=n?t:1-t;let a;if(r<=50)a=e||100;else{const s=r+50,i=Math.trunc(s/100)*100,o=e>=s%100;a=e+i-(o?100:0)}return n?a:1-a}function su(e){return e%400===0||e%4===0&&e%100!==0}class sy extends he{constructor(){super(...arguments);X(this,"priority",130);X(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,a){const s=i=>({year:i,isTwoDigitYear:r==="yy"});switch(r){case"y":return We(Ge(4,n),s);case"yo":return We(a.ordinalNumber(n,{unit:"year"}),s);default:return We(Ge(r.length,n),s)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a){const s=n.getFullYear();if(a.isTwoDigitYear){const o=au(a.year,s);return n.setFullYear(o,0,1),n.setHours(0,0,0,0),n}const i=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(i,0,1),n.setHours(0,0,0,0),n}}class iy extends he{constructor(){super(...arguments);X(this,"priority",130);X(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,a){const s=i=>({year:i,isTwoDigitYear:r==="YY"});switch(r){case"Y":return We(Ge(4,n),s);case"Yo":return We(a.ordinalNumber(n,{unit:"year"}),s);default:return We(Ge(r.length,n),s)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a,s){const i=pi(n,s);if(a.isTwoDigitYear){const l=au(a.year,i);return n.setFullYear(l,0,s.firstWeekContainsDate),n.setHours(0,0,0,0),rr(n,s)}const o=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(o,0,s.firstWeekContainsDate),n.setHours(0,0,0,0),rr(n,s)}}class oy extends he{constructor(){super(...arguments);X(this,"priority",130);X(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return fa(r==="R"?4:r.length,n)}set(n,r,a){const s=De(n,0);return s.setFullYear(a,0,4),s.setHours(0,0,0,0),Or(s)}}class ly extends he{constructor(){super(...arguments);X(this,"priority",130);X(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return fa(r==="u"?4:r.length,n)}set(n,r,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class dy extends he{constructor(){super(...arguments);X(this,"priority",120);X(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"Q":case"QQ":return Ge(r.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class uy extends he{constructor(){super(...arguments);X(this,"priority",120);X(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"q":case"qq":return Ge(r.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class gy extends he{constructor(){super(...arguments);X(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);X(this,"priority",110)}parse(n,r,a){const s=i=>i-1;switch(r){case"M":return We(Le($e.month,n),s);case"MM":return We(Ge(2,n),s);case"Mo":return We(a.ordinalNumber(n,{unit:"month"}),s);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class my extends he{constructor(){super(...arguments);X(this,"priority",110);X(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,a){const s=i=>i-1;switch(r){case"L":return We(Le($e.month,n),s);case"LL":return We(Ge(2,n),s);case"Lo":return We(a.ordinalNumber(n,{unit:"month"}),s);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function ky(e,t,n){const r=de(e,n==null?void 0:n.in),a=yi(r,n)-t;return r.setDate(r.getDate()-a*7),de(r,n==null?void 0:n.in)}class cy extends he{constructor(){super(...arguments);X(this,"priority",100);X(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,a){switch(r){case"w":return Le($e.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return Ge(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a,s){return rr(ky(n,a,s),s)}}function fy(e,t,n){const r=de(e,n==null?void 0:n.in),a=fi(r,n)-t;return r.setDate(r.getDate()-a*7),r}class py extends he{constructor(){super(...arguments);X(this,"priority",100);X(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,a){switch(r){case"I":return Le($e.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return Ge(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a){return Or(fy(n,a))}}const yy=[31,28,31,30,31,30,31,31,30,31,30,31],vy=[31,29,31,30,31,30,31,31,30,31,30,31];class by extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"subPriority",1);X(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"d":return Le($e.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return Ge(r.length,n)}}validate(n,r){const a=n.getFullYear(),s=su(a),i=n.getMonth();return s?r>=1&&r<=vy[i]:r>=1&&r<=yy[i]}set(n,r,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class hy extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"subpriority",1);X(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,a){switch(r){case"D":case"DD":return Le($e.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return Ge(r.length,n)}}validate(n,r){const a=n.getFullYear();return su(a)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function Ei(e,t,n){var g,k,c,p;const r=Nr(),a=(n==null?void 0:n.weekStartsOn)??((k=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:k.weekStartsOn)??r.weekStartsOn??((p=(c=r.locale)==null?void 0:c.options)==null?void 0:p.weekStartsOn)??0,s=de(e,n==null?void 0:n.in),i=s.getDay(),l=(t%7+7)%7,d=7-a,u=t<0||t>6?t-(i+d)%7:(l+d)%7-(i+d)%7;return Pr(s,u,n)}class Ty extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,s){return n=Ei(n,a,s),n.setHours(0,0,0,0),n}}class Ey extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,a,s){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+l};switch(r){case"e":case"ee":return We(Ge(r.length,n),i);case"eo":return We(a.ordinalNumber(n,{unit:"day"}),i);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,s){return n=Ei(n,a,s),n.setHours(0,0,0,0),n}}class Ry extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,a,s){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+l};switch(r){case"c":case"cc":return We(Ge(r.length,n),i);case"co":return We(a.ordinalNumber(n,{unit:"day"}),i);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,s){return n=Ei(n,a,s),n.setHours(0,0,0,0),n}}function Ay(e,t,n){const r=de(e,n==null?void 0:n.in),a=Zp(r,n),s=t-a;return Pr(r,s,n)}class wy extends he{constructor(){super(...arguments);X(this,"priority",90);X(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,a){const s=i=>i===0?7:i;switch(r){case"i":case"ii":return Ge(r.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return We(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),s);case"iiiii":return We(a.day(n,{width:"narrow",context:"formatting"}),s);case"iiiiii":return We(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),s);case"iiii":default:return We(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),s)}}validate(n,r){return r>=1&&r<=7}set(n,r,a){return n=Ay(n,a),n.setHours(0,0,0,0),n}}class Oy extends he{constructor(){super(...arguments);X(this,"priority",80);X(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(Ti(a),0,0,0),n}}class Sy extends he{constructor(){super(...arguments);X(this,"priority",80);X(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(Ti(a),0,0,0),n}}class Dy extends he{constructor(){super(...arguments);X(this,"priority",80);X(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(Ti(a),0,0,0),n}}class Iy extends he{constructor(){super(...arguments);X(this,"priority",70);X(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,a){switch(r){case"h":return Le($e.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return Ge(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,a){const s=n.getHours()>=12;return s&&a<12?n.setHours(a+12,0,0,0):!s&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class qy extends he{constructor(){super(...arguments);X(this,"priority",70);X(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,a){switch(r){case"H":return Le($e.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return Ge(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,a){return n.setHours(a,0,0,0),n}}class _y extends he{constructor(){super(...arguments);X(this,"priority",70);X(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,a){switch(r){case"K":return Le($e.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return Ge(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class Ny extends he{constructor(){super(...arguments);X(this,"priority",70);X(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,a){switch(r){case"k":return Le($e.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return Ge(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,a){const s=a<=24?a%24:a;return n.setHours(s,0,0,0),n}}class Py extends he{constructor(){super(...arguments);X(this,"priority",60);X(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"m":return Le($e.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return Ge(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setMinutes(a,0,0),n}}class jy extends he{constructor(){super(...arguments);X(this,"priority",50);X(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"s":return Le($e.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return Ge(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setSeconds(a,0),n}}class Fy extends he{constructor(){super(...arguments);X(this,"priority",30);X(this,"incompatibleTokens",["t","T"])}parse(n,r){const a=s=>Math.trunc(s*Math.pow(10,-r.length+3));return We(Ge(r.length,n),a)}set(n,r,a){return n.setMilliseconds(a),n}}class xy extends he{constructor(){super(...arguments);X(this,"priority",10);X(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return Cn(Kn.basicOptionalMinutes,n);case"XX":return Cn(Kn.basic,n);case"XXXX":return Cn(Kn.basicOptionalSeconds,n);case"XXXXX":return Cn(Kn.extendedOptionalSeconds,n);case"XXX":default:return Cn(Kn.extended,n)}}set(n,r,a){return r.timestampIsSet?n:De(n,n.getTime()-ka(n)-a)}}class My extends he{constructor(){super(...arguments);X(this,"priority",10);X(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return Cn(Kn.basicOptionalMinutes,n);case"xx":return Cn(Kn.basic,n);case"xxxx":return Cn(Kn.basicOptionalSeconds,n);case"xxxxx":return Cn(Kn.extendedOptionalSeconds,n);case"xxx":default:return Cn(Kn.extended,n)}}set(n,r,a){return r.timestampIsSet?n:De(n,n.getTime()-ka(n)-a)}}class Uy extends he{constructor(){super(...arguments);X(this,"priority",40);X(this,"incompatibleTokens","*")}parse(n){return tu(n)}set(n,r,a){return[De(n,a*1e3),{timestampIsSet:!0}]}}class By extends he{constructor(){super(...arguments);X(this,"priority",20);X(this,"incompatibleTokens","*")}parse(n){return tu(n)}set(n,r,a){return[De(n,a),{timestampIsSet:!0}]}}const Vy={G:new ay,y:new sy,Y:new iy,R:new oy,u:new ly,Q:new dy,q:new uy,M:new gy,L:new my,w:new cy,I:new py,d:new by,D:new hy,E:new Ty,e:new Ey,c:new Ry,i:new wy,a:new Oy,b:new Sy,B:new Dy,h:new Iy,H:new qy,K:new _y,k:new Ny,m:new Py,s:new jy,S:new Fy,X:new xy,x:new My,t:new Uy,T:new By},Ly=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ky=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Cy=/^'([^]*?)'?$/,Gy=/''/g,Hy=/\S/,Yy=/[a-zA-Z]/;function Wr(e,t,n,r){var y,T,h,b,w,E,D,O;const a=()=>De((r==null?void 0:r.in)||n,NaN),s=Qp(),i=(r==null?void 0:r.locale)??s.locale??Ia,o=(r==null?void 0:r.firstWeekContainsDate)??((T=(y=r==null?void 0:r.locale)==null?void 0:y.options)==null?void 0:T.firstWeekContainsDate)??s.firstWeekContainsDate??((b=(h=s.locale)==null?void 0:h.options)==null?void 0:b.firstWeekContainsDate)??1,l=(r==null?void 0:r.weekStartsOn)??((E=(w=r==null?void 0:r.locale)==null?void 0:w.options)==null?void 0:E.weekStartsOn)??s.weekStartsOn??((O=(D=s.locale)==null?void 0:D.options)==null?void 0:O.weekStartsOn)??0;if(!t)return e?a():de(n,r==null?void 0:r.in);const d={firstWeekContainsDate:o,weekStartsOn:l,locale:i},u=[new ty(r==null?void 0:r.in,n)],g=t.match(Ky).map(I=>{const _=I[0];if(_ in Ps){const x=Ps[_];return x(I,i.formatLong)}return I}).join("").match(Ly),k=[];for(let I of g){!(r!=null&&r.useAdditionalWeekYearTokens)&&nu(I)&&js(I,t,e),!(r!=null&&r.useAdditionalDayOfYearTokens)&&eu(I)&&js(I,t,e);const _=I[0],x=Vy[_];if(x){const{incompatibleTokens:P}=x;if(Array.isArray(P)){const S=k.find(N=>P.includes(N.token)||N.token===_);if(S)throw new RangeError(`The format string mustn't contain \`${S.fullToken}\` and \`${I}\` at the same time`)}else if(x.incompatibleTokens==="*"&&k.length>0)throw new RangeError(`The format string mustn't contain \`${I}\` and any other token at the same time`);k.push({token:_,fullToken:I});const q=x.run(e,I,i.match,d);if(!q)return a();u.push(q.setter),e=q.rest}else{if(_.match(Yy))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");if(I==="''"?I="'":_==="'"&&(I=$y(I)),e.indexOf(I)===0)e=e.slice(I.length);else return a()}}if(e.length>0&&Hy.test(e))return a();const c=u.map(I=>I.priority).sort((I,_)=>_-I).filter((I,_,x)=>x.indexOf(I)===_).map(I=>u.filter(_=>_.priority===I).sort((_,x)=>x.subPriority-_.subPriority)).map(I=>I[0]);let p=de(n,r==null?void 0:r.in);if(isNaN(+p))return a();const v={};for(const I of c){if(!I.validate(p,d))return a();const _=I.set(p,v,d);Array.isArray(_)?(p=_[0],Object.assign(v,_[1])):p=_}return p}function $y(e){return e.match(Cy)[1].replace(Gy,"'")}function Wy(e,t,n){const[r,a]=Wn(n==null?void 0:n.in,e,t);return r.getFullYear()===a.getFullYear()&&r.getMonth()===a.getMonth()}function iu(e,t,n){const[r,a]=Wn(n==null?void 0:n.in,e,t);return r.getFullYear()===a.getFullYear()}function Ri(e,t,n){return Pr(e,-t,n)}function ou(e,t,n){const r=de(e,n==null?void 0:n.in),a=r.getFullYear(),s=r.getDate(),i=De(e,0);i.setFullYear(a,t,15),i.setHours(0,0,0,0);const o=Xp(i);return r.setMonth(t,Math.min(s,o)),r}function lu(e,t,n){const r=de(e,n==null?void 0:n.in);return isNaN(+r)?De(e,NaN):(r.setFullYear(t),r)}function du(e,t,n){return et(e,-t,n)}function zy(e,t,n){const{years:r=0,months:a=0,weeks:s=0,days:i=0,hours:o=0,minutes:l=0,seconds:d=0}=t,u=du(e,a+r*12,n),g=Ri(u,i+s*7,n),k=l+o*60,p=(d+k*60)*1e3;return De(e,+g-p)}function Xy(e,t,n){return Sr(e,-t,n)}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Qy=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],pa=Qy.join(","),uu=typeof Element>"u",nt=uu?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ya=!uu&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},va=function e(t,n){var r;n===void 0&&(n=!0);var a=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),s=a===""||a==="true",i=s||n&&t&&e(t.parentNode);return i},Zy=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},gu=function(t,n,r){if(va(t))return[];var a=Array.prototype.slice.apply(t.querySelectorAll(pa));return n&&nt.call(t,pa)&&a.unshift(t),a=a.filter(r),a},mu=function e(t,n,r){for(var a=[],s=Array.from(t);s.length;){var i=s.shift();if(!va(i,!1))if(i.tagName==="SLOT"){var o=i.assignedElements(),l=o.length?o:i.children,d=e(l,!0,r);r.flatten?a.push.apply(a,d):a.push({scopeParent:i,candidates:d})}else{var u=nt.call(i,pa);u&&r.filter(i)&&(n||!t.includes(i))&&a.push(i);var g=i.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(i),k=!va(g,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(i));if(g&&k){var c=e(g===!0?i.children:g.children,!0,r);r.flatten?a.push.apply(a,c):a.push({scopeParent:i,candidates:c})}else s.unshift.apply(s,i.children)}}return a},ku=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},cu=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Zy(t))&&!ku(t)?0:t.tabIndex},Jy=function(t,n){var r=cu(t);return r<0&&n&&!ku(t)?0:r},ev=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},fu=function(t){return t.tagName==="INPUT"},nv=function(t){return fu(t)&&t.type==="hidden"},rv=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},tv=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},av=function(t){if(!t.name)return!0;var n=t.form||ya(t),r=function(o){return n.querySelectorAll('input[type="radio"][name="'+o+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=r(window.CSS.escape(t.name));else try{a=r(t.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var s=tv(a,t.form);return!s||s===t},sv=function(t){return fu(t)&&t.type==="radio"},iv=function(t){return sv(t)&&!av(t)},ov=function(t){var n,r=t&&ya(t),a=(n=r)===null||n===void 0?void 0:n.host,s=!1;if(r&&r!==t){var i,o,l;for(s=!!((i=a)!==null&&i!==void 0&&(o=i.ownerDocument)!==null&&o!==void 0&&o.contains(a)||t!=null&&(l=t.ownerDocument)!==null&&l!==void 0&&l.contains(t));!s&&a;){var d,u,g;r=ya(a),a=(d=r)===null||d===void 0?void 0:d.host,s=!!((u=a)!==null&&u!==void 0&&(g=u.ownerDocument)!==null&&g!==void 0&&g.contains(a))}}return s},po=function(t){var n=t.getBoundingClientRect(),r=n.width,a=n.height;return r===0&&a===0},lv=function(t,n){var r=n.displayCheck,a=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var s=nt.call(t,"details>summary:first-of-type"),i=s?t.parentElement:t;if(nt.call(i,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof a=="function"){for(var o=t;t;){var l=t.parentElement,d=ya(t);if(l&&!l.shadowRoot&&a(l)===!0)return po(t);t.assignedSlot?t=t.assignedSlot:!l&&d!==t.ownerDocument?t=d.host:t=l}t=o}if(ov(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return po(t);return!1},dv=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var a=n.children.item(r);if(a.tagName==="LEGEND")return nt.call(n,"fieldset[disabled] *")?!0:!a.contains(t)}return!0}n=n.parentElement}return!1},Fs=function(t,n){return!(n.disabled||va(n)||nv(n)||lv(n,t)||rv(n)||dv(n))},xs=function(t,n){return!(iv(n)||cu(n)<0||!Fs(t,n))},uv=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},gv=function e(t){var n=[],r=[];return t.forEach(function(a,s){var i=!!a.scopeParent,o=i?a.scopeParent:a,l=Jy(o,i),d=i?e(a.candidates):o;l===0?i?n.push.apply(n,d):n.push(o):r.push({documentOrder:s,tabIndex:l,item:a,isScope:i,content:d})}),r.sort(ev).reduce(function(a,s){return s.isScope?a.push.apply(a,s.content):a.push(s.content),a},[]).concat(n)},Ai=function(t,n){n=n||{};var r;return n.getShadowRoot?r=mu([t],n.includeContainer,{filter:xs.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:uv}):r=gu(t,n.includeContainer,xs.bind(null,n)),gv(r)},mv=function(t,n){n=n||{};var r;return n.getShadowRoot?r=mu([t],n.includeContainer,{filter:Fs.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=gu(t,n.includeContainer,Fs.bind(null,n)),r},pu=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return nt.call(t,pa)===!1?!1:xs(n,t)};function yu(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function vu(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function bu(){return/apple/i.test(navigator.vendor)}function Ms(){const e=/android/i;return e.test(yu())||e.test(vu())}function kv(){return yu().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function hu(){return vu().includes("jsdom/")}const yo="data-floating-ui-focusable",cv="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function gr(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function an(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&ua(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function mr(e){return"composedPath"in e?e.composedPath()[0]:e.target}function es(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function fv(e){return e.matches("html,body")}function on(e){return(e==null?void 0:e.ownerDocument)||document}function Tu(e){return Qe(e)&&e.matches(cv)}function vo(e){return e?e.getAttribute("role")==="combobox"&&Tu(e):!1}function pv(e){if(!e||hu())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function bo(e){return e?e.hasAttribute(yo)?e:e.querySelector("["+yo+"]")||e:null}function Tt(e,t,n){n===void 0&&(n=!0);let r=e.filter(s=>{var i;return s.parentId===t&&((i=s.context)==null?void 0:i.open)}),a=r;for(;a.length;)a=n?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(o=>{var l;return s.parentId===o.id&&((l=s.context)==null?void 0:l.open)})}):e,r=r.concat(a);return r}function ho(e,t){var n;let r=[],a=(n=e.find(s=>s.id===t))==null?void 0:n.parentId;for(;a;){const s=e.find(i=>i.id===a);a=s==null?void 0:s.parentId,s&&(r=r.concat(s))}return r}function ns(e){e.preventDefault(),e.stopPropagation()}function yv(e){return"nativeEvent"in e}function vv(e){return e.mozInputSource===0&&e.isTrusted?!0:Ms()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function bv(e){return hu()?!1:!Ms()&&e.width===0&&e.height===0||Ms()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Us(e,t){const n=["mouse","pen"];return n.push("",void 0),n.includes(e)}var pn=typeof document<"u"?m.useLayoutEffect:m.useEffect;const hv={...ld};function Tr(e){const t=m.useRef(e);return pn(()=>{t.current=e}),t}const Tv=hv.useInsertionEffect,Ev=Tv||(e=>e());function En(e){const t=m.useRef(()=>{});return Ev(()=>{t.current=e}),m.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current==null?void 0:t.current(...r)},[])}const Fa=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Eu(e,t){const n=Ai(e,Fa()),r=n.length;if(r===0)return;const a=gr(on(e)),s=n.indexOf(a),i=s===-1?t===1?0:r-1:s+t;return n[i]}function Rv(e){return Eu(on(e).body,1)||e}function Av(e){return Eu(on(e).body,-1)||e}function To(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!an(n,r)}const wv="data-floating-ui-focusable",Eo="active",Ro="selected",Ov={...ld};let Ao=!1,Sv=0;const wo=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Sv++;function Dv(){const[e,t]=m.useState(()=>Ao?wo():void 0);return pn(()=>{e==null&&t(wo())},[]),m.useEffect(()=>{Ao=!0},[]),e}const Iv=Ov.useId,Ru=Iv||Dv;function qv(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(a=>a(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){var r;(r=e.get(t))==null||r.delete(n)}}}const _v=m.createContext(null),Nv=m.createContext(null),Au=()=>{var e;return((e=m.useContext(_v))==null?void 0:e.id)||null},xa=()=>m.useContext(Nv);function Ir(e){return"data-floating-ui-"+e}function wn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Oo=Ir("safe-polygon");function rs(e,t,n){if(n&&!Us(n))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const r=e();return typeof r=="number"?r:r==null?void 0:r[t]}return e==null?void 0:e[t]}function ts(e){return typeof e=="function"?e():e}function wu(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:a,events:s,elements:i}=e,{enabled:o=!0,delay:l=0,handleClose:d=null,mouseOnly:u=!1,restMs:g=0,move:k=!0}=t,c=xa(),p=Au(),v=Tr(d),y=Tr(l),T=Tr(n),h=Tr(g),b=m.useRef(),w=m.useRef(-1),E=m.useRef(),D=m.useRef(-1),O=m.useRef(!0),I=m.useRef(!1),_=m.useRef(()=>{}),x=m.useRef(!1),P=m.useCallback(()=>{var V;const U=(V=a.current.openEvent)==null?void 0:V.type;return(U==null?void 0:U.includes("mouse"))&&U!=="mousedown"},[a]);m.useEffect(()=>{if(!o)return;function V(U){let{open:M}=U;M||(wn(w),wn(D),O.current=!0,x.current=!1)}return s.on("openchange",V),()=>{s.off("openchange",V)}},[o,s]),m.useEffect(()=>{if(!o||!v.current||!n)return;function V(M){P()&&r(!1,M,"hover")}const U=on(i.floating).documentElement;return U.addEventListener("mouseleave",V),()=>{U.removeEventListener("mouseleave",V)}},[i.floating,n,r,o,v,P]);const q=m.useCallback(function(V,U,M){U===void 0&&(U=!0),M===void 0&&(M="hover");const Y=rs(y.current,"close",b.current);Y&&!E.current?(wn(w),w.current=window.setTimeout(()=>r(!1,V,M),Y)):U&&(wn(w),r(!1,V,M))},[y,r]),S=En(()=>{_.current(),E.current=void 0}),N=En(()=>{if(I.current){const V=on(i.floating).body;V.style.pointerEvents="",V.removeAttribute(Oo),I.current=!1}}),F=En(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);m.useEffect(()=>{if(!o)return;function V(K){if(wn(w),O.current=!1,u&&!Us(b.current)||ts(h.current)>0&&!rs(y.current,"open"))return;const te=rs(y.current,"open",b.current);te?w.current=window.setTimeout(()=>{T.current||r(!0,K,"hover")},te):n||r(!0,K,"hover")}function U(K){if(F()){N();return}_.current();const te=on(i.floating);if(wn(D),x.current=!1,v.current&&a.current.floatingContext){n||wn(w),E.current=v.current({...a.current.floatingContext,tree:c,x:K.clientX,y:K.clientY,onClose(){N(),S(),F()||q(K,!0,"safe-polygon")}});const z=E.current;te.addEventListener("mousemove",z),_.current=()=>{te.removeEventListener("mousemove",z)};return}(b.current==="touch"?!an(i.floating,K.relatedTarget):!0)&&q(K)}function M(K){F()||a.current.floatingContext&&(v.current==null||v.current({...a.current.floatingContext,tree:c,x:K.clientX,y:K.clientY,onClose(){N(),S(),F()||q(K)}})(K))}function Y(){wn(w)}function ne(K){F()||q(K,!1)}if(Ne(i.domReference)){const K=i.domReference,te=i.floating;return n&&K.addEventListener("mouseleave",M),k&&K.addEventListener("mousemove",V,{once:!0}),K.addEventListener("mouseenter",V),K.addEventListener("mouseleave",U),te&&(te.addEventListener("mouseleave",M),te.addEventListener("mouseenter",Y),te.addEventListener("mouseleave",ne)),()=>{n&&K.removeEventListener("mouseleave",M),k&&K.removeEventListener("mousemove",V),K.removeEventListener("mouseenter",V),K.removeEventListener("mouseleave",U),te&&(te.removeEventListener("mouseleave",M),te.removeEventListener("mouseenter",Y),te.removeEventListener("mouseleave",ne))}}},[i,o,e,u,k,q,S,N,r,n,T,c,y,v,a,F,h]),pn(()=>{var V;if(o&&n&&(V=v.current)!=null&&V.__options.blockPointerEvents&&P()){I.current=!0;const M=i.floating;if(Ne(i.domReference)&&M){var U;const Y=on(i.floating).body;Y.setAttribute(Oo,"");const ne=i.domReference,K=c==null||(U=c.nodesRef.current.find(te=>te.id===p))==null||(U=U.context)==null?void 0:U.elements.floating;return K&&(K.style.pointerEvents=""),Y.style.pointerEvents="none",ne.style.pointerEvents="auto",M.style.pointerEvents="auto",()=>{Y.style.pointerEvents="",ne.style.pointerEvents="",M.style.pointerEvents=""}}}},[o,n,p,i,c,v,P]),pn(()=>{n||(b.current=void 0,x.current=!1,S(),N())},[n,S,N]),m.useEffect(()=>()=>{S(),wn(w),wn(D),N()},[o,i.domReference,S,N]);const L=m.useMemo(()=>{function V(U){b.current=U.pointerType}return{onPointerDown:V,onPointerEnter:V,onMouseMove(U){const{nativeEvent:M}=U;function Y(){!O.current&&!T.current&&r(!0,M,"hover")}u&&!Us(b.current)||n||ts(h.current)===0||x.current&&U.movementX**2+U.movementY**2<2||(wn(D),b.current==="touch"?Y():(x.current=!0,D.current=window.setTimeout(Y,ts(h.current))))}}},[u,r,n,T,h]);return m.useMemo(()=>o?{reference:L}:{},[o,L])}let So=0;function Vr(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:a=!1}=t;r&&cancelAnimationFrame(So);const s=()=>e==null?void 0:e.focus({preventScroll:n});a?s():So=requestAnimationFrame(s)}function as(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&ua(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Pv(e){return"composedPath"in e?e.composedPath()[0]:e.target}function jv(e){return(e==null?void 0:e.ownerDocument)||document}let Lr=new WeakMap,Lt=new WeakSet,Kt={},ss=0;const Fv=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Ou=e=>e&&(e.host||Ou(e.parentNode)),xv=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=Ou(n);return e.contains(r)?r:null}).filter(n=>n!=null);function Mv(e,t,n,r){const a="data-floating-ui-inert",s=r?"inert":n?"aria-hidden":null,i=xv(t,e),o=new Set,l=new Set(i),d=[];Kt[a]||(Kt[a]=new WeakMap);const u=Kt[a];i.forEach(g),k(t),o.clear();function g(c){!c||o.has(c)||(o.add(c),c.parentNode&&g(c.parentNode))}function k(c){!c||l.has(c)||[].forEach.call(c.children,p=>{if(vr(p)!=="script")if(o.has(p))k(p);else{const v=s?p.getAttribute(s):null,y=v!==null&&v!=="false",T=Lr.get(p)||0,h=s?T+1:T,b=(u.get(p)||0)+1;Lr.set(p,h),u.set(p,b),d.push(p),h===1&&y&&Lt.add(p),b===1&&p.setAttribute(a,""),!y&&s&&p.setAttribute(s,s==="inert"?"":"true")}})}return ss++,()=>{d.forEach(c=>{const p=Lr.get(c)||0,v=s?p-1:p,y=(u.get(c)||0)-1;Lr.set(c,v),u.set(c,y),v||(!Lt.has(c)&&s&&c.removeAttribute(s),Lt.delete(c)),y||c.removeAttribute(a)}),ss--,ss||(Lr=new WeakMap,Lr=new WeakMap,Lt=new WeakSet,Kt={})}}function Do(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=jv(e[0]).body;return Mv(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const wi={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0},Io=m.forwardRef(function(t,n){const[r,a]=m.useState();pn(()=>{bu()&&a("button")},[]);const s={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[Ir("focus-guard")]:"",style:wi};return R.jsx("span",{...t,...s})}),Uv=m.createContext(null),qo=Ir("portal");function Bv(e){e===void 0&&(e={});const{id:t,root:n}=e,r=Ru(),a=Su(),[s,i]=m.useState(null),o=m.useRef(null);return pn(()=>()=>{s==null||s.remove(),queueMicrotask(()=>{o.current=null})},[s]),pn(()=>{if(!r||o.current)return;const l=t?document.getElementById(t):null;if(!l)return;const d=document.createElement("div");d.id=r,d.setAttribute(qo,""),l.appendChild(d),o.current=d,i(d)},[t,r]),pn(()=>{if(n===null||!r||o.current)return;let l=n||(a==null?void 0:a.portalNode);l&&!Ne(l)&&(l=l.current),l=l||document.body;let d=null;t&&(d=document.createElement("div"),d.id=t,l.appendChild(d));const u=document.createElement("div");u.id=r,u.setAttribute(qo,""),l=d||l,l.appendChild(u),o.current=u,i(u)},[t,n,r,a]),s}const Su=()=>m.useContext(Uv);function _o(e){return m.useMemo(()=>t=>{e.forEach(n=>{n&&(n.current=t)})},e)}const Vv=20;let hr=[];function Lv(e){hr=hr.filter(t=>t.isConnected),e&&vr(e)!=="body"&&(hr.push(e),hr.length>Vv&&(hr=hr.slice(-20)))}function No(){return hr.slice().reverse().find(e=>e.isConnected)}function Kv(e){const t=Fa();return pu(e,t)?e:Ai(e,t)[0]||e}function Po(e,t){var n;if(!t.current.includes("floating")&&!((n=e.getAttribute("role"))!=null&&n.includes("dialog")))return;const r=Fa(),s=mv(e,r).filter(o=>{const l=o.getAttribute("data-tabindex")||"";return pu(o,r)||o.hasAttribute("data-tabindex")&&!l.startsWith("-")}),i=e.getAttribute("tabindex");t.current.includes("floating")||s.length===0?i!=="0"&&e.setAttribute("tabindex","0"):(i!=="-1"||e.hasAttribute("data-tabindex")&&e.getAttribute("data-tabindex")!=="-1")&&(e.setAttribute("tabindex","-1"),e.setAttribute("data-tabindex","-1"))}const Cv=m.forwardRef(function(t,n){return R.jsx("button",{...t,type:"button",ref:n,tabIndex:-1,style:wi})});function Du(e){const{context:t,children:n,disabled:r=!1,order:a=["content"],guards:s=!0,initialFocus:i=0,returnFocus:o=!0,restoreFocus:l=!1,modal:d=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:g=!0,outsideElementsInert:k=!1,getInsideElements:c=()=>[]}=e,{open:p,onOpenChange:v,events:y,dataRef:T,elements:{domReference:h,floating:b}}=t,w=En(()=>{var ae;return(ae=T.current.floatingContext)==null?void 0:ae.nodeId}),E=En(c),D=typeof i=="number"&&i<0,O=vo(h)&&D,I=Fv(),_=I?s:!0,x=!_||I&&k,P=Tr(a),q=Tr(i),S=Tr(o),N=xa(),F=Su(),L=m.useRef(null),V=m.useRef(null),U=m.useRef(!1),M=m.useRef(!1),Y=m.useRef(-1),ne=F!=null,K=bo(b),te=En(function(ae){return ae===void 0&&(ae=K),ae?Ai(ae,Fa()):[]}),Z=En(ae=>{const se=te(ae);return P.current.map(ue=>h&&ue==="reference"?h:K&&ue==="floating"?K:se).filter(Boolean).flat()});m.useEffect(()=>{if(r||!d)return;function ae(ue){if(ue.key==="Tab"){an(K,gr(on(K)))&&te().length===0&&!O&&ns(ue);const ge=Z(),pe=mr(ue);P.current[0]==="reference"&&pe===h&&(ns(ue),ue.shiftKey?Vr(ge[ge.length-1]):Vr(ge[1])),P.current[1]==="floating"&&pe===K&&ue.shiftKey&&(ns(ue),Vr(ge[0]))}}const se=on(K);return se.addEventListener("keydown",ae),()=>{se.removeEventListener("keydown",ae)}},[r,h,K,d,P,O,te,Z]),m.useEffect(()=>{if(r||!b)return;function ae(se){const ue=mr(se),pe=te().indexOf(ue);pe!==-1&&(Y.current=pe)}return b.addEventListener("focusin",ae),()=>{b.removeEventListener("focusin",ae)}},[r,b,te]),m.useEffect(()=>{if(r||!g)return;function ae(){M.current=!0,setTimeout(()=>{M.current=!1})}function se(ue){const ge=ue.relatedTarget,pe=ue.currentTarget;queueMicrotask(()=>{const rn=w(),xe=!(an(h,ge)||an(b,ge)||an(ge,b)||an(F==null?void 0:F.portalNode,ge)||ge!=null&&ge.hasAttribute(Ir("focus-guard"))||N&&(Tt(N.nodesRef.current,rn).find(Ce=>{var Te,A;return an((Te=Ce.context)==null?void 0:Te.elements.floating,ge)||an((A=Ce.context)==null?void 0:A.elements.domReference,ge)})||ho(N.nodesRef.current,rn).find(Ce=>{var Te,A,j;return[(Te=Ce.context)==null?void 0:Te.elements.floating,bo((A=Ce.context)==null?void 0:A.elements.floating)].includes(ge)||((j=Ce.context)==null?void 0:j.elements.domReference)===ge})));if(pe===h&&K&&Po(K,P),l&&xe&&gr(on(K))===on(K).body){Qe(K)&&K.focus();const Ce=Y.current,Te=te(),A=Te[Ce]||Te[Te.length-1]||K;Qe(A)&&A.focus()}(O||!d)&&ge&&xe&&!M.current&&ge!==No()&&(U.current=!0,v(!1,ue,"focus-out"))})}if(b&&Qe(h))return h.addEventListener("focusout",se),h.addEventListener("pointerdown",ae),b.addEventListener("focusout",se),()=>{h.removeEventListener("focusout",se),h.removeEventListener("pointerdown",ae),b.removeEventListener("focusout",se)}},[r,h,b,K,d,N,F,v,g,l,te,O,w,P]);const z=m.useRef(null),W=m.useRef(null),le=_o([z,F==null?void 0:F.beforeInsideRef]),ie=_o([W,F==null?void 0:F.afterInsideRef]);m.useEffect(()=>{var ae,se;if(r||!b)return;const ue=Array.from((F==null||(ae=F.portalNode)==null?void 0:ae.querySelectorAll("["+Ir("portal")+"]"))||[]),ge=N?ho(N.nodesRef.current,w()):[],pe=N&&!d?ge.map(Te=>{var A;return(A=Te.context)==null?void 0:A.elements.floating}):[],rn=(se=ge.find(Te=>{var A;return vo(((A=Te.context)==null?void 0:A.elements.domReference)||null)}))==null||(se=se.context)==null?void 0:se.elements.domReference,xe=[b,rn,...ue,...pe,...E(),L.current,V.current,z.current,W.current,F==null?void 0:F.beforeOutsideRef.current,F==null?void 0:F.afterOutsideRef.current,P.current.includes("reference")||O?h:null].filter(Te=>Te!=null),Ce=d||O?Do(xe,!x,x):Do(xe);return()=>{Ce()}},[r,h,b,d,P,F,O,_,x,N,w,E]),pn(()=>{if(r||!Qe(K))return;const ae=on(K),se=gr(ae);queueMicrotask(()=>{const ue=Z(K),ge=q.current,pe=(typeof ge=="number"?ue[ge]:ge.current)||K,rn=an(K,se);!D&&!rn&&p&&Vr(pe,{preventScroll:pe===K})})},[r,p,K,D,Z,q]),pn(()=>{if(r||!K)return;let ae=!1;const se=on(K),ue=gr(se);Lv(ue);function ge(xe){let{reason:Ce,event:Te,nested:A}=xe;if(["hover","safe-polygon"].includes(Ce)&&Te.type==="mouseleave"&&(U.current=!0),Ce==="outside-press")if(A)U.current=!1,ae=!0;else if(vv(Te)||bv(Te))U.current=!1;else{let j=!1;document.createElement("div").focus({get preventScroll(){return j=!0,!1}}),j?(U.current=!1,ae=!0):U.current=!0}}y.on("openchange",ge);const pe=se.createElement("span");pe.setAttribute("tabindex","-1"),pe.setAttribute("aria-hidden","true"),Object.assign(pe.style,wi),ne&&h&&h.insertAdjacentElement("afterend",pe);function rn(){if(typeof S.current=="boolean"){const xe=h||No();return xe&&xe.isConnected?xe:pe}return S.current.current||pe}return()=>{y.off("openchange",ge);const xe=gr(se),Ce=an(b,xe)||N&&Tt(N.nodesRef.current,w()).some(A=>{var j;return an((j=A.context)==null?void 0:j.elements.floating,xe)}),Te=rn();queueMicrotask(()=>{const A=Kv(Te);S.current&&!U.current&&Qe(A)&&(!(A!==xe&&xe!==se.body)||Ce)&&A.focus({preventScroll:ae}),pe.remove()})}},[r,b,K,S,T,y,N,ne,h,w]),m.useEffect(()=>{queueMicrotask(()=>{U.current=!1})},[r]),pn(()=>{if(!r&&F)return F.setFocusManagerState({modal:d,closeOnFocusOut:g,open:p,onOpenChange:v,domReference:h}),()=>{F.setFocusManagerState(null)}},[r,F,d,p,v,g,h]),pn(()=>{r||K&&Po(K,P)},[r,K,P]);function ke(ae){return r||!u||!d?null:R.jsx(Cv,{ref:ae==="start"?L:V,onClick:se=>v(!1,se.nativeEvent),children:typeof u=="string"?u:"Dismiss"})}const He=!r&&_&&(d?!O:!0)&&(ne||d);return R.jsxs(R.Fragment,{children:[He&&R.jsx(Io,{"data-type":"inside",ref:le,onFocus:ae=>{if(d){const ue=Z();Vr(a[0]==="reference"?ue[0]:ue[ue.length-1])}else if(F!=null&&F.preserveTabOrder&&F.portalNode)if(U.current=!1,To(ae,F.portalNode)){const ue=Rv(h);ue==null||ue.focus()}else{var se;(se=F.beforeOutsideRef.current)==null||se.focus()}}}),!O&&ke("start"),n,ke("end"),He&&R.jsx(Io,{"data-type":"inside",ref:ie,onFocus:ae=>{if(d)Vr(Z()[0]);else if(F!=null&&F.preserveTabOrder&&F.portalNode)if(g&&(U.current=!0),To(ae,F.portalNode)){const ue=Av(h);ue==null||ue.focus()}else{var se;(se=F.afterOutsideRef.current)==null||se.focus()}}})]})}const Gv={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Hv={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},jo=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function Iu(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:a,dataRef:s}=e,{enabled:i=!0,escapeKey:o=!0,outsidePress:l=!0,outsidePressEvent:d="pointerdown",referencePress:u=!1,referencePressEvent:g="pointerdown",ancestorScroll:k=!1,bubbles:c,capture:p}=t,v=xa(),y=En(typeof l=="function"?l:()=>!1),T=typeof l=="function"?y:l,h=m.useRef(!1),b=m.useRef(!1),{escapeKey:w,outsidePress:E}=jo(c),{escapeKey:D,outsidePress:O}=jo(p),I=m.useRef(!1),_=En(F=>{var L;if(!n||!i||!o||F.key!=="Escape"||I.current)return;const V=(L=s.current.floatingContext)==null?void 0:L.nodeId,U=v?Tt(v.nodesRef.current,V):[];if(!w&&(F.stopPropagation(),U.length>0)){let M=!0;if(U.forEach(Y=>{var ne;if((ne=Y.context)!=null&&ne.open&&!Y.context.dataRef.current.__escapeKeyBubbles){M=!1;return}}),!M)return}r(!1,yv(F)?F.nativeEvent:F,"escape-key")}),x=En(F=>{var L;const V=()=>{var U;_(F),(U=mr(F))==null||U.removeEventListener("keydown",V)};(L=mr(F))==null||L.addEventListener("keydown",V)}),P=En(F=>{var L;const V=h.current;h.current=!1;const U=b.current;if(b.current=!1,d==="click"&&U||V||typeof T=="function"&&!T(F))return;const M=mr(F),Y="["+Ir("inert")+"]",ne=on(a.floating).querySelectorAll(Y);let K=Ne(M)?M:null;for(;K&&!er(K);){const W=tr(K);if(er(W)||!Ne(W))break;K=W}if(ne.length&&Ne(M)&&!fv(M)&&!an(M,a.floating)&&Array.from(ne).every(W=>!an(K,W)))return;if(Qe(M)&&N){const W=er(M),le=Nn(M),ie=/auto|scroll/,ke=W||ie.test(le.overflowX),He=W||ie.test(le.overflowY),ae=ke&&M.clientWidth>0&&M.scrollWidth>M.clientWidth,se=He&&M.clientHeight>0&&M.scrollHeight>M.clientHeight,ue=le.direction==="rtl",ge=se&&(ue?F.offsetX<=M.offsetWidth-M.clientWidth:F.offsetX>M.clientWidth),pe=ae&&F.offsetY>M.clientHeight;if(ge||pe)return}const te=(L=s.current.floatingContext)==null?void 0:L.nodeId,Z=v&&Tt(v.nodesRef.current,te).some(W=>{var le;return es(F,(le=W.context)==null?void 0:le.elements.floating)});if(es(F,a.floating)||es(F,a.domReference)||Z)return;const z=v?Tt(v.nodesRef.current,te):[];if(z.length>0){let W=!0;if(z.forEach(le=>{var ie;if((ie=le.context)!=null&&ie.open&&!le.context.dataRef.current.__outsidePressBubbles){W=!1;return}}),!W)return}r(!1,F,"outside-press")}),q=En(F=>{var L;const V=()=>{var U;P(F),(U=mr(F))==null||U.removeEventListener(d,V)};(L=mr(F))==null||L.addEventListener(d,V)});m.useEffect(()=>{if(!n||!i)return;s.current.__escapeKeyBubbles=w,s.current.__outsidePressBubbles=E;let F=-1;function L(ne){r(!1,ne,"ancestor-scroll")}function V(){window.clearTimeout(F),I.current=!0}function U(){F=window.setTimeout(()=>{I.current=!1},Na()?5:0)}const M=on(a.floating);o&&(M.addEventListener("keydown",D?x:_,D),M.addEventListener("compositionstart",V),M.addEventListener("compositionend",U)),T&&M.addEventListener(d,O?q:P,O);let Y=[];return k&&(Ne(a.domReference)&&(Y=pr(a.domReference)),Ne(a.floating)&&(Y=Y.concat(pr(a.floating))),!Ne(a.reference)&&a.reference&&a.reference.contextElement&&(Y=Y.concat(pr(a.reference.contextElement)))),Y=Y.filter(ne=>{var K;return ne!==((K=M.defaultView)==null?void 0:K.visualViewport)}),Y.forEach(ne=>{ne.addEventListener("scroll",L,{passive:!0})}),()=>{o&&(M.removeEventListener("keydown",D?x:_,D),M.removeEventListener("compositionstart",V),M.removeEventListener("compositionend",U)),T&&M.removeEventListener(d,O?q:P,O),Y.forEach(ne=>{ne.removeEventListener("scroll",L)}),window.clearTimeout(F)}},[s,a,o,T,d,n,r,k,i,w,E,_,D,x,P,O,q]),m.useEffect(()=>{h.current=!1},[T,d]);const S=m.useMemo(()=>({onKeyDown:_,...u&&{[Gv[g]]:F=>{r(!1,F.nativeEvent,"reference-press")},...g!=="click"&&{onClick(F){r(!1,F.nativeEvent,"reference-press")}}}}),[_,r,u,g]),N=m.useMemo(()=>({onKeyDown:_,onMouseDown(){b.current=!0},onMouseUp(){b.current=!0},[Hv[d]]:()=>{h.current=!0}}),[_,d]);return m.useMemo(()=>i?{reference:S,floating:N}:{},[i,S,N])}function Yv(e){const{open:t=!1,onOpenChange:n,elements:r}=e,a=Ru(),s=m.useRef({}),[i]=m.useState(()=>qv()),o=Au()!=null,[l,d]=m.useState(r.reference),u=En((c,p,v)=>{s.current.openEvent=c?p:void 0,i.emit("openchange",{open:c,event:p,reason:v,nested:o}),n==null||n(c,p,v)}),g=m.useMemo(()=>({setPositionReference:d}),[]),k=m.useMemo(()=>({reference:l||r.reference||null,floating:r.floating||null,domReference:r.reference}),[l,r.reference,r.floating]);return m.useMemo(()=>({dataRef:s,open:t,onOpenChange:u,elements:k,events:i,floatingId:a,refs:g}),[t,u,k,i,a,g])}function Oi(e){e===void 0&&(e={});const{nodeId:t}=e,n=Yv({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,a=r.elements,[s,i]=m.useState(null),[o,l]=m.useState(null),u=(a==null?void 0:a.domReference)||s,g=m.useRef(null),k=xa();pn(()=>{u&&(g.current=u)},[u]);const c=mp({...e,elements:{...a,...o&&{reference:o}}}),p=m.useCallback(b=>{const w=Ne(b)?{getBoundingClientRect:()=>b.getBoundingClientRect(),getClientRects:()=>b.getClientRects(),contextElement:b}:b;l(w),c.refs.setReference(w)},[c.refs]),v=m.useCallback(b=>{(Ne(b)||b===null)&&(g.current=b,i(b)),(Ne(c.refs.reference.current)||c.refs.reference.current===null||b!==null&&!Ne(b))&&c.refs.setReference(b)},[c.refs]),y=m.useMemo(()=>({...c.refs,setReference:v,setPositionReference:p,domReference:g}),[c.refs,v,p]),T=m.useMemo(()=>({...c.elements,domReference:u}),[c.elements,u]),h=m.useMemo(()=>({...c,...r,refs:y,elements:T,nodeId:t}),[c,y,T,t,r]);return pn(()=>{r.dataRef.current.floatingContext=h;const b=k==null?void 0:k.nodesRef.current.find(w=>w.id===t);b&&(b.context=h)}),m.useMemo(()=>({...c,context:h,refs:y,elements:T}),[c,y,T,h])}function is(){return kv()&&bu()}function qu(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,events:a,dataRef:s,elements:i}=e,{enabled:o=!0,visibleOnly:l=!0}=t,d=m.useRef(!1),u=m.useRef(-1),g=m.useRef(!0);m.useEffect(()=>{if(!o)return;const c=vn(i.domReference);function p(){!n&&Qe(i.domReference)&&i.domReference===gr(on(i.domReference))&&(d.current=!0)}function v(){g.current=!0}function y(){g.current=!1}return c.addEventListener("blur",p),is()&&(c.addEventListener("keydown",v,!0),c.addEventListener("pointerdown",y,!0)),()=>{c.removeEventListener("blur",p),is()&&(c.removeEventListener("keydown",v,!0),c.removeEventListener("pointerdown",y,!0))}},[i.domReference,n,o]),m.useEffect(()=>{if(!o)return;function c(p){let{reason:v}=p;(v==="reference-press"||v==="escape-key")&&(d.current=!0)}return a.on("openchange",c),()=>{a.off("openchange",c)}},[a,o]),m.useEffect(()=>()=>{wn(u)},[]);const k=m.useMemo(()=>({onMouseLeave(){d.current=!1},onFocus(c){if(d.current)return;const p=mr(c.nativeEvent);if(l&&Ne(p)){if(is()&&!c.relatedTarget){if(!g.current&&!Tu(p))return}else if(!pv(p))return}r(!0,c.nativeEvent,"focus")},onBlur(c){d.current=!1;const p=c.relatedTarget,v=c.nativeEvent,y=Ne(p)&&p.hasAttribute(Ir("focus-guard"))&&p.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var T;const h=gr(i.domReference?i.domReference.ownerDocument:document);!p&&h===i.domReference||an((T=s.current.floatingContext)==null?void 0:T.refs.floating.current,h)||an(i.domReference,h)||y||r(!1,v,"focus")})}}),[s,i.domReference,r,l]);return m.useMemo(()=>o?{reference:k}:{},[o,k])}function os(e,t,n){const r=new Map,a=n==="item";let s=e;if(a&&e){const{[Eo]:i,[Ro]:o,...l}=e;s=l}return{...n==="floating"&&{tabIndex:-1,[wv]:""},...s,...t.map(i=>{const o=i?i[n]:null;return typeof o=="function"?e?o(e):null:o}).concat(e).reduce((i,o)=>(o&&Object.entries(o).forEach(l=>{let[d,u]=l;if(!(a&&[Eo,Ro].includes(d)))if(d.indexOf("on")===0){if(r.has(d)||r.set(d,[]),typeof u=="function"){var g;(g=r.get(d))==null||g.push(u),i[d]=function(){for(var k,c=arguments.length,p=new Array(c),v=0;v<c;v++)p[v]=arguments[v];return(k=r.get(d))==null?void 0:k.map(y=>y(...p)).find(y=>y!==void 0)}}}else i[d]=u}),i),{})}}function _u(e){e===void 0&&(e=[]);const t=e.map(o=>o==null?void 0:o.reference),n=e.map(o=>o==null?void 0:o.floating),r=e.map(o=>o==null?void 0:o.item),a=m.useCallback(o=>os(o,e,"reference"),t),s=m.useCallback(o=>os(o,e,"floating"),n),i=m.useCallback(o=>os(o,e,"item"),r);return m.useMemo(()=>({getReferenceProps:a,getFloatingProps:s,getItemProps:i}),[a,s,i])}function $v(e,t,n){n===void 0&&(n=!0);let r=e.filter(s=>{var i;return s.parentId===t&&((i=s.context)==null?void 0:i.open)}),a=r;for(;a.length;)a=n?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(o=>{var l;return s.parentId===o.id&&((l=s.context)==null?void 0:l.open)})}):e,r=r.concat(a);return r}function Fo(e,t){const[n,r]=e;let a=!1;const s=t.length;for(let i=0,o=s-1;i<s;o=i++){const[l,d]=t[i]||[0,0],[u,g]=t[o]||[0,0];d>=r!=g>=r&&n<=(u-l)*(r-d)/(g-d)+l&&(a=!a)}return a}function Wv(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function Nu(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:n=!1,requireIntent:r=!0}=e;let a,s=!1,i=null,o=null,l=performance.now();function d(g,k){const c=performance.now(),p=c-l;if(i===null||o===null||p===0)return i=g,o=k,l=c,null;const v=g-i,y=k-o,h=Math.sqrt(v*v+y*y)/p;return i=g,o=k,l=c,h}const u=g=>{let{x:k,y:c,placement:p,elements:v,onClose:y,nodeId:T,tree:h}=g;return function(w){function E(){clearTimeout(a),y()}if(clearTimeout(a),!v.domReference||!v.floating||p==null||k==null||c==null)return;const{clientX:D,clientY:O}=w,I=[D,O],_=Pv(w),x=w.type==="mouseleave",P=as(v.floating,_),q=as(v.domReference,_),S=v.domReference.getBoundingClientRect(),N=v.floating.getBoundingClientRect(),F=p.split("-")[0],L=k>N.right-N.width/2,V=c>N.bottom-N.height/2,U=Wv(I,S),M=N.width>S.width,Y=N.height>S.height,ne=(M?S:N).left,K=(M?S:N).right,te=(Y?S:N).top,Z=(Y?S:N).bottom;if(P&&(s=!0,!x))return;if(q&&(s=!1),q&&!x){s=!0;return}if(x&&Ne(w.relatedTarget)&&as(v.floating,w.relatedTarget)||h&&$v(h.nodesRef.current,T).some(le=>{let{context:ie}=le;return ie==null?void 0:ie.open}))return;if(F==="top"&&c>=S.bottom-1||F==="bottom"&&c<=S.top+1||F==="left"&&k>=S.right-1||F==="right"&&k<=S.left+1)return E();let z=[];switch(F){case"top":z=[[ne,S.top+1],[ne,N.bottom-1],[K,N.bottom-1],[K,S.top+1]];break;case"bottom":z=[[ne,N.top+1],[ne,S.bottom-1],[K,S.bottom-1],[K,N.top+1]];break;case"left":z=[[N.right-1,Z],[N.right-1,te],[S.left+1,te],[S.left+1,Z]];break;case"right":z=[[S.right-1,Z],[S.right-1,te],[N.left+1,te],[N.left+1,Z]];break}function W(le){let[ie,ke]=le;switch(F){case"top":{const He=[M?ie+t/2:L?ie+t*4:ie-t*4,ke+t+1],ae=[M?ie-t/2:L?ie+t*4:ie-t*4,ke+t+1],se=[[N.left,L||M?N.bottom-t:N.top],[N.right,L?M?N.bottom-t:N.top:N.bottom-t]];return[He,ae,...se]}case"bottom":{const He=[M?ie+t/2:L?ie+t*4:ie-t*4,ke-t],ae=[M?ie-t/2:L?ie+t*4:ie-t*4,ke-t],se=[[N.left,L||M?N.top+t:N.bottom],[N.right,L?M?N.top+t:N.bottom:N.top+t]];return[He,ae,...se]}case"left":{const He=[ie+t+1,Y?ke+t/2:V?ke+t*4:ke-t*4],ae=[ie+t+1,Y?ke-t/2:V?ke+t*4:ke-t*4];return[...[[V||Y?N.right-t:N.left,N.top],[V?Y?N.right-t:N.left:N.right-t,N.bottom]],He,ae]}case"right":{const He=[ie-t,Y?ke+t/2:V?ke+t*4:ke-t*4],ae=[ie-t,Y?ke-t/2:V?ke+t*4:ke-t*4],se=[[V||Y?N.left+t:N.right,N.top],[V?Y?N.left+t:N.right:N.left+t,N.bottom]];return[He,ae,...se]}}}if(!Fo([D,O],z)){if(s&&!U)return E();if(!x&&r){const le=d(w.clientX,w.clientY);if(le!==null&&le<.1)return E()}Fo([D,O],W([k,c]))?!s&&r&&(a=window.setTimeout(E,40)):E()}}};return u.__options={blockPointerEvents:n},u}const Ma=()=>{const{cn:e}=ee();return f.createElement(Ad,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Si=()=>{const{cn:e}=ee();return f.createElement(Ad,{title:kn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},Ot=m.createContext(null),jr=(e,t)=>{var n,r,a;const{size:s,error:i,errorId:o}=e,l=m.useContext(Ot),d=_n(),u=(n=e.id)!==null&&n!==void 0?n:`${t}-${d}`,g=o??`${t}-error-${d}`,k=`${t}-description-${d}`,c=(l==null?void 0:l.disabled)||e.disabled,p=((l==null?void 0:l.readOnly)||e.readOnly)&&!c||void 0,v=!c&&!p&&!!(i||l!=null&&l.error),y=!c&&!p&&!!i&&typeof i!="boolean",T=Object.assign({},v?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:y,hasError:v,errorId:g,inputDescriptionId:k,size:(r=s??(l==null?void 0:l.size))!==null&&r!==void 0?r:"medium",readOnly:p,inputProps:Object.assign(Object.assign({id:u},T),{"aria-describedby":rt(e["aria-describedby"],{[k]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:y,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:v&&!!(l!=null&&l.error)})||void 0,disabled:c})}},Pu={global:{dateLocale:qd,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},ju={global:{dateLocale:Nd,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Fu=(e="nb")=>{switch(e){case"nn":return Nd;case"en":return qd;default:return _d}},xu=e=>{switch(e){case"nn":return ju.DatePicker;case"en":case"en-GB":return Pu.DatePicker;default:return}},zv=e=>{switch(e){case"nn":return ju.global;case"en":case"en-GB":return Pu.global;default:return}},[Mu,Ua]=Oa();var Xv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const[Qv,Di]=Oa({errorMessage:"useDateInputContext must be used with DateInputContext"}),Uu=m.forwardRef((e,t)=>{const{className:n,hideLabel:r=!1,label:a,description:s,variant:i="datepicker",setAnchorRef:o}=e,l=Xv(e,["className","hideLabel","label","description","variant","setAnchorRef"]),d=m.useRef(null),u=Ua().translate,{cn:g}=ee(),k=i==="datepicker",c={prefix:k?"datepicker-input":"monthpicker-input",iconTitle:{open:k?"openDatePicker":"openMonthPicker",close:k?"closeDatePicker":"closeMonthPicker"}},p=Di(),{inputProps:v,size:y="medium",inputDescriptionId:T,errorId:h,showErrorMsg:b,hasError:w,readOnly:E}=jr(e,c.prefix);return f.createElement("div",{className:g(n,"navds-form-field",`navds-form-field--${y}`,"navds-date__field",{"navds-text-field--error":w,"navds-date__field--error":w,"navds-form-field--disabled":!!v.disabled,"navds-text-field--disabled":!!v.disabled,"navds-form-field--readonly":E,"navds-text-field--readonly":E,"navds-date__field--readonly":E})},f.createElement(qn,{htmlFor:v.id,size:y,className:g("navds-form-field__label",{"navds-sr-only":r})},E&&f.createElement(Ma,null),a),!!s&&f.createElement(qe,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":r}),id:T,size:y},s),f.createElement("div",{className:g("navds-date__field-wrapper")},f.createElement("input",Object.assign({ref:t},Ke(l,["error","errorId","size"]),v,{autoComplete:"off","aria-controls":p!=null&&p.open?p.ariaId:void 0,readOnly:E,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${y}`),size:k?11:14})),f.createElement("button",{disabled:v.disabled||E,tabIndex:E||p!=null&&p.open?-1:0,onClick:()=>{p==null||p.onOpen(),o==null||o(d.current)},type:"button",className:g("navds-date__field-button"),ref:d},f.createElement(Mm,{title:u(c.iconTitle[p!=null&&p.open?"close":"open"])}))),f.createElement("div",{className:g("navds-form-field__error"),id:h,"aria-relevant":"additions removals","aria-live":"polite"},b&&f.createElement(it,{size:y,showIcon:!0},e.error)))}),Zv=m.forwardRef((e,t)=>f.createElement(Uu,Object.assign({},e,{ref:t})));m.forwardRef((e,t)=>f.createElement(Uu,Object.assign({},e,{variant:"monthpicker",ref:t})));var Jv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const eb=m.forwardRef((e,t)=>{var{className:n}=e,r=Jv(e,["className"]);const{cn:a}=ee();return f.createElement("div",Object.assign({},r,{ref:t,className:a("navds-modal__body",n)}))});var nb=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const rb=m.forwardRef((e,t)=>{var{className:n}=e,r=nb(e,["className"]);const{cn:a}=ee();return f.createElement("div",Object.assign({},r,{ref:t,className:a("navds-modal__footer",n)}))});var tb=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bu=m.forwardRef((e,t)=>{var{children:n,className:r,closeButton:a=!0}=e,s=tb(e,["children","className","closeButton"]);const{cn:i}=ee(),o=Da(),l=kn("global");return f.createElement("div",Object.assign({},s,{ref:t,className:i("navds-modal__header",r)}),o.closeHandler&&a&&f.createElement(Xe,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:d=>{["Enter"," "].includes(d.key)&&d.repeat&&d.preventDefault()},onClick:o.closeHandler,icon:f.createElement(ei,{title:l("close")})}),n)}),xo=({clientX:e,clientY:t},{left:n,top:r,right:a,bottom:s})=>!(e<n||t<r||e>a||t>s);function ab(e,t,n){if(!(t&&t.closeButton===!1))return n?()=>{var r;return n()!==!1&&((r=e.current)===null||r===void 0?void 0:r.close())}:()=>{var r;return(r=e.current)===null||r===void 0?void 0:r.close()}}const Ct="navds-modal__document-body";function sb(e,t,n){f.useEffect(()=>{if(n||!e.current||!t)return;e.current.open&&document.body.classList.add(Ct);const r=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Ct):document.body.classList.remove(Ct)});return r.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{r.disconnect(),document.body.classList.remove(Ct)}},[e,t,n])}const Gr=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Vu(e,t){var n="on"+t.type.toLowerCase();return typeof e[n]=="function"&&e[n](t),e.dispatchEvent(t)}function Et(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Lu(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function ib(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function ls(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Ku(e){var t=["button","input","keygen","select","textarea"],n=t.map(function(i){return i+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var r=e.querySelector(n.join(", "));if(!r&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(r=Ku(a[s].shadowRoot),r));s++);return r}function Mo(e){return e.isConnected||document.body.contains(e)}function Cu(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var n=ye.formSubmitter;if(!n){var r=e.target,a="getRootNode"in r&&r.getRootNode()||document;n=a.activeElement}return!n||n.form!==t?null:n}function ob(e){if(!e.defaultPrevented){var t=e.target,n=ye.imagemapUseValue,r=Cu(e);n===null&&r&&(n=r.value);var a=Et(t);if(a){var s=r&&r.getAttribute("formmethod")||t.getAttribute("method");s==="dialog"&&(e.preventDefault(),n!=null?a.close(n):a.close())}}}function Gu(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",ob,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,r=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),a,s=function(i){if(i.target===e){var o="DOMNodeRemoved";n|=i.type.substr(0,o.length)===o,window.clearTimeout(a),a=window.setTimeout(r,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Gu.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Mo(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),ye.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Ku(this.dialog_)),Lu(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Mo(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!ye.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,ye.needsCentering(this.dialog_)?(ye.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Vu(this.dialog_,t)}};var ye={};ye.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"};ye.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],r=null;try{r=n.cssRules}catch{}if(r)for(var a=0;a<r.length;++a){var s=r[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!ib(i,e))){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};ye.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!ye.isInlinePositionSetByStylesheet(e)};ye.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Gu(e)};ye.registerDialog=function(e){e.showModal||ye.forceRegisterDialog(e)};ye.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var n=[];t.forEach(function(r){for(var a=0,s;s=r.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&n.push(s),n=n.concat(s.querySelectorAll("dialog")))}),n.length&&e(n)}))};ye.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};ye.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};ye.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,n;n=this.pendingDialogStack[t];++t)n.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var r=this.pendingDialogStack[0];if(r){var a=r.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};ye.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Et(e);){for(var t=0,n;n=this.pendingDialogStack[t];++t)if(n.dialog===e)return t===0;e=e.parentElement}return!1};ye.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Lu(t),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],r=n.dialog,a=r.compareDocumentPosition(t);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};ye.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&Vu(n.dialog,t)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};ye.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};ye.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};ye.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Gr&&(ye.dm=new ye.DialogManager,ye.formSubmitter=null,ye.imagemapUseValue=null);if(Gr){var Uo=document.createElement("form");if(Uo.setAttribute("method","dialog"),Uo.method!=="dialog"){var Kr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Kr){var lb=Kr.get;Kr.get=function(){return ls(this)?"dialog":lb.call(this)};var db=Kr.set;Kr.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):db.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Kr)}}document.addEventListener("click",function(e){if(ye.formSubmitter=null,ye.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var n=e.composedPath();t=n.shift()||t}if(!(!t||!ls(t.form))){var r=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!r){if(!(t.localName==="input"&&t.type==="image"))return;ye.imagemapUseValue=e.offsetX+","+e.offsetY}var a=Et(t);a&&(ye.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,n=Et(t);if(!n){var r=Cu(e),a=r&&r.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&e.preventDefault()}});var ub=HTMLFormElement.prototype.submit,gb=function(){if(!ls(this))return ub.call(this);var e=Et(this);e&&e.close()};HTMLFormElement.prototype.submit=gb}var mb=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const cr=m.forwardRef((e,t)=>{var n,r,{header:a,children:s,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:d,width:u,placement:g,portal:k,className:c,"aria-labelledby":p,style:v,onClick:y,onMouseDown:T}=e,h=mb(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:b}=ee(),w=m.useRef(b("navds-modal--polyfilled")),E=m.useRef(null),D=_r(E,t),O=_n(),I=(n=ri())===null||n===void 0?void 0:n.rootElement,_=Bv({root:I}),x=Di(!1),P=Da(!1)!==void 0;P&&!x&&console.error("Modals should not be nested"),m.useEffect(()=>{Gr&&E.current&&_&&(ye.registerDialog(E.current),E.current.classList.add(w.current)),E.current&&_&&(E.current.autofocus=!0)},[_]),m.useEffect(()=>{E.current&&_&&i!==void 0&&(i&&!E.current.open?E.current.showModal():!i&&E.current.open&&E.current.close())},[_,i]),sb(E,_,P);const q=typeof u=="string"&&["small","medium"].includes(u),S=b("navds-modal",c,{[w.current]:Gr,"navds-modal--autowidth":!u,[`navds-modal--${u}`]:q,"navds-modal--top":g==="top"&&!Gr}),N=Object.assign(Object.assign({},v),q?{}:{width:u}),F=m.useRef({clientX:0,clientY:0}),L=K=>{F.current=K},V=d&&!Gr,U=K=>{if(K.target!==E.current)return;const te=E.current.getBoundingClientRect();xo(F.current,te)||xo(K,te)||o!==void 0&&o()===!1||E.current.close()},M=K=>{o&&o()===!1&&K.preventDefault()},Y=!p&&!h["aria-label"]&&a?O:p,ne=f.createElement("dialog",Object.assign({},h,{ref:D,className:S,style:N,onCancel:Yr(l,M),onClick:V?Yr(y,U):y,onMouseDown:V?Yr(T,L):T,"aria-labelledby":Y}),f.createElement(Dk,{closeHandler:ab(E,a,o),ref:E},a&&f.createElement(Bu,null,a.label&&f.createElement(nr,{className:b("navds-modal__label")},a.label),f.createElement(Qs,{size:(r=a.size)!==null&&r!==void 0?r:"medium",level:"1",id:O},a.icon&&f.createElement("span",{className:b("navds-modal__header-icon")},a.icon),a.heading)),s));return k?_?zs.createPortal(ne,_):null:ne});cr.Header=Bu;cr.Body=eb;cr.Footer=rb;var kb=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const cb=m.forwardRef((e,t)=>{var{className:n}=e,r=kb(e,["className"]);const{cn:a}=ee();return f.createElement("div",Object.assign({},r,{ref:t,className:a("navds-popover__content",n)}))});var fb=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Hu=m.forwardRef((e,t)=>{var{className:n,children:r,anchorEl:a,arrow:s=!0,open:i,onClose:o,placement:l="top",offset:d,strategy:u,flip:g=!0}=e,k=fb(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:c}=ee(),p=m.useRef(null),v=Da(!1)!==void 0,y=Di(!1),T=u??(v?"fixed":"absolute"),h=y?!1:g,b=at(!1),{update:w,refs:E,placement:D,middlewareData:{arrow:{x:O,y:I}={}},floatingStyles:_}=Oi({strategy:T,placement:l,open:i,middleware:[di(d??(b?8:s?16:4)),h&&gi({padding:5,fallbackPlacements:["bottom","top"]}),ui({padding:12}),mi({element:p,padding:8})]});Qr(()=>{E.setReference(a)},[a]);const x=_r(E.setFloating,t);Qr(()=>{if(!E.reference.current||!E.floating.current||!i)return;const q=li(E.reference.current,E.floating.current,w);return()=>q()},[E.floating,E.reference,w,i,a]);const P={top:"bottom",right:"left",bottom:"top",left:"right"}[D.split("-")[0]];return f.createElement(qf,{asChild:!0,safeZone:{anchor:a,dismissable:E.floating.current},onDismiss:()=>i&&(o==null?void 0:o()),enabled:i},f.createElement("div",Object.assign({ref:x},k,{className:c("navds-popover",n,{"navds-popover--hidden":!i||!a}),style:Object.assign(Object.assign({},k.style),_),"data-placement":D,"aria-hidden":!i||!a}),r,s&&!b&&f.createElement("div",{ref:q=>{p.current=q},style:Object.assign(Object.assign(Object.assign({},O!=null?{left:O}:{}),I!=null?{top:I}:{}),P?{[P]:"-0.5rem"}:{}),className:c("navds-popover__arrow")})))});Hu.Content=cb;const pb={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},yb=({open:e,children:t,onClose:n,anchor:r,locale:a,translate:s,variant:i,popoverProps:o})=>{const l=kn("global",zv(a)),{cn:d}=ee(),u=m.useRef(null),g=Da(!1)!==void 0;return qk("screen and (min-width: 768px)",!0)&&!g?f.createElement(Hu,Object.assign({arrow:!1,anchorEl:r,open:e,onClose:n,placement:"bottom-start",role:"dialog",className:d("navds-date__popover",{"navds-date":i==="month"}),flip:!1},o),t):f.createElement(cr,{ref:u,open:e,onClose:c=>{c.stopPropagation(),n()},"aria-label":s(pb[i]),className:d("navds-date__modal",{"navds-date__nested-modal":g,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},f.createElement("div",{className:d("navds-date__modal-body")},t,f.createElement(Xe,{variant:"tertiary",onClick:()=>{var c;return(c=u==null?void 0:u.current)===null||c===void 0?void 0:c.close()},size:"small",type:"button"},l("close"))))};function Yu(e){return!!(e&&typeof e=="object"&&"from"in e)}const ds={},bt={};function Rt(e,t){try{const r=(ds[e]||(ds[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(t).split("GMT")[1]||"";return r in bt?bt[r]:Bo(r,r.split(":"))}catch{if(e in bt)return bt[e];const n=e==null?void 0:e.match(vb);return n?Bo(e,n.slice(1)):NaN}}const vb=/([+-]\d\d):?(\d\d)?/;function Bo(e,t){const n=+t[0],r=+(t[1]||0);return bt[e]=n>0?n*60+r:n*60-r}class Hn extends Date{constructor(...t){super(),t.length>1&&typeof t[t.length-1]=="string"&&(this.timeZone=t.pop()),this.internal=new Date,isNaN(Rt(this.timeZone,this))?this.setTime(NaN):t.length?typeof t[0]=="number"&&(t.length===1||t.length===2&&typeof t[1]!="number")?this.setTime(t[0]):typeof t[0]=="string"?this.setTime(+new Date(t[0])):t[0]instanceof Date?this.setTime(+t[0]):(this.setTime(+new Date(...t)),$u(this),Bs(this)):this.setTime(Date.now())}static tz(t,...n){return n.length?new Hn(...n,t):new Hn(Date.now(),t)}withTimeZone(t){return new Hn(+this,t)}getTimezoneOffset(){return-Rt(this.timeZone,this)}setTime(t){return Date.prototype.setTime.apply(this,arguments),Bs(this),+this}[Symbol.for("constructDateFrom")](t){return new Hn(+new Date(t),this.timeZone)}}const Vo=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Vo.test(e))return;const t=e.replace(Vo,"$1UTC");Hn.prototype[t]&&(e.startsWith("get")?Hn.prototype[e]=function(){return this.internal[t]()}:(Hn.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),bb(this),+this},Hn.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),Bs(this),+this}))});function Bs(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function bb(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),$u(e)}function $u(e){const t=Rt(e.timeZone,e),n=new Date(+e);n.setUTCHours(n.getUTCHours()-1);const r=-new Date(+e).getTimezoneOffset(),a=-new Date(+n).getTimezoneOffset(),s=r-a,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const o=r-t;o&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+o);const l=Rt(e.timeZone,e),u=-new Date(+e).getTimezoneOffset()-l,g=l!==t,k=u-o;if(g&&k){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+k);const c=Rt(e.timeZone,e),p=l-c;p&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+p),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+p))}}class sn extends Hn{static tz(t,...n){return n.length?new sn(...n,t):new sn(Date.now(),t)}toISOString(){const[t,n,r]=this.tzComponents(),a=`${t}${n}:${r}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[t,n,r,a]=this.internal.toUTCString().split(" ");return`${t==null?void 0:t.slice(0,-1)} ${r} ${n} ${a}`}toTimeString(){const t=this.internal.toUTCString().split(" ")[4],[n,r,a]=this.tzComponents();return`${t} GMT${n}${r}${a} (${hb(this.timeZone,this)})`}toLocaleString(t,n){return Date.prototype.toLocaleString.call(this,t,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(t,n){return Date.prototype.toLocaleDateString.call(this,t,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(t,n){return Date.prototype.toLocaleTimeString.call(this,t,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const t=this.getTimezoneOffset(),n=t>0?"-":"+",r=String(Math.floor(Math.abs(t)/60)).padStart(2,"0"),a=String(Math.abs(t)%60).padStart(2,"0");return[n,r,a]}withTimeZone(t){return new sn(+this,t)}[Symbol.for("constructDateFrom")](t){return new sn(+new Date(t),this.timeZone)}}function hb(e,t){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(t).slice(12)}var re;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(re||(re={}));var Ve;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Ve||(Ve={}));var xn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(xn||(xn={}));var hn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(hn||(hn={}));const Lo=5,Tb=4;function Eb(e,t){const n=t.startOfMonth(e),r=n.getDay()>0?n.getDay():7,a=t.addDays(e,-r+1),s=t.addDays(a,Lo*7-1);return t.getMonth(e)===t.getMonth(s)?Lo:Tb}function Wu(e,t){const n=t.startOfMonth(e),r=n.getDay();return r===1?n:r===0?t.addDays(n,-1*6):t.addDays(n,-1*(r-1))}function Rb(e,t){const n=Wu(e,t),r=Eb(e,t);return t.addDays(n,r*7-1)}class sr{constructor(t,n){this.Date=Date,this.today=()=>{var r;return(r=this.overrides)!=null&&r.today?this.overrides.today():this.options.timeZone?sn.tz(this.options.timeZone):new this.Date},this.newDate=(r,a,s)=>{var i;return(i=this.overrides)!=null&&i.newDate?this.overrides.newDate(r,a,s):this.options.timeZone?new sn(r,a,s,this.options.timeZone):new Date(r,a,s)},this.addDays=(r,a)=>{var s;return(s=this.overrides)!=null&&s.addDays?this.overrides.addDays(r,a):Pr(r,a)},this.addMonths=(r,a)=>{var s;return(s=this.overrides)!=null&&s.addMonths?this.overrides.addMonths(r,a):et(r,a)},this.addWeeks=(r,a)=>{var s;return(s=this.overrides)!=null&&s.addWeeks?this.overrides.addWeeks(r,a):Sp(r,a)},this.addYears=(r,a)=>{var s;return(s=this.overrides)!=null&&s.addYears?this.overrides.addYears(r,a):Sr(r,a)},this.differenceInCalendarDays=(r,a)=>{var s;return(s=this.overrides)!=null&&s.differenceInCalendarDays?this.overrides.differenceInCalendarDays(r,a):Zn(r,a)},this.differenceInCalendarMonths=(r,a)=>{var s;return(s=this.overrides)!=null&&s.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(r,a):zd(r,a)},this.eachMonthOfInterval=r=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(r):Qd(r)},this.endOfBroadcastWeek=r=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(r):Rb(r,this)},this.endOfISOWeek=r=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(r):xp(r)},this.endOfMonth=r=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(r):ja(r)},this.endOfWeek=(r,a)=>{var s;return(s=this.overrides)!=null&&s.endOfWeek?this.overrides.endOfWeek(r,a):Zd(r,this.options)},this.endOfYear=r=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(r):qt(r)},this.format=(r,a,s)=>{var o;const i=(o=this.overrides)!=null&&o.format?this.overrides.format(r,a,this.options):nn(r,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=r=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(r):fi(r)},this.getMonth=(r,a)=>{var s;return(s=this.overrides)!=null&&s.getMonth?this.overrides.getMonth(r,this.options):vi(r,this.options)},this.getYear=(r,a)=>{var s;return(s=this.overrides)!=null&&s.getYear?this.overrides.getYear(r,this.options):bi(r,this.options)},this.getWeek=(r,a)=>{var s;return(s=this.overrides)!=null&&s.getWeek?this.overrides.getWeek(r,this.options):yi(r,this.options)},this.isAfter=(r,a)=>{var s;return(s=this.overrides)!=null&&s.isAfter?this.overrides.isAfter(r,a):hi(r,a)},this.isBefore=(r,a)=>{var s;return(s=this.overrides)!=null&&s.isBefore?this.overrides.isBefore(r,a):_t(r,a)},this.isDate=r=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(r):Wd(r)},this.isSameDay=(r,a)=>{var s;return(s=this.overrides)!=null&&s.isSameDay?this.overrides.isSameDay(r,a):Dr(r,a)},this.isSameMonth=(r,a)=>{var s;return(s=this.overrides)!=null&&s.isSameMonth?this.overrides.isSameMonth(r,a):Wy(r,a)},this.isSameYear=(r,a)=>{var s;return(s=this.overrides)!=null&&s.isSameYear?this.overrides.isSameYear(r,a):iu(r,a)},this.max=r=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(r):Dp(r)},this.min=r=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(r):Ip(r)},this.setMonth=(r,a)=>{var s;return(s=this.overrides)!=null&&s.setMonth?this.overrides.setMonth(r,a):ou(r,a)},this.setYear=(r,a)=>{var s;return(s=this.overrides)!=null&&s.setYear?this.overrides.setYear(r,a):lu(r,a)},this.startOfBroadcastWeek=(r,a)=>{var s;return(s=this.overrides)!=null&&s.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(r,this):Wu(r,this)},this.startOfDay=r=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(r):Rn(r)},this.startOfISOWeek=r=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(r):Or(r)},this.startOfMonth=r=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(r):yr(r)},this.startOfWeek=(r,a)=>{var s;return(s=this.overrides)!=null&&s.startOfWeek?this.overrides.startOfWeek(r,this.options):rr(r,this.options)},this.startOfYear=r=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(r):ot(r)},this.options={locale:Ia,...t},this.overrides=n}getDigitMap(){const{numerals:t="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:t}),r={};for(let a=0;a<10;a++)r[a.toString()]=n.format(a);return r}replaceDigits(t){const n=this.getDigitMap();return t.replace(/\d/g,r=>n[r]||r)}formatNumber(t){return this.replaceDigits(t.toString())}}const Xn=new sr;class zu{constructor(t,n,r=Xn){this.date=t,this.displayMonth=n,this.outside=!!(n&&!r.isSameMonth(t,n)),this.dateLib=r}isEqualTo(t){return this.dateLib.isSameDay(t.date,this.date)&&this.dateLib.isSameMonth(t.displayMonth,this.displayMonth)}}class Ab{constructor(t,n){this.date=t,this.weeks=n}}class wb{constructor(t,n){this.days=n,this.weekNumber=t}}function Jn(e,t,n=!1,r=Xn){let{from:a,to:s}=e;const{differenceInCalendarDays:i,isSameDay:o}=r;return a&&s?(i(s,a)<0&&([a,s]=[s,a]),i(t,a)>=(n?1:0)&&i(s,t)>=(n?1:0)):!n&&s?o(s,t):!n&&a?o(a,t):!1}function Xu(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Ii(e){return!!(e&&typeof e=="object"&&"from"in e)}function Qu(e){return!!(e&&typeof e=="object"&&"after"in e)}function Zu(e){return!!(e&&typeof e=="object"&&"before"in e)}function Ju(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function eg(e,t){return Array.isArray(e)&&e.every(t.isDate)}function Dn(e,t,n=Xn){const r=Array.isArray(t)?t:[t],{isSameDay:a,differenceInCalendarDays:s,isAfter:i}=n;return r.some(o=>{if(typeof o=="boolean")return o;if(n.isDate(o))return a(e,o);if(eg(o,n))return o.includes(e);if(Ii(o))return Jn(o,e,!1,n);if(Ju(o))return Array.isArray(o.dayOfWeek)?o.dayOfWeek.includes(e.getDay()):o.dayOfWeek===e.getDay();if(Xu(o)){const l=s(o.before,e),d=s(o.after,e),u=l>0,g=d<0;return i(o.before,o.after)?g&&u:u||g}return Qu(o)?s(e,o.after)>0:Zu(o)?s(o.before,e)>0:typeof o=="function"?o(e):!1})}function Ob(e,t,n){const{disabled:r,hidden:a,modifiers:s,showOutsideDays:i,broadcastCalendar:o,today:l}=t,{isSameDay:d,isSameMonth:u,startOfMonth:g,isBefore:k,endOfMonth:c,isAfter:p}=n,v=t.startMonth&&g(t.startMonth),y=t.endMonth&&c(t.endMonth),T={[Ve.focused]:[],[Ve.outside]:[],[Ve.disabled]:[],[Ve.hidden]:[],[Ve.today]:[]},h={};for(const b of e){const{date:w,displayMonth:E}=b,D=!!(E&&!u(w,E)),O=!!(v&&k(w,v)),I=!!(y&&p(w,y)),_=!!(r&&Dn(w,r,n)),x=!!(a&&Dn(w,a,n))||O||I||!o&&!i&&D||o&&i===!1&&D,P=d(w,l??n.today());D&&T.outside.push(b),_&&T.disabled.push(b),x&&T.hidden.push(b),P&&T.today.push(b),s&&Object.keys(s).forEach(q=>{const S=s==null?void 0:s[q];S&&Dn(w,S,n)&&(h[q]?h[q].push(b):h[q]=[b])})}return b=>{const w={[Ve.focused]:!1,[Ve.disabled]:!1,[Ve.hidden]:!1,[Ve.outside]:!1,[Ve.today]:!1},E={};for(const D in T){const O=T[D];w[D]=O.some(I=>I===b)}for(const D in h)E[D]=h[D].some(O=>O===b);return{...w,...E}}}function Sb(e,t,n={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[s])=>(n[s]?a.push(n[s]):t[Ve[s]]?a.push(t[Ve[s]]):t[xn[s]]&&a.push(t[xn[s]]),a),[t[re.Day]])}function Db(e){return f.createElement("button",{...e})}function Ib(e){return f.createElement("span",{...e})}function qb(e){const{size:t=24,orientation:n="left",className:r}=e;return f.createElement("svg",{className:r,width:t,height:t,viewBox:"0 0 24 24"},n==="up"&&f.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&f.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&f.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&f.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function _b(e){const{day:t,modifiers:n,...r}=e;return f.createElement("td",{...r})}function Nb(e){const{day:t,modifiers:n,...r}=e,a=f.useRef(null);return f.useEffect(()=>{var s;n.focused&&((s=a.current)==null||s.focus())},[n.focused]),f.createElement("button",{ref:a,...r})}function Pb(e){const{options:t,className:n,components:r,classNames:a,...s}=e,i=[a[re.Dropdown],n].join(" "),o=t==null?void 0:t.find(({value:l})=>l===s.value);return f.createElement("span",{"data-disabled":s.disabled,className:a[re.DropdownRoot]},f.createElement(r.Select,{className:i,...s},t==null?void 0:t.map(({value:l,label:d,disabled:u})=>f.createElement(r.Option,{key:l,value:l,disabled:u},d))),f.createElement("span",{className:a[re.CaptionLabel],"aria-hidden":!0},o==null?void 0:o.label,f.createElement(r.Chevron,{orientation:"down",size:18,className:a[re.Chevron]})))}function jb(e){return f.createElement("div",{...e})}function Fb(e){return f.createElement("div",{...e})}function xb(e){const{calendarMonth:t,displayIndex:n,...r}=e;return f.createElement("div",{...r},e.children)}function Mb(e){const{calendarMonth:t,displayIndex:n,...r}=e;return f.createElement("div",{...r})}function Ub(e){return f.createElement("table",{...e})}function Bb(e){return f.createElement("div",{...e})}const ng=m.createContext(void 0);function Fr(){const e=m.useContext(ng);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function Vb(e){const{components:t}=Fr();return f.createElement(t.Dropdown,{...e})}function Lb(e){const{onPreviousClick:t,onNextClick:n,previousMonth:r,nextMonth:a,...s}=e,{components:i,classNames:o,labels:{labelPrevious:l,labelNext:d}}=Fr(),u=m.useCallback(k=>{a&&(n==null||n(k))},[a,n]),g=m.useCallback(k=>{r&&(t==null||t(k))},[r,t]);return f.createElement("nav",{...s},f.createElement(i.PreviousMonthButton,{type:"button",className:o[re.PreviousMonthButton],tabIndex:r?void 0:-1,"aria-disabled":r?void 0:!0,"aria-label":l(r),onClick:g},f.createElement(i.Chevron,{disabled:r?void 0:!0,className:o[re.Chevron],orientation:"left"})),f.createElement(i.NextMonthButton,{type:"button",className:o[re.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":d(a),onClick:u},f.createElement(i.Chevron,{disabled:a?void 0:!0,orientation:"right",className:o[re.Chevron]})))}function Kb(e){const{components:t}=Fr();return f.createElement(t.Button,{...e})}function Cb(e){return f.createElement("option",{...e})}function Gb(e){const{components:t}=Fr();return f.createElement(t.Button,{...e})}function Hb(e){const{rootRef:t,...n}=e;return f.createElement("div",{...n,ref:t})}function Yb(e){return f.createElement("select",{...e})}function $b(e){const{week:t,...n}=e;return f.createElement("tr",{...n})}function Wb(e){return f.createElement("th",{...e})}function zb(e){return f.createElement("thead",{"aria-hidden":!0},f.createElement("tr",{...e}))}function Xb(e){const{week:t,...n}=e;return f.createElement("th",{...n})}function Qb(e){return f.createElement("th",{...e})}function Zb(e){return f.createElement("tbody",{...e})}function Jb(e){const{components:t}=Fr();return f.createElement(t.Dropdown,{...e})}const eh=Object.freeze(Object.defineProperty({__proto__:null,Button:Db,CaptionLabel:Ib,Chevron:qb,Day:_b,DayButton:Nb,Dropdown:Pb,DropdownNav:jb,Footer:Fb,Month:xb,MonthCaption:Mb,MonthGrid:Ub,Months:Bb,MonthsDropdown:Vb,Nav:Lb,NextMonthButton:Kb,Option:Cb,PreviousMonthButton:Gb,Root:Hb,Select:Yb,Week:$b,WeekNumber:Xb,WeekNumberHeader:Qb,Weekday:Wb,Weekdays:zb,Weeks:Zb,YearsDropdown:Jb},Symbol.toStringTag,{value:"Module"}));function nh(e){return{...eh,...e}}function rh(e){const t={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([n,r])=>{n.startsWith("data-")&&(t[n]=r)}),t}function th(){const e={};for(const t in re)e[re[t]]=`rdp-${re[t]}`;for(const t in Ve)e[Ve[t]]=`rdp-${Ve[t]}`;for(const t in xn)e[xn[t]]=`rdp-${xn[t]}`;for(const t in hn)e[hn[t]]=`rdp-${hn[t]}`;return e}function rg(e,t,n){return(n??new sr(t)).format(e,"LLLL y")}const ah=rg;function sh(e,t,n){return(n??new sr(t)).format(e,"d")}function ih(e,t=Xn){return t.format(e,"LLLL")}function oh(e,t=Xn){return e<10?t.formatNumber(`0${e.toLocaleString()}`):t.formatNumber(`${e.toLocaleString()}`)}function lh(){return""}function dh(e,t,n){return(n??new sr(t)).format(e,"cccccc")}function tg(e,t=Xn){return t.format(e,"yyyy")}const uh=tg,gh=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:rg,formatDay:sh,formatMonthCaption:ah,formatMonthDropdown:ih,formatWeekNumber:oh,formatWeekNumberHeader:lh,formatWeekdayName:dh,formatYearCaption:uh,formatYearDropdown:tg},Symbol.toStringTag,{value:"Module"}));function mh(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...gh,...e}}function kh(e,t,n,r,a){const{startOfMonth:s,startOfYear:i,endOfYear:o,eachMonthOfInterval:l,getMonth:d}=a;return l({start:i(e),end:o(e)}).map(k=>{const c=r.formatMonthDropdown(k,a),p=d(k),v=t&&k<s(t)||n&&k>s(n)||!1;return{value:p,label:c,disabled:v}})}function ch(e,t={},n={}){let r={...t==null?void 0:t[re.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{r={...r,...n==null?void 0:n[a]}}),r}function fh(e,t,n){const r=e.today(),a=t?e.startOfISOWeek(r):e.startOfWeek(r),s=[];for(let i=0;i<7;i++){const o=e.addDays(a,i);s.push(o)}return s}function ph(e,t,n,r){if(!e||!t)return;const{startOfYear:a,endOfYear:s,addYears:i,getYear:o,isBefore:l,isSameYear:d}=r,u=a(e),g=s(t),k=[];let c=u;for(;l(c,g)||d(c,g);)k.push(c),c=i(c,1);return k.map(p=>{const v=n.formatYearDropdown(p,r);return{value:o(p),label:v,disabled:!1}})}function ag(e,t,n){return(n??new sr(t)).format(e,"LLLL y")}const yh=ag;function vh(e,t,n,r){let a=(r??new sr(n)).format(e,"PPPP");return t!=null&&t.today&&(a=`Today, ${a}`),a}function sg(e,t,n,r){let a=(r??new sr(n)).format(e,"PPPP");return t.today&&(a=`Today, ${a}`),t.selected&&(a=`${a}, selected`),a}const bh=sg;function hh(){return""}function Th(e){return"Choose the Month"}function Eh(e){return"Go to the Next Month"}function Rh(e){return"Go to the Previous Month"}function Ah(e,t,n){return(n??new sr(t)).format(e,"cccc")}function wh(e,t){return`Week ${e}`}function Oh(e){return"Week Number"}function Sh(e){return"Choose the Year"}const Dh=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:yh,labelDay:bh,labelDayButton:sg,labelGrid:ag,labelGridcell:vh,labelMonthDropdown:Th,labelNav:hh,labelNext:Eh,labelPrevious:Rh,labelWeekNumber:wh,labelWeekNumberHeader:Oh,labelWeekday:Ah,labelYearDropdown:Sh},Symbol.toStringTag,{value:"Module"})),Nt=e=>e instanceof HTMLElement?e:null,us=e=>[...e.querySelectorAll("[data-animated-month]")??[]],Ih=e=>Nt(e.querySelector("[data-animated-month]")),gs=e=>Nt(e.querySelector("[data-animated-caption]")),ms=e=>Nt(e.querySelector("[data-animated-weeks]")),qh=e=>Nt(e.querySelector("[data-animated-nav]")),_h=e=>Nt(e.querySelector("[data-animated-weekdays]"));function Nh(e,t,{classNames:n,months:r,focused:a,dateLib:s}){const i=m.useRef(null),o=m.useRef(r),l=m.useRef(!1);m.useLayoutEffect(()=>{const d=o.current;if(o.current=r,!t||!e.current||!(e.current instanceof HTMLElement)||r.length===0||d.length===0||r.length!==d.length)return;const u=s.isSameMonth(r[0].date,d[0].date),g=s.isAfter(r[0].date,d[0].date),k=g?n[hn.caption_after_enter]:n[hn.caption_before_enter],c=g?n[hn.weeks_after_enter]:n[hn.weeks_before_enter],p=i.current,v=e.current.cloneNode(!0);if(v instanceof HTMLElement?(us(v).forEach(b=>{if(!(b instanceof HTMLElement))return;const w=Ih(b);w&&b.contains(w)&&b.removeChild(w);const E=gs(b);E&&E.classList.remove(k);const D=ms(b);D&&D.classList.remove(c)}),i.current=v):i.current=null,l.current||u||a)return;const y=p instanceof HTMLElement?us(p):[],T=us(e.current);if(T&&T.every(h=>h instanceof HTMLElement)&&y&&y.every(h=>h instanceof HTMLElement)){l.current=!0,e.current.style.isolation="isolate";const h=qh(e.current);h&&(h.style.zIndex="1"),T.forEach((b,w)=>{const E=y[w];if(!E)return;b.style.position="relative",b.style.overflow="hidden";const D=gs(b);D&&D.classList.add(k);const O=ms(b);O&&O.classList.add(c);const I=()=>{l.current=!1,e.current&&(e.current.style.isolation=""),h&&(h.style.zIndex=""),D&&D.classList.remove(k),O&&O.classList.remove(c),b.style.position="",b.style.overflow="",b.contains(E)&&b.removeChild(E)};E.style.pointerEvents="none",E.style.position="absolute",E.style.overflow="hidden",E.setAttribute("aria-hidden","true");const _=_h(E);_&&(_.style.opacity="0");const x=gs(E);x&&(x.classList.add(g?n[hn.caption_before_exit]:n[hn.caption_after_exit]),x.addEventListener("animationend",I));const P=ms(E);P&&P.classList.add(g?n[hn.weeks_before_exit]:n[hn.weeks_after_exit]),b.insertBefore(E,b.firstChild)})}})}function Ph(e,t,n,r){const a=e[0],s=e[e.length-1],{ISOWeek:i,fixedWeeks:o,broadcastCalendar:l}=n??{},{addDays:d,differenceInCalendarDays:u,differenceInCalendarMonths:g,endOfBroadcastWeek:k,endOfISOWeek:c,endOfMonth:p,endOfWeek:v,isAfter:y,startOfBroadcastWeek:T,startOfISOWeek:h,startOfWeek:b}=r,w=l?T(a,r):i?h(a):b(a),E=l?k(s):i?c(p(s)):v(p(s)),D=u(E,w),O=g(s,a)+1,I=[];for(let P=0;P<=D;P++){const q=d(w,P);if(t&&y(q,t))break;I.push(q)}const x=(l?35:42)*O;if(o&&I.length<x){const P=x-I.length;for(let q=0;q<P;q++){const S=d(I[I.length-1],1);I.push(S)}}return I}function jh(e){const t=[];return e.reduce((n,r)=>{const a=r.weeks.reduce((s,i)=>[...s,...i.days],t);return[...n,...a]},t)}function Fh(e,t,n,r){const{numberOfMonths:a=1}=n,s=[];for(let i=0;i<a;i++){const o=r.addMonths(e,i);if(t&&o>t)break;s.push(o)}return s}function Ko(e,t){const{month:n,defaultMonth:r,today:a=t.today(),numberOfMonths:s=1,endMonth:i,startMonth:o}=e;let l=n||r||a;const{differenceInCalendarMonths:d,addMonths:u,startOfMonth:g}=t;if(i&&d(i,l)<0){const k=-1*(s-1);l=u(i,k)}return o&&d(l,o)<0&&(l=o),g(l)}function xh(e,t,n,r){const{addDays:a,endOfBroadcastWeek:s,endOfISOWeek:i,endOfMonth:o,endOfWeek:l,getISOWeek:d,getWeek:u,startOfBroadcastWeek:g,startOfISOWeek:k,startOfWeek:c}=r,p=e.reduce((v,y)=>{const T=n.broadcastCalendar?g(y,r):n.ISOWeek?k(y):c(y),h=n.broadcastCalendar?s(y):n.ISOWeek?i(o(y)):l(o(y)),b=t.filter(O=>O>=T&&O<=h),w=n.broadcastCalendar?35:42;if(n.fixedWeeks&&b.length<w){const O=t.filter(I=>{const _=w-b.length;return I>h&&I<=a(h,_)});b.push(...O)}const E=b.reduce((O,I)=>{const _=n.ISOWeek?d(I):u(I),x=O.find(q=>q.weekNumber===_),P=new zu(I,y,r);return x?x.days.push(P):O.push(new wb(_,[P])),O},[]),D=new Ab(y,E);return v.push(D),v},[]);return n.reverseMonths?p.reverse():p}function Mh(e,t){let{startMonth:n,endMonth:r}=e;const{startOfYear:a,startOfDay:s,startOfMonth:i,endOfMonth:o,addYears:l,endOfYear:d,newDate:u,today:g}=t,{fromYear:k,toYear:c,fromMonth:p,toMonth:v}=e;!n&&p&&(n=p),!n&&k&&(n=t.newDate(k,0,1)),!r&&v&&(r=v),!r&&c&&(r=u(c,11,31));const y=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return n?n=i(n):k?n=u(k,0,1):!n&&y&&(n=a(l(e.today??g(),-100))),r?r=o(r):c?r=u(c,11,31):!r&&y&&(r=d(e.today??g())),[n&&s(n),r&&s(r)]}function Uh(e,t,n,r){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s=1}=n,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=r,d=a?s:1,u=i(e);if(!t)return o(u,d);if(!(l(t,e)<s))return o(u,d)}function Bh(e,t,n,r){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s}=n,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=r,d=a?s??1:1,u=i(e);if(!t)return o(u,-d);if(!(l(u,t)<=0))return o(u,-d)}function Vh(e){const t=[];return e.reduce((n,r)=>[...n,...r.weeks],t)}function Ba(e,t){const[n,r]=m.useState(e);return[t===void 0?n:t,r]}function Lh(e,t){const[n,r]=Mh(e,t),{startOfMonth:a,endOfMonth:s}=t,i=Ko(e,t),[o,l]=Ba(i,e.month?i:void 0);m.useEffect(()=>{const D=Ko(e,t);l(D)},[e.timeZone]);const d=Fh(o,r,e,t),u=Ph(d,e.endMonth?s(e.endMonth):void 0,e,t),g=xh(d,u,e,t),k=Vh(g),c=jh(g),p=Bh(o,n,e,t),v=Uh(o,r,e,t),{disableNavigation:y,onMonthChange:T}=e,h=D=>k.some(O=>O.days.some(I=>I.isEqualTo(D))),b=D=>{if(y)return;let O=a(D);n&&O<a(n)&&(O=a(n)),r&&O>a(r)&&(O=a(r)),l(O),T==null||T(O)};return{months:g,weeks:k,days:c,navStart:n,navEnd:r,previousMonth:p,nextMonth:v,goToMonth:b,goToDay:D=>{h(D)||b(D.date)}}}var Ln;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(Ln||(Ln={}));function Co(e){return!e[Ve.disabled]&&!e[Ve.hidden]&&!e[Ve.outside]}function Kh(e,t,n,r){let a,s=-1;for(const i of e){const o=t(i);Co(o)&&(o[Ve.focused]&&s<Ln.FocusedModifier?(a=i,s=Ln.FocusedModifier):r!=null&&r.isEqualTo(i)&&s<Ln.LastFocused?(a=i,s=Ln.LastFocused):n(i.date)&&s<Ln.Selected?(a=i,s=Ln.Selected):o[Ve.today]&&s<Ln.Today&&(a=i,s=Ln.Today))}return a||(a=e.find(i=>Co(t(i)))),a}function Ch(e,t,n,r,a,s,i){const{ISOWeek:o,broadcastCalendar:l}=s,{addDays:d,addMonths:u,addWeeks:g,addYears:k,endOfBroadcastWeek:c,endOfISOWeek:p,endOfWeek:v,max:y,min:T,startOfBroadcastWeek:h,startOfISOWeek:b,startOfWeek:w}=i;let D={day:d,week:g,month:u,year:k,startOfWeek:O=>l?h(O,i):o?b(O):w(O),endOfWeek:O=>l?c(O):o?p(O):v(O)}[e](n,t==="after"?1:-1);return t==="before"&&r?D=y([r,D]):t==="after"&&a&&(D=T([a,D])),D}function ig(e,t,n,r,a,s,i,o=0){if(o>365)return;const l=Ch(e,t,n.date,r,a,s,i),d=!!(s.disabled&&Dn(l,s.disabled,i)),u=!!(s.hidden&&Dn(l,s.hidden,i)),g=l,k=new zu(l,g,i);return!d&&!u?k:ig(e,t,k,r,a,s,i,o+1)}function Gh(e,t,n,r,a){const{autoFocus:s}=e,[i,o]=m.useState(),l=Kh(t.days,n,r||(()=>!1),i),[d,u]=m.useState(s?l:void 0);return{isFocusTarget:v=>!!(l!=null&&l.isEqualTo(v)),setFocused:u,focused:d,blur:()=>{o(d),u(void 0)},moveFocus:(v,y)=>{if(!d)return;const T=ig(v,y,d,t.navStart,t.navEnd,e,a);T&&(t.goToDay(T),u(T))}}}function Hh(e,t){const{selected:n,required:r,onSelect:a}=e,[s,i]=Ba(n,a?n:void 0),o=a?n:s,{isSameDay:l}=t,d=c=>(o==null?void 0:o.some(p=>l(p,c)))??!1,{min:u,max:g}=e;return{selected:o,select:(c,p,v)=>{let y=[...o??[]];if(d(c)){if((o==null?void 0:o.length)===u||r&&(o==null?void 0:o.length)===1)return;y=o==null?void 0:o.filter(T=>!l(T,c))}else(o==null?void 0:o.length)===g?y=[c]:y=[...y,c];return a||i(y),a==null||a(y,c,p,v),y},isSelected:d}}function Yh(e,t,n=0,r=0,a=!1,s=Xn){const{from:i,to:o}=t||{},{isSameDay:l,isAfter:d,isBefore:u}=s;let g;if(!i&&!o)g={from:e,to:n>0?void 0:e};else if(i&&!o)l(i,e)?a?g={from:i,to:void 0}:g=void 0:u(e,i)?g={from:e,to:i}:g={from:i,to:e};else if(i&&o)if(l(i,e)&&l(o,e))a?g={from:i,to:o}:g=void 0;else if(l(i,e))g={from:i,to:n>0?void 0:e};else if(l(o,e))g={from:e,to:n>0?void 0:e};else if(u(e,i))g={from:e,to:o};else if(d(e,i))g={from:i,to:e};else if(d(e,o))g={from:i,to:e};else throw new Error("Invalid range");if(g!=null&&g.from&&(g!=null&&g.to)){const k=s.differenceInCalendarDays(g.to,g.from);r>0&&k>r?g={from:e,to:void 0}:n>1&&k<n&&(g={from:e,to:void 0})}return g}function $h(e,t,n=Xn){const r=Array.isArray(t)?t:[t];let a=e.from;const s=n.differenceInCalendarDays(e.to,e.from),i=Math.min(s,6);for(let o=0;o<=i;o++){if(r.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function Go(e,t,n=Xn){return Jn(e,t.from,!1,n)||Jn(e,t.to,!1,n)||Jn(t,e.from,!1,n)||Jn(t,e.to,!1,n)}function Wh(e,t,n=Xn){const r=Array.isArray(t)?t:[t];if(r.filter(o=>typeof o!="function").some(o=>typeof o=="boolean"?o:n.isDate(o)?Jn(e,o,!1,n):eg(o,n)?o.some(l=>Jn(e,l,!1,n)):Ii(o)?o.from&&o.to?Go(e,{from:o.from,to:o.to},n):!1:Ju(o)?$h(e,o.dayOfWeek,n):Xu(o)?n.isAfter(o.before,o.after)?Go(e,{from:n.addDays(o.after,1),to:n.addDays(o.before,-1)},n):Dn(e.from,o,n)||Dn(e.to,o,n):Qu(o)||Zu(o)?Dn(e.from,o,n)||Dn(e.to,o,n):!1))return!0;const i=r.filter(o=>typeof o=="function");if(i.length){let o=e.from;const l=n.differenceInCalendarDays(e.to,e.from);for(let d=0;d<=l;d++){if(i.some(u=>u(o)))return!0;o=n.addDays(o,1)}}return!1}function zh(e,t){const{disabled:n,excludeDisabled:r,selected:a,required:s,onSelect:i}=e,[o,l]=Ba(a,i?a:void 0),d=i?a:o;return{selected:d,select:(k,c,p)=>{const{min:v,max:y}=e,T=k?Yh(k,d,v,y,s,t):void 0;return r&&n&&(T!=null&&T.from)&&T.to&&Wh({from:T.from,to:T.to},n,t)&&(T.from=k,T.to=void 0),i||l(T),i==null||i(T,k,c,p),T},isSelected:k=>d&&Jn(d,k,!1,t)}}function Xh(e,t){const{selected:n,required:r,onSelect:a}=e,[s,i]=Ba(n,a?n:void 0),o=a?n:s,{isSameDay:l}=t;return{selected:o,select:(g,k,c)=>{let p=g;return!r&&o&&o&&l(g,o)&&(p=void 0),a||i(p),a==null||a(p,g,k,c),p},isSelected:g=>o?l(o,g):!1}}function Qh(e,t){const n=Xh(e,t),r=Hh(e,t),a=zh(e,t);switch(e.mode){case"single":return n;case"multiple":return r;case"range":return a;default:return}}function Zh(e){var kt;let t=e;t.timeZone&&(t={...e},t.today&&(t.today=new sn(t.today,t.timeZone)),t.month&&(t.month=new sn(t.month,t.timeZone)),t.defaultMonth&&(t.defaultMonth=new sn(t.defaultMonth,t.timeZone)),t.startMonth&&(t.startMonth=new sn(t.startMonth,t.timeZone)),t.endMonth&&(t.endMonth=new sn(t.endMonth,t.timeZone)),t.mode==="single"&&t.selected?t.selected=new sn(t.selected,t.timeZone):t.mode==="multiple"&&t.selected?t.selected=(kt=t.selected)==null?void 0:kt.map(me=>new sn(me,t.timeZone)):t.mode==="range"&&t.selected&&(t.selected={from:t.selected.from?new sn(t.selected.from,t.timeZone):void 0,to:t.selected.to?new sn(t.selected.to,t.timeZone):void 0}));const{components:n,formatters:r,labels:a,dateLib:s,locale:i,classNames:o}=m.useMemo(()=>{const me={...Ia,...t.locale};return{dateLib:new sr({locale:me,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib),components:nh(t.components),formatters:mh(t.formatters),labels:{...Dh,...t.labels},locale:me,classNames:{...th(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]),{captionLayout:l,mode:d,navLayout:u,numberOfMonths:g=1,onDayBlur:k,onDayClick:c,onDayFocus:p,onDayKeyDown:v,onDayMouseEnter:y,onDayMouseLeave:T,onNextClick:h,onPrevClick:b,showWeekNumber:w,styles:E}=t,{formatCaption:D,formatDay:O,formatMonthDropdown:I,formatWeekNumber:_,formatWeekNumberHeader:x,formatWeekdayName:P,formatYearDropdown:q}=r,S=Lh(t,s),{days:N,months:F,navStart:L,navEnd:V,previousMonth:U,nextMonth:M,goToMonth:Y}=S,ne=Ob(N,t,s),{isSelected:K,select:te,selected:Z}=Qh(t,s)??{},{blur:z,focused:W,isFocusTarget:le,moveFocus:ie,setFocused:ke}=Gh(t,S,ne,K??(()=>!1),s),{labelDayButton:He,labelGridcell:ae,labelGrid:se,labelMonthDropdown:ue,labelNav:ge,labelPrevious:pe,labelNext:rn,labelWeekday:xe,labelWeekNumber:Ce,labelWeekNumberHeader:Te,labelYearDropdown:A}=a,j=m.useMemo(()=>fh(s,t.ISOWeek),[s,t.ISOWeek]),B=d!==void 0||c!==void 0,$=m.useCallback(()=>{U&&(Y(U),b==null||b(U))},[U,Y,b]),H=m.useCallback(()=>{M&&(Y(M),h==null||h(M))},[Y,M,h]),C=m.useCallback((me,Me)=>Pe=>{Pe.preventDefault(),Pe.stopPropagation(),ke(me),te==null||te(me.date,Me,Pe),c==null||c(me.date,Me,Pe)},[te,c,ke]),J=m.useCallback((me,Me)=>Pe=>{ke(me),p==null||p(me.date,Me,Pe)},[p,ke]),ce=m.useCallback((me,Me)=>Pe=>{z(),k==null||k(me.date,Me,Pe)},[z,k]),Ie=m.useCallback((me,Me)=>Pe=>{const ir={ArrowLeft:["day",t.dir==="rtl"?"after":"before"],ArrowRight:["day",t.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[Pe.shiftKey?"year":"month","before"],PageDown:[Pe.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(ir[Pe.key]){Pe.preventDefault(),Pe.stopPropagation();const[jn,Mt]=ir[Pe.key];ie(jn,Mt)}v==null||v(me.date,Me,Pe)},[ie,v,t.dir]),cn=m.useCallback((me,Me)=>Pe=>{y==null||y(me.date,Me,Pe)},[y]),Mr=m.useCallback((me,Me)=>Pe=>{T==null||T(me.date,Me,Pe)},[T]),Bn=m.useCallback(me=>Me=>{const Pe=Number(Me.target.value),ir=s.setMonth(s.startOfMonth(me),Pe);Y(ir)},[s,Y]),Ha=m.useCallback(me=>Me=>{const Pe=Number(Me.target.value),ir=s.setYear(s.startOfMonth(me),Pe);Y(ir)},[s,Y]),{className:ut,style:gt}=m.useMemo(()=>({className:[o[re.Root],t.className].filter(Boolean).join(" "),style:{...E==null?void 0:E[re.Root],...t.style}}),[o,t.className,t.style,E]),Ya=rh(t),mt=m.useRef(null);Nh(mt,!!t.animate,{classNames:o,months:F,focused:W,dateLib:s});const $a={dayPickerProps:t,selected:Z,select:te,isSelected:K,months:F,nextMonth:M,previousMonth:U,goToMonth:Y,getModifiers:ne,components:n,classNames:o,styles:E,labels:a,formatters:r};return f.createElement(ng.Provider,{value:$a},f.createElement(n.Root,{rootRef:t.animate?mt:void 0,className:ut,style:gt,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],...Ya},f.createElement(n.Months,{className:o[re.Months],style:E==null?void 0:E[re.Months]},!t.hideNavigation&&!u&&f.createElement(n.Nav,{"data-animated-nav":t.animate?"true":void 0,className:o[re.Nav],style:E==null?void 0:E[re.Nav],"aria-label":ge(),onPreviousClick:$,onNextClick:H,previousMonth:U,nextMonth:M}),F.map((me,Me)=>{const Pe=kh(me.date,L,V,r,s),ir=ph(L,V,r,s);return f.createElement(n.Month,{"data-animated-month":t.animate?"true":void 0,className:o[re.Month],style:E==null?void 0:E[re.Month],key:Me,displayIndex:Me,calendarMonth:me},u==="around"&&!t.hideNavigation&&Me===0&&f.createElement(n.PreviousMonthButton,{type:"button",className:o[re.PreviousMonthButton],tabIndex:U?void 0:-1,"aria-disabled":U?void 0:!0,"aria-label":pe(U),onClick:$,"data-animated-button":t.animate?"true":void 0},f.createElement(n.Chevron,{disabled:U?void 0:!0,className:o[re.Chevron],orientation:t.dir==="rtl"?"right":"left"})),f.createElement(n.MonthCaption,{"data-animated-caption":t.animate?"true":void 0,className:o[re.MonthCaption],style:E==null?void 0:E[re.MonthCaption],calendarMonth:me,displayIndex:Me},l!=null&&l.startsWith("dropdown")?f.createElement(n.DropdownNav,{className:o[re.Dropdowns],style:E==null?void 0:E[re.Dropdowns]},l==="dropdown"||l==="dropdown-months"?f.createElement(n.MonthsDropdown,{className:o[re.MonthsDropdown],"aria-label":ue(),classNames:o,components:n,disabled:!!t.disableNavigation,onChange:Bn(me.date),options:Pe,style:E==null?void 0:E[re.Dropdown],value:s.getMonth(me.date)}):f.createElement("span",null,I(me.date,s)),l==="dropdown"||l==="dropdown-years"?f.createElement(n.YearsDropdown,{className:o[re.YearsDropdown],"aria-label":A(s.options),classNames:o,components:n,disabled:!!t.disableNavigation,onChange:Ha(me.date),options:ir,style:E==null?void 0:E[re.Dropdown],value:s.getYear(me.date)}):f.createElement("span",null,q(me.date,s)),f.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},D(me.date,s.options,s))):f.createElement(n.CaptionLabel,{className:o[re.CaptionLabel],role:"status","aria-live":"polite"},D(me.date,s.options,s))),u==="around"&&!t.hideNavigation&&Me===g-1&&f.createElement(n.NextMonthButton,{type:"button",className:o[re.NextMonthButton],tabIndex:M?void 0:-1,"aria-disabled":M?void 0:!0,"aria-label":rn(M),onClick:H,"data-animated-button":t.animate?"true":void 0},f.createElement(n.Chevron,{disabled:M?void 0:!0,className:o[re.Chevron],orientation:t.dir==="rtl"?"left":"right"})),Me===g-1&&u==="after"&&!t.hideNavigation&&f.createElement(n.Nav,{"data-animated-nav":t.animate?"true":void 0,className:o[re.Nav],style:E==null?void 0:E[re.Nav],"aria-label":ge(),onPreviousClick:$,onNextClick:H,previousMonth:U,nextMonth:M}),f.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":d==="multiple"||d==="range","aria-label":se(me.date,s.options,s)||void 0,className:o[re.MonthGrid],style:E==null?void 0:E[re.MonthGrid]},!t.hideWeekdays&&f.createElement(n.Weekdays,{"data-animated-weekdays":t.animate?"true":void 0,className:o[re.Weekdays],style:E==null?void 0:E[re.Weekdays]},w&&f.createElement(n.WeekNumberHeader,{"aria-label":Te(s.options),className:o[re.WeekNumberHeader],style:E==null?void 0:E[re.WeekNumberHeader],scope:"col"},x()),j.map((jn,Mt)=>f.createElement(n.Weekday,{"aria-label":xe(jn,s.options,s),className:o[re.Weekday],key:Mt,style:E==null?void 0:E[re.Weekday],scope:"col"},P(jn,s.options,s)))),f.createElement(n.Weeks,{"data-animated-weeks":t.animate?"true":void 0,className:o[re.Weeks],style:E==null?void 0:E[re.Weeks]},me.weeks.map((jn,Mt)=>f.createElement(n.Week,{className:o[re.Week],key:jn.weekNumber,style:E==null?void 0:E[re.Week],week:jn},w&&f.createElement(n.WeekNumber,{week:jn,style:E==null?void 0:E[re.WeekNumber],"aria-label":Ce(jn.weekNumber,{locale:i}),className:o[re.WeekNumber],scope:"row",role:"rowheader"},_(jn.weekNumber,s)),jn.days.map(tn=>{const{date:Vn}=tn,we=ne(tn);if(we[Ve.focused]=!we.hidden&&!!(W!=null&&W.isEqualTo(tn)),we[xn.selected]=(K==null?void 0:K(Vn))||we.selected,Ii(Z)){const{from:Wa,to:za}=Z;we[xn.range_start]=!!(Wa&&za&&s.isSameDay(Vn,Wa)),we[xn.range_end]=!!(Wa&&za&&s.isSameDay(Vn,za)),we[xn.range_middle]=Jn(Z,Vn,!0,s)}const am=ch(we,E,t.modifiersStyles),sm=Sb(we,o,t.modifiersClassNames),im=!B&&!we.hidden?ae(Vn,we,s.options,s):void 0;return f.createElement(n.Day,{key:`${s.format(Vn,"yyyy-MM-dd")}_${s.format(tn.displayMonth,"yyyy-MM")}`,day:tn,modifiers:we,className:sm.join(" "),style:am,role:"gridcell","aria-selected":we.selected||void 0,"aria-label":im,"data-day":s.format(Vn,"yyyy-MM-dd"),"data-month":tn.outside?s.format(Vn,"yyyy-MM"):void 0,"data-selected":we.selected||void 0,"data-disabled":we.disabled||void 0,"data-hidden":we.hidden||void 0,"data-outside":tn.outside||void 0,"data-focused":we.focused||void 0,"data-today":we.today||void 0},!we.hidden&&B?f.createElement(n.DayButton,{className:o[re.DayButton],style:E==null?void 0:E[re.DayButton],type:"button",day:tn,modifiers:we,disabled:we.disabled||void 0,tabIndex:le(tn)?0:-1,"aria-label":He(Vn,we,s.options,s),onClick:C(tn,we),onBlur:ce(tn,we),onFocus:J(tn,we),onKeyDown:Ie(tn,we),onMouseEnter:cn(tn,we),onMouseLeave:Mr(tn,we)},O(Vn,s.options,s)):!we.hidden&&O(tn.date,s.options,s))}))))))})),t.footer&&f.createElement(n.Footer,{className:o[re.Footer],style:E==null?void 0:E[re.Footer],role:"status","aria-live":"polite"},t.footer)))}var Jh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const og=m.forwardRef((e,t)=>{var{as:n="div",className:r,above:a,below:s,variant:i,asChild:o}=e,l=Jh(e,["as","className","above","below","variant","asChild"]);const{cn:d}=ee(),u=i==="show"?a:s,g=i==="show"?s:a,k=o?tt:n;return f.createElement(k,Object.assign({},l,{ref:t,className:d("navds-responsive",r,{[`navds-responsive__above--${u}`]:u,[`navds-responsive__below--${g}`]:g})}))}),eT=m.forwardRef((e,t)=>f.createElement(og,Object.assign({},e,{ref:t,variant:"hide"}))),qi=m.forwardRef((e,t)=>f.createElement(og,Object.assign({},e,{ref:t,variant:"show"})));function Mn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function nT({day:e,fromDate:t,toDate:n}){const r=n&&Zn(e,Rn(n))>0,a=t&&Zn(Rn(t),e)>0;return r||a||!1}const lg="dd.MM.yyyy",rT="MMMM yyyy",dg=[lg,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...dg];const ks=(e,t,n,r,a)=>{let s;const i=dg;if(a){for(const o of i)if(s=Wr(e,o,t,{locale:n}),Mn(s)&&!cs(e,t,n,i))return s;for(const o of[...i.map(l=>l.replace("yyyy","yy"))])if(s=Wr(e,o,t,{locale:n}),Mn(s)&&cs(e,t,n,i)){const l=tT(e,o,t,n);return Mn(new Date(l))?new Date(l):new Date("Invalid date")}return new Date("Invalid date")}for(const o of i)if(s=Wr(e,o,t,{locale:n}),Mn(s)&&!cs(e,t,n,i))return s;return new Date("Invalid date")};function cs(e,t,n,r){let a;const s=r.map(i=>i.replace("yyyy","yy"));for(const i of s)if(a=Wr(e,i,t,{locale:n}),Mn(a))return!0;return!1}function tT(e,t,n,r){const a=Wr(Ho(e,"19"),t.replace("yy","yyyy"),n,{locale:r}),s=Wr(Ho(e,"20"),t.replace("yy","yyyy"),n,{locale:r});return Mn(a)&&Mn(s)?_t(a,zy(new Date,{years:80}))?s:a:new Date("Invalid date")}function Ho(e,t){const n=e.slice(-2);return`${e.slice(0,e.length-2)}${t}${n}`}const ct=(e,t,n,r)=>nn(e,r??lg,{locale:t}),aT=({month:e,start:t,end:n})=>{if(!e)return;let r=e;return t&&_t(r,t)&&(r=t),n&&hi(r,n)&&(r=n),yr(r)};function sT(e,t,n,r){return Qd({start:ot(e),end:qt(e)}).map(i=>{const o=nn(i,"LLLL",{locale:r}),l=vi(i),d=t&&i<yr(t)||n&&i>yr(n)||!1;return{value:l,label:o,disabled:d}})}function iT(e,t,n){if(!e||!t)return;const r=ot(e),a=qt(t),s=[];let i=r;for(;_t(i,a)||iu(i,a);)s.push(i),i=Sr(i,1);return s.map(o=>{const l=nn(o,"yyyy",{locale:n});return{value:bi(o),label:l,disabled:!1}})}function oT({captionLayout:e,startMonth:t,endMonth:n,today:r}){const a=e==="dropdown",s=r??new Date;return t?t=yr(t):!t&&a&&(t=ot(Sr(s,-100))),n?n=ja(n):!n&&a&&(n=qt(s)),[t&&Rn(t),n&&Rn(n)]}var lT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const dT=e=>{var{day:t,modifiers:n,locale:r,children:a}=e,s=lT(e,["day","modifiers","locale","children"]);const{cn:i}=ee(),o=m.useRef(null);return m.useEffect(()=>{var l;n.focused&&((l=o.current)===null||l===void 0||l.focus())},[n.focused]),n.hidden?f.createElement(f.Fragment,null):f.createElement("button",Object.assign({},s,{ref:o,"aria-hidden":t.outside,"aria-pressed":!!n.selected,"aria-label":nn(t.date,"cccc d",{locale:r}),"data-pressed":n.selected,"data-today":n.today||void 0,className:i(s.className,{"rdp-day_disabled":n.disabled,"rdp-day_selected":n.selected,"rdp-day_range_start":n.range_start,"rdp-day_range_middle":n.range_middle,"rdp-day_range_end":n.range_end,"rdp-day_today":n.today,"rdp-day_outside":n.outside,"rdp-day__weekend":n.weekend})}),a)};var uT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Vs=m.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:i,inputDescriptionId:o,readOnly:l}=jr(e,"select"),{children:d,label:u,className:g,description:k,htmlSize:c,hideLabel:p=!1,style:v}=e,y=uT(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:T}=ee(),h={onMouseDown:b=>{l&&(b.preventDefault(),b.target.focus())},onKeyDown:b=>{l&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(b.key)&&b.preventDefault()}};return f.createElement("div",{className:T(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":l,"navds-select--error":s,"navds-select--readonly":l})},f.createElement(qn,{htmlFor:n.id,size:i,className:T("navds-form-field__label",{"navds-sr-only":p})},l&&f.createElement(Si,null),u),!!k&&f.createElement(qe,{className:T("navds-form-field__description",{"navds-sr-only":p}),id:o,size:i,as:"div"},k),f.createElement("div",{className:T("navds-select__container"),style:v},f.createElement("select",Object.assign({},Ke(y,["error","errorId","size","readOnly"]),n,h,{ref:t,className:T("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:c}),d),f.createElement(Rd,{className:T("navds-select__chevron"),"aria-hidden":!0})),f.createElement("div",{className:T("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&f.createElement(it,{size:i,showIcon:!0},e.error)))}),ug=({week:{weekNumber:e,days:t},onWeekNumberClick:n,className:r,style:a,showOnDesktop:s})=>{const i=Ua().translate,{cn:o}=ee(),{getModifiers:l}=Fr(),d=m.useMemo(()=>t.filter(g=>{const k=l(g);return!(k.hidden||k.outside||k.disabled)}).length===0,[t,l]),u=s?qi:eT;return!n||d?f.createElement(u,{above:"sm",asChild:!0},f.createElement("td",{className:"rdp-cell"},f.createElement(nr,{as:"span",textColor:"subtle",className:r,style:a,"aria-label":i("weekNumber",{week:e})},e))):f.createElement(u,{above:"sm",asChild:!0},f.createElement("td",{className:o("rdp-cell",{"navds-date__week-wrapper":!s})},f.createElement(Xe,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:a,className:o("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{n(e,t.map(g=>g.date))},icon:f.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},gT=({onWeekNumberClick:e,weeks:t})=>{const n=Ua().translate,{cn:r}=ee(),a=_n();return e?f.createElement(qi,{below:"sm",asChild:!0},f.createElement("table",{className:"rdp-table",role:"grid"},f.createElement("tbody",{className:"rdp-tbody"},f.createElement("tr",{className:r("rdp-row navds-date__week-row")},f.createElement(nr,{as:"th",weight:"semibold",className:r("rdp-cell navds-date__week-cell")},f.createElement("span",{className:r("navds-date__week-wrapper"),id:a},n("week"))),t==null?void 0:t.map(s=>f.createElement(ug,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:r("navds-date__week-wrapper")})))))):null};var mT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const kT=e=>{var{children:t,calendarMonth:n,locale:r,onWeekNumberClick:a}=e,s=mT(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:o,previousMonth:l,nextMonth:d}=Fr(),{captionLayout:u}=i,{cn:g}=ee(),k=Ua().translate,c=m.useCallback((b,w)=>{const E=Number(w.target.value),D=ou(yr(b),E);o(D)},[o]),p=m.useCallback((b,w)=>{const E=Number(w.target.value),D=lu(yr(b),E);o(D)},[o]),[v,y]=oT({captionLayout:u==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),T=sT(n.date,v,y,r),h=iT(v,y,r);return f.createElement("div",Object.assign({},Ke(s,["displayIndex"])),f.createElement("div",{className:g("navds-date__caption")},(u==null?void 0:u.startsWith("dropdown"))&&f.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:g("navds-sr-only")},nn(n.date,"LLLL y",{locale:r})),f.createElement(Xe,{variant:"tertiary-neutral",disabled:!l,onClick:()=>l&&o(l),icon:f.createElement(Zs,{title:k("goToPreviousMonth")}),className:g("navds-date__caption-button"),type:"button"}),u!=null&&u.startsWith("dropdown")?f.createElement("div",{className:g("navds-date__caption")},f.createElement(Vs,{label:k("month"),hideLabel:!0,className:g("navds-date__caption__month"),onChange:b=>c(n.date,b),value:vi(n.date)},T==null?void 0:T.map(({value:b,label:w,disabled:E})=>f.createElement("option",{key:b,value:b,disabled:E},w))),f.createElement(Vs,{label:k("year"),hideLabel:!0,className:g("navds-date__caption__year"),onChange:b=>p(n.date,b),value:bi(n.date)},h==null?void 0:h.map(({value:b,label:w,disabled:E})=>f.createElement("option",{key:b,value:b,disabled:E},w)))):f.createElement(qe,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:g("navds-date__caption-label")},nn(n.date,"LLLL y",{locale:r})),f.createElement(Xe,{variant:"tertiary-neutral",icon:f.createElement(Js,{title:k("goToNextMonth")}),onClick:()=>d&&o(d),disabled:!d,className:g("navds-date__caption-button"),type:"button"})),f.createElement(gT,{weeks:n.weeks,onWeekNumberClick:a}),t)};var cT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const fT={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},gg=e=>{var{className:t,dropdownCaption:n,disabled:r=[],disableWeekends:a=!1,showWeekNumber:s=!1,selected:i,fixedWeeks:o=!1,onWeekNumberClick:l,fromDate:d,toDate:u,month:g,mode:k,handleSelect:c,locale:p}=e,v=cT(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:y}=ee(),T=ki(),h=p?Fu(p):T,b=k??"single";return f.createElement(Zh,Object.assign({captionLayout:n?"dropdown":"label",hideNavigation:!0,locale:h,mode:b,onSelect:(w,E)=>{if(b!=="range"||w||!Yu(i)){c(w);return}if(!i.to){c({from:E,to:void 0});return}let D;Dr(i.to,E)?D=void 0:_t(E,i.to)?D={from:E,to:i.to}:D={from:i.to,to:E},c(D)},selected:i,classNames:fT,components:{MonthCaption:()=>f.createElement(f.Fragment,null),DayButton:m.useCallback(w=>f.createElement(dT,Object.assign({},w,{locale:h})),[h]),Month:m.useCallback(w=>f.createElement(kT,Object.assign({},w,{locale:h,onWeekNumberClick:b==="multiple"?l:void 0})),[h,b,l]),Day:m.useCallback(w=>f.createElement("td",Object.assign({},Ke(w,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:m.useCallback(w=>f.createElement(ug,Object.assign({},w,{showOnDesktop:!0,onWeekNumberClick:b==="multiple"?l:void 0})),[b,l]),WeekNumberHeader:m.useCallback(w=>f.createElement(qi,{above:"sm",asChild:!0},f.createElement("th",Object.assign({},w))),[]),Weekdays:m.useCallback(w=>f.createElement("thead",Object.assign({},w,{className:"rdp-head","aria-hidden":!0}),f.createElement("tr",{className:"rdp-head_row"},w.children)),[])},className:y("navds-date",t),disabled:w=>a&&ma(w)||Dn(w,r)||nT({day:w,fromDate:d,toDate:u}),weekStartsOn:1,modifiers:{weekend:w=>a&&ma(w)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:o,showOutsideDays:!0,startMonth:d,endMonth:u,month:aT({month:g,start:d,end:u})},Ke(v,["onSelect","role","id","defaultSelected"])))};var pT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const yT=m.forwardRef((e,t)=>{var{className:n,locale:r,translations:a,selected:s,defaultSelected:i,onSelect:o,mode:l}=e,d=pT(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:u}=ee(),g=kn("DatePicker",a,xu(r)),[k,c]=ia({defaultValue:i,value:s,onChange:p=>o==null?void 0:o(p)});return f.createElement(Mu,{translate:g},f.createElement("div",{ref:t,className:u("navds-date__standalone-wrapper",n)},f.createElement(gg,Object.assign({},d,{locale:r,handleSelect:c,selected:k,mode:l}))))});var vT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ba=m.forwardRef((e,t)=>{var{children:n,locale:r,translations:a,selected:s,id:i,defaultSelected:o,wrapperClassName:l,open:d,onClose:u,onOpenToggle:g,strategy:k,mode:c}=e,p=vT(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const v=kn("DatePicker",a,xu(r)),{cn:y}=ee(),T=_n(i),[h,b]=ia({defaultValue:!1,value:d}),[w,E]=m.useState(null),D=_r(E,t),[O,I]=ia({defaultValue:o,value:s,onChange:_=>{var x;let P=!1;c==="single"&&_?P=!0:Yu(_)&&_.from&&_.to&&(P=!0,Dr(_.from,_.to)&&(P=!1)),P&&(u==null||u(),b(!1)),(x=p==null?void 0:p.onSelect)===null||x===void 0||x.call(p,_)}});return f.createElement(Mu,{translate:v},f.createElement(Qv,{open:h,onOpen:()=>{b(_=>!_),g==null||g()},ariaId:T,defined:!0},f.createElement("div",{ref:D,className:y("navds-date__wrapper",l)},n,f.createElement(yb,{open:h,anchor:w,onClose:()=>{u==null||u(),h&&b(!1)},locale:r,translate:v,variant:c??"single",popoverProps:{id:T,strategy:k}},f.createElement(gg,Object.assign({},p,{locale:r,handleSelect:I,selected:O,mode:c}))))))});ba.Standalone=yT;ba.Input=Zv;const bT=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),hT=(e={})=>{var t;const{locale:n,required:r,defaultSelected:a,today:s=new Date,fromDate:i,toDate:o,disabled:l,disableWeekends:d,onDateChange:u,inputFormat:g,onValidate:k,defaultMonth:c,allowTwoDigitYear:p=!0}=e,[v,y]=m.useState(null),T=ki(),h=n?Fu(n):T,[b,w]=m.useState(a),[E,D]=m.useState((t=b??c)!==null&&t!==void 0?t:s),[O,I]=m.useState(b),[_,x]=m.useState(!1),P=b?ct(b,h,"date",g):"",[q,S]=m.useState(P),N=m.useCallback(z=>{var W,le;x(z),z&&D((le=(W=O??b)!==null&&W!==void 0?W:c)!==null&&le!==void 0?le:s)},[c,b,O,s]),F=z=>{u==null||u(z),I(z)},L=(z={})=>k==null?void 0:k(bT(z));return{datepickerProps:{month:E,onMonthChange:D,onDayClick:(z,{selected:W})=>{if(!(W&&r)){if(z&&!W&&(N(!1),v==null||v.focus()),W){F(void 0),S(""),L({isValidDate:!1,isEmpty:!0});return}F(z),L(),D(z),S(z?ct(z,h,"date",g):"")}},selected:O??new Date("Invalid date"),locale:n,fromDate:i,toDate:o,today:s,open:_,onClose:()=>{N(!1),v==null||v.focus()},onOpenToggle:()=>N(!_),disabled:l,disableWeekends:d},inputProps:{onChange:z=>{S(z.target.value);const W=ks(z.target.value,s,h,"date",p),le=i&&W&&Zn(i,W)>0,ie=o&&W&&Zn(W,o)>0;if(!Mn(W)||d&&ma(W)||l&&Dn(W,l)){F(void 0),L({isInvalid:!Mn(W),isWeekend:d&&ma(W),isDisabled:l&&Dn(W,l),isValidDate:!1,isEmpty:!z.target.value,isBefore:le??!1,isAfter:ie??!1});return}if(le||ie){F(void 0),L({isValidDate:!1,isBefore:le??!1,isAfter:ie??!1});return}F(W),L(),D(c??W)},onFocus:z=>{if(z.target.readOnly)return;const W=ks(z.target.value,s,h,"date",p);if(Mn(W)){S(ct(W,h,"date",g));const le=i&&W&&Zn(i,W)>0,ie=o&&W&&Zn(W,o)>0;!le&&!ie&&D(W)}},onBlur:z=>{const W=ks(z.target.value,s,h,"date",p);Mn(W)&&S(ct(W,h,"date",g))},value:q,setAnchorRef:y},reset:()=>{var z;F(b),D((z=b??c)!==null&&z!==void 0?z:s),S(P??""),w(a)},selectedDay:O,setSelected:z=>{var W;F(z),D((W=z??c)!==null&&W!==void 0?W:s),S(z?ct(z,h,"date",g):"")}}};function Je(e,t,n,r){return r?typeof r=="string"?{[`--__${e}c-${t}-${n}-xs`]:r}:Object.fromEntries(Object.entries(r).map(([a,s])=>[`--__${e}c-${t}-${n}-${a}`,s])):{}}const TT={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},ET={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},Yo=(e,t,n,r,a,s)=>t.split(" ").map((i,o,l)=>{var d,u;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let g=`var(--${s}-${n}-${i})`;if(r.includes(i))g=i==="px"?"1px":i;else if(n==="spacing"&&i.startsWith("space"))g=`var(--${s}-${i})`;else if(n==="spacing"){const k=`--${s}-spacing-${i}`;g=`var(${(d=TT[k])!==null&&d!==void 0?d:k})`}else if(n==="radius"){const k=(u=ET[i])!==null&&u!==void 0?u:i;g=`var(--${s}-radius-${k})`}return a?i==="0"?"0":`calc(-1 * ${g})`:g}).join(" ");function fn(e,t,n,r,a,s=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${t}-${n}-xs`]:Yo(n,a,r,i,s,e)};const o={};return Object.entries(a).forEach(([l,d])=>{o[`--__${e}c-${t}-${n}-${l}`]=Yo(n,d,r,i,s,e)}),o}const _i=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Ni=({children:e,className:t,padding:n,paddingInline:r,paddingBlock:a,margin:s,marginInline:i,marginBlock:o,width:l,minWidth:d,maxWidth:u,height:g,minHeight:k,maxHeight:c,position:p,inset:v,top:y,right:T,left:h,bottom:b,overflow:w,overflowX:E,overflowY:D,flexBasis:O,flexGrow:I,flexShrink:_,gridColumn:x})=>{const P=at(!1),{cn:q}=ee(),S=P?"ax":"a",N=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},fn(S,"r","p","spacing",n)),fn(S,"r","pi","spacing",r)),fn(S,"r","pb","spacing",a)),fn(S,"r","m","spacing",s)),fn(S,"r","mi","spacing",i)),fn(S,"r","mb","spacing",o)),Je(S,"r","w",l)),Je(S,"r","minw",d)),Je(S,"r","maxw",u)),Je(S,"r","h",g)),Je(S,"r","minh",k)),Je(S,"r","maxh",c)),Je(S,"r","position",p)),fn(S,"r","inset","spacing",v)),fn(S,"r","top","spacing",y)),fn(S,"r","right","spacing",T)),fn(S,"r","bottom","spacing",b)),fn(S,"r","left","spacing",h)),Je(S,"r","overflow",w)),Je(S,"r","overflowx",E)),Je(S,"r","overflowy",D)),Je(S,"r","flex-basis",O)),Je(S,"r","flex-grow",I)),Je(S,"r","flex-shrink",_)),Je(S,"r","grid-column",x));return f.createElement(tt,{className:q({className:t,"navds-r-p":n,"navds-r-pi":r,"navds-r-pb":a,"navds-r-m":s,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":l,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":g,"navds-r-minh":k,"navds-r-maxh":c,"navds-r-position":p,"navds-r-inset":v,"navds-r-top":y,"navds-r-right":T,"navds-r-bottom":b,"navds-r-left":h,"navds-r-overflow":w,"navds-r-overflowx":E,"navds-r-overflowy":D,"navds-r-flex-basis":O,"navds-r-flex-grow":I,"navds-r-flex-shrink":_,"navds-r-grid-column":x}),style:N},e)};var RT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const AT=m.forwardRef((e,t)=>{var{children:n,className:r,as:a="div",background:s,borderColor:i,borderWidth:o,borderRadius:l,shadow:d,style:u,asChild:g}=e,k=RT(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:c}=ee(),p=Object.assign(Object.assign(Object.assign({},u),{"--__axc-box-background":s?`var(--ax-bg-${s})`:void 0,"--__axc-box-shadow":d?`var(--ax-shadow-${d})`:void 0,"--__axc-box-border-color":i?`var(--ax-border-${i})`:void 0,"--__axc-box-border-width":o?o.split(" ").map(y=>`${y}px`).join(" "):void 0}),fn("ax","box","radius","radius",l,!1,["0"])),v=g?tt:a;return f.createElement(Ni,Object.assign({},k),f.createElement(v,Object.assign({},Ke(k,_i),{ref:t,style:p,className:c("navds-box",r,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":o,"navds-box-radius":l,"navds-box-shadow":d})}),n))});var wT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const OT=m.forwardRef((e,t)=>{var{children:n,className:r,as:a="div",background:s,borderColor:i,borderWidth:o,borderRadius:l,shadow:d,style:u,asChild:g}=e,k=wT(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const c=at(!1),{cn:p}=ee(),v=c?"ax":"a",y=Object.assign(Object.assign(Object.assign({},u),{[`--__${v}c-box-background`]:s?`var(--a-${s})`:void 0,[`--__${v}c-box-shadow`]:d?`var(--a-shadow-${d})`:void 0,[`--__${v}c-box-border-color`]:i?`var(--a-${i})`:void 0,[`--__${v}c-box-border-width`]:o?o.split(" ").map(h=>`${h}px`).join(" "):void 0}),fn(v,"box","radius","radius",l,!1,["0"])),T=g?tt:a;return f.createElement(Ni,Object.assign({},k),f.createElement(T,Object.assign({},Ke(k,_i),{ref:t,style:y,className:p("navds-box",r,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":o,"navds-box-border-radius":l,"navds-box-shadow":d})}),n))}),mg=OT;mg.New=AT;var ST=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const kg=m.forwardRef((e,t)=>{var{children:n,className:r,as:a="div",align:s,justify:i,wrap:o=!0,gap:l,style:d,direction:u="row",asChild:g}=e,k=ST(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const p=at(!1)?"ax":"a",{cn:v}=ee(),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),fn(p,"stack","gap","spacing",l)),Je(p,"stack","direction",u)),Je(p,"stack","align",s)),Je(p,"stack","justify",i)),T=g?tt:a;return f.createElement(Ni,Object.assign({},k),f.createElement(T,Object.assign({},Ke(k,_i),{ref:t,style:y,className:v("navds-stack",r,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":l,"navds-stack-align":s,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":o})}),n))});var DT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const bn=m.forwardRef((e,t)=>{var{as:n="div"}=e,r=DT(e,["as"]);return f.createElement(kg,Object.assign({as:n},r,{ref:t,direction:"row"}))});var IT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const An=m.forwardRef((e,t)=>{var{as:n="div"}=e,r=IT(e,["as"]);return f.createElement(kg,Object.assign({as:n},r,{ref:t,direction:"column",wrap:!1}))});var qT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const _T=m.forwardRef((e,t)=>{var{className:n}=e,r=qT(e,["className"]);const{cn:a}=ee();return f.createElement("tbody",Object.assign({},r,{ref:t,className:a("navds-table__body",n)}))});var NT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const cg=m.forwardRef((e,t)=>{var{className:n,children:r,align:a,textSize:s}=e,i=NT(e,["className","children","align","textSize"]);const{cn:o}=ee();return f.createElement("th",Object.assign({ref:t,className:o("navds-table__header-cell","navds-label",n,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":s==="small"})},i),r)}),fg=m.createContext(null);var PT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const jT=m.forwardRef((e,t)=>{var n,r,a,s,{className:i,children:o,sortable:l=!1,sortKey:d}=e,u=PT(e,["className","children","sortable","sortKey"]);const g=m.useContext(fg),{cn:k}=ee();return l&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),f.createElement(cg,Object.assign({scope:"col",ref:t,className:k(i),"aria-sort":l?((n=g==null?void 0:g.sort)===null||n===void 0?void 0:n.orderBy)===d?(r=g==null?void 0:g.sort)===null||r===void 0?void 0:r.direction:"none":void 0},u),l?f.createElement("button",{type:"button",className:k("navds-table__sort-button"),onClick:l&&d?()=>{var c;return(c=g==null?void 0:g.onSortChange)===null||c===void 0?void 0:c.call(g,d)}:void 0},o,((a=g==null?void 0:g.sort)===null||a===void 0?void 0:a.orderBy)===d?((s=g==null?void 0:g.sort)===null||s===void 0?void 0:s.direction)==="descending"?f.createElement(Tk,{"aria-hidden":!0}):f.createElement(Rk,{"aria-hidden":!0}):f.createElement(Fm,{"aria-hidden":!0})):o)});var FT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const pg=m.forwardRef((e,t)=>{var{className:n,children:r="",align:a,textSize:s}=e,i=FT(e,["className","children","align","textSize"]);const{cn:o}=ee();return f.createElement(qe,Object.assign({as:"td",ref:t,className:o("navds-table__data-cell",n,{[`navds-table__data-cell--align-${a}`]:a}),size:s},i),r)});var xT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const MT=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function UT(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function $o(e){return typeof e=="string"&&e[e.length-1]==="%"&&UT(e.substring(0,e.length-1))}function fs(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function BT(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const VT=e=>{var{children:t,className:n,innerClassName:r,duration:a=250,easing:s="ease",height:i}=e,o=xT(e,["children","className","innerClassName","duration","easing","height"]);const{cn:l}=ee(),d=m.useRef(i),u=m.useRef(null),g=m.useRef(),k=m.useRef(),c=m.useRef(i),p=m.useRef("visible"),v=MT?0:a;typeof c.current=="number"?(typeof i!="string"&&(c.current=i<0?0:i),p.current="hidden"):$o(c.current)&&(c.current=i==="0%"?0:i,p.current="hidden");const[y,T]=m.useState(c.current),[h,b]=m.useState(p.current),[w,E]=m.useState(!1);m.useEffect(()=>{fs(u.current,c.current)},[]),m.useEffect(()=>{if(i!==d.current&&u.current){BT(u.current,d.current),u.current.style.overflow="hidden";const _=u.current.offsetHeight;u.current.style.overflow="";const x=v;let P,q,S="hidden",N;const F=d.current==="auto";typeof i=="number"?(P=i<0?0:i,q=P):$o(i)?(P=i==="0%"?0:i,q=P):(P=_,q="auto",S=void 0),F&&(q=P,P=_),T(P),b("hidden"),E(!F),clearTimeout(k.current),clearTimeout(g.current),F?(N=!0,k.current=setTimeout(()=>{T(q),b(S),E(N)},50),g.current=setTimeout(()=>{E(!1),fs(u.current,q)},x)):k.current=setTimeout(()=>{T(q),b(S),E(!1),i!=="auto"&&fs(u.current,P)},x)}return d.current=i,()=>{clearTimeout(k.current),clearTimeout(g.current)}},[i]);const D={height:y,overflow:h};w&&(D.transition=`height ${v}ms ${s} 0ms`,D.WebkitTransition=D.transition);const I=typeof o["aria-hidden"]<"u"?o["aria-hidden"]:i===0;return f.createElement("div",Object.assign({},o,{className:l(n),style:D}),f.createElement("div",{"aria-hidden":I,className:l(r),ref:u},t))};var LT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const yg=m.forwardRef((e,t)=>{var{className:n,selected:r=!1,shadeOnHover:a=!0}=e,s=LT(e,["className","selected","shadeOnHover"]);const{cn:i}=ee();return f.createElement("tr",Object.assign({},s,{ref:t,className:i("navds-table__row",n,{"navds-table__row--selected":r,"navds-table__row--shade-on-hover":a})}))});var KT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const CT=m.forwardRef((e,t)=>{var{className:n,children:r,content:a,togglePlacement:s="left",defaultOpen:i=!1,open:o,onOpenChange:l,expansionDisabled:d=!1,expandOnRowClick:u=!1,colSpan:g=999,contentGutter:k,onClick:c}=e,p=KT(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:v}=ee(),[y,T]=ia({defaultValue:i,value:o,onChange:l}),h=kn("global"),b=_n(),w=D=>{T(O=>!O),D.stopPropagation()},E=D=>{u&&!d&&!vg(D.target)&&w(D)};return f.createElement(f.Fragment,null,f.createElement(yg,Object.assign({},p,{ref:t,className:v("navds-table__expandable-row",n,{"navds-table__expandable-row--open":y,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":u}),onClick:Yr(c,E)}),s==="right"&&r,f.createElement(pg,{className:v("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":y}),onClick:d?()=>null:w},!d&&f.createElement("button",{className:v("navds-table__toggle-expand-button"),type:"button","aria-controls":b,"aria-expanded":y,onClick:w},f.createElement(Rd,{className:v("navds-table__expandable-icon"),title:h(y?"showLess":"showMore")}))),s==="left"&&r),f.createElement("tr",{"data-state":y?"open":"closed",className:v("navds-table__expanded-row"),"aria-hidden":!y,id:b},f.createElement("td",{colSpan:g,className:v("navds-table__expanded-row-cell")},f.createElement(VT,{className:v("navds-table__expanded-row-collapse"),innerClassName:v(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${k??s}`),height:y?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function vg(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:vg(e.parentElement)}var GT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const HT=m.forwardRef((e,t)=>{var{className:n}=e,r=GT(e,["className"]);const{cn:a}=ee();return f.createElement("thead",Object.assign({},r,{ref:t,className:a("navds-table__header",n)}))});var YT=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ve=m.forwardRef((e,t)=>{var{className:n,zebraStripes:r=!1,size:a="medium",onSortChange:s,sort:i,stickyHeader:o=!1}=e,l=YT(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=ee();return f.createElement(fg.Provider,{value:{onSortChange:s,sort:i}},f.createElement("table",Object.assign({},l,{ref:t,className:d("navds-table",`navds-table--${a}`,n,{"navds-table--zebra-stripes":r,"navds-table--sticky-header":o})})))});ve.Header=HT;ve.Body=_T;ve.Row=yg;ve.ColumnHeader=jT;ve.HeaderCell=cg;ve.DataCell=pg;ve.ExpandableRow=CT;var $T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const WT=m.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:i,"data-color":o}=e,l=$T(e,["children","className","variant","size","icon","data-color"]);const{cn:d}=ee(),u=(a==null?void 0:a.endsWith("-filled"))&&"strong",g=(a==null?void 0:a.endsWith("-moderate"))&&"moderate";return f.createElement(qe,Object.assign({"data-color":o??zT(a),"data-variant":u||g||"outline"},l,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:d("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&f.createElement("span",{className:d("navds-tag__icon--left")},i),n)});function zT(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const bg=m.createContext({startDate:new Date,endDate:new Date,direction:"left",setStart:()=>null,setEndInclusive:()=>null,activeRow:0,setActiveRow:()=>null,initiate:()=>null,addFocusable:()=>null}),Pt=()=>{const e=m.useContext(bg);return e||console.warn("useTimelineContext must be used with TimelineContext (<Timeline />)"),e},XT=({horizontalPosition:e})=>e<=98&&e>=0,Wo=(e,t)=>Xd(e,t)<=1,QT=({horizontalPosition:e,width:t})=>e>=0&&e<=100&&t>0,Ls=(e,t,n)=>{const r=go(n,t);return go(e,t)/r*100},Va=(e,t,n,r)=>{const a=Ls(e,n,r),s=Ls(t,n,r)-a;return{horizontalPosition:a,width:s}},ZT=(e,t,n,r,a,s)=>{const i=Math.ceil(n/10),o=Rn(t);return new Array(n).fill(o).map((l,d)=>{if(d%i!==0)return null;const u=Ri(l,d),{horizontalPosition:g,width:k}=Va(u,Pr(u,1),e,t);return{direction:r,horizontalPosition:g,label:nn(u,a,{locale:s}),date:u,width:k}}).filter(l=>l!==null)},JT=(e,t,n,r,a)=>{const s=yr(e),i=ja(t),o=Pp(i,s)+1;return new Array(o).fill(s).map((l,d)=>{const u=et(l,d),{horizontalPosition:g,width:k}=Va(u,et(u,1),e,t);return{direction:n,horizontalPosition:g,label:nn(u,r,{locale:a}),date:u,width:k}})},e0=(e,t,n,r,a)=>{const s=ot(e),i=qt(t),o=jp(i,e)+1;return new Array(o).fill(s).map((l,d)=>{const u=Sr(l,d),{horizontalPosition:g,width:k}=Va(u,Sr(u,1),e,t);return{direction:n,horizontalPosition:g,label:nn(u,r,{locale:a}),date:u,width:k}})},n0=(e,t,n,r,a)=>{const s=Xd(t,e);if(s<40){const o=a("dayFormat");return ZT(e,t,s,n,o,r)}if(s<370){const o=a("monthFormat");return JT(e,t,n,o,r)}const i=a("yearFormat");return e0(e,t,n,i,r)},r0=({templates:e})=>{const{endDate:t,startDate:n,direction:r}=Pt(),a=kn("Timeline",{dayFormat:e==null?void 0:e.day,monthFormat:e==null?void 0:e.month,yearFormat:e==null?void 0:e.year}),s=ki(),i=n0(n,t,r,s,a),{cn:o}=ee();return f.createElement("div",{className:o("navds-timeline__axislabels"),"aria-hidden":"true"},i.filter(XT).map(l=>f.createElement(nr,{className:o("navds-timeline__axislabels-label"),as:"div",key:l.label,style:{justifyContent:r==="left"?"flex-start":"flex-end",[r]:`${l.horizontalPosition}%`,width:`${l.width}%`}},l.label)))};var t0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const hg=m.forwardRef((e,t)=>{var{date:n,children:r}=e,a=t0(e,["date","children"]);const{cn:s}=ee(),{startDate:i,endDate:o,direction:l}=Pt(),[d,u]=m.useState(!1),g=m.useRef(null),k=kn("Timeline"),p=!at(!1),{context:v,placement:y,middlewareData:{arrow:{x:T,y:h}={}},refs:b,floatingStyles:w}=Oi({placement:"top",open:d,onOpenChange:q=>u(q),whileElementsMounted:li,middleware:[di(p?16:8),ui(),gi({padding:5,fallbackPlacements:["bottom","top"]}),mi({element:g,padding:5})]}),E=wu(v,{handleClose:Nu(),restMs:25,delay:{open:1e3},move:!1}),D=qu(v),O=Iu(v),{getFloatingProps:I,getReferenceProps:_}=_u([E,D,O]),x=_r(b.setReference,t),P={top:"bottom",right:"left",bottom:"top",left:"right"}[y.split("-")[0]];return f.createElement(f.Fragment,null,f.createElement("div",{className:s("navds-timeline__pin-wrapper"),style:{[l]:`${Ls(n,i,o)}%`}},f.createElement("button",Object.assign({},a,{ref:x,className:s("navds-timeline__pin-button"),"aria-label":k("Pin.pin",{date:nn(n,k("dateFormat"))}),type:"button","aria-expanded":r?d:void 0},_({onKeyDown:q=>{var S;(S=a==null?void 0:a.onKeyDown)===null||S===void 0||S.call(a,q),q.key==="Enter"?u(N=>!N):q.key===" "&&u(!1)}})))),r&&d&&f.createElement(Du,{context:v,modal:!1,initialFocus:-1,returnFocus:!1},f.createElement("div",Object.assign({className:s("navds-timeline__popover"),"data-placement":y,ref:b.setFloating,role:"dialog"},I(),{style:w}),r,p&&f.createElement("div",{ref:g,style:Object.assign(Object.assign(Object.assign({},T!=null?{left:T}:{}),h!=null?{top:h}:{}),P?{[P]:"-0.5rem"}:{}),className:s("navds-timeline__popover-arrow")}))))});hg.componentType="pin";const Tg=m.createContext({periodId:"",firstFocus:!1}),Eg=()=>{const e=m.useContext(Tg);return e||console.warn("usePeriodContext must be used with PeriodContext"),e},Rg=m.createContext({periods:[],id:"",active:!1,index:0}),Pi=()=>{const e=m.useContext(Rg);return e||console.warn("useRowContext must be used with RowContext"),e},Ag=(e,t,n)=>rt(`navds-timeline__period navds-timeline__period--${n}`,{"navds-timeline__period--connected-both":e==="both","navds-timeline__period--connected-right":e==="right"&&t==="left"||e==="left"&&t==="right","navds-timeline__period--connected-left":e==="left"&&t==="left"||e==="right"&&t==="right"}),wg=(e,t,n,r,a)=>{const s=a("dateFormat"),i=nn(e,s),o=nn(t,s);return a("Period.period",{status:r||a(`Period.${n}`),start:i,end:o})},a0=f.memo(({onSelectPeriod:e,start:t,end:n,status:r,cropped:a,direction:s,left:i,width:o,icon:l,children:d,isActive:u,statusLabel:g,restProps:k,periodRef:c})=>{var p,v;const{cn:y}=ee(),[T,h]=m.useState(!1),{index:b}=Pi(),{firstFocus:w}=Eg(),{initiate:E,addFocusable:D}=Pt(),O=m.useRef(null),I=kn("Timeline"),x=!at(!1),{context:P,placement:q,middlewareData:{arrow:{x:S,y:N}={}},refs:F,floatingStyles:L}=Oi({placement:(p=k==null?void 0:k.placement)!==null&&p!==void 0?p:"top",open:T,onOpenChange:Z=>h(Z),whileElementsMounted:li,middleware:[di(x?16:8),ui(),gi({padding:5,fallbackPlacements:["bottom","top"]}),mi({element:O,padding:5})]}),V=wu(P,{handleClose:Nu(),restMs:25,delay:{open:1e3},move:!1}),U=qu(P),M=Iu(P),{getFloatingProps:Y,getReferenceProps:ne}=_u([V,U,M]),K=_r(F.setReference,c),te={top:"bottom",right:"left",bottom:"top",left:"right"}[q.split("-")[0]];return f.createElement(f.Fragment,null,f.createElement("button",Object.assign({},k,{"data-color":(v=k==null?void 0:k["data-color"])!==null&&v!==void 0?v:r,type:"button",ref:Z=>{w&&D(Z,b),K(Z)},"aria-label":wg(t,n,r,g,I),className:y("navds-timeline__period--clickable",Ag(a,s,r),k==null?void 0:k.className,{"navds-timeline__period--selected":u}),"aria-expanded":d?T:void 0,"aria-current":u||void 0},ne({onFocus:()=>{E(b)},onKeyDown:Z=>{var z;(z=k==null?void 0:k.onKeydown)===null||z===void 0||z.call(k,Z),Z.key==="Enter"&&h(W=>!W),Z.key===" "&&(e==null||e(Z),h(!1))},style:{width:`${o}%`,[s]:`${i}%`},onClick:Z=>{var z;(z=k==null?void 0:k.onClick)===null||z===void 0||z.call(k,Z),Z.detail!==0&&(e==null||e(Z))}})),f.createElement("span",{className:y("navds-timeline__period--inner")},l)),d&&T&&f.createElement(Du,{context:P,modal:!1,initialFocus:-1,returnFocus:!1},f.createElement("div",Object.assign({className:y("navds-timeline__popover"),"data-placement":q,ref:F.setFloating,role:"dialog"},Y(),{style:L}),d,x&&f.createElement("div",{ref:O,style:Object.assign(Object.assign(Object.assign({},S!=null?{left:S}:{}),N!=null?{top:N}:{}),te?{[te]:"-0.5rem"}:{}),className:y("navds-timeline__popover-arrow")}))))}),s0=({start:e,end:t,status:n,cropped:r,direction:a,left:s,width:i,icon:o,statusLabel:l,restProps:d,periodRef:u})=>{var g;const k=kn("Timeline"),{cn:c}=ee();return f.createElement("div",Object.assign({ref:u},d,{"data-color":(g=d==null?void 0:d["data-color"])!==null&&g!==void 0?g:n,className:c(Ag(r,a,n),d==null?void 0:d.className),style:{width:`${i}%`,[a]:`${s}%`}}),f.createElement("span",{className:c("navds-timeline__period--inner")},o,f.createElement("span",{className:c("navds-sr-only")},wg(e,t,n,l,k))))},ji=m.forwardRef(({icon:e},t)=>{const{periods:n}=Pi(),{periodId:r,restProps:a}=Eg(),s=n.find(T=>T.id===r);if(!s)return f.createElement(f.Fragment,null);const{start:i,endInclusive:o,width:l,horizontalPosition:d,status:u="neutral",onSelectPeriod:g,cropped:k,direction:c,children:p,isActive:v,statusLabel:y}=s;return g||p?f.createElement(a0,{periodRef:t,start:i,end:o,status:u,onSelectPeriod:g,cropped:k||"",direction:c,width:l,left:d,icon:e,isActive:v,statusLabel:y,restProps:a},p):f.createElement(s0,{periodRef:t,start:i,end:o,status:u,cropped:k||"",direction:c,width:l,left:d,icon:e,statusLabel:y,restProps:a})});ji.componentType="period";var i0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Fi=m.forwardRef((e,t)=>{var{label:n,className:r,headingTag:a="h3",icon:s}=e,i=i0(e,["label","className","headingTag","icon"]);const{cn:o}=ee(),{periods:l,id:d,active:u}=Pi(),{setActiveRow:g}=Pt(),k=kn("Timeline"),c=l.reduce((y,T)=>y.end>T.end?y:T,{}),p=l.reduce((y,T)=>y.end<T.end?y:T,{}),v=l.find(y=>!!y.children||!!y.onSelectPeriod);return f.createElement(f.Fragment,null,n&&f.createElement(qe,{as:a,id:`timeline-row-${d}`,className:o("navds-timeline__row-label"),size:"small"},s,n),f.createElement("div",{className:o("navds-timeline__row",{"navds-timeline__row--active":u})},f.createElement("ol",Object.assign({},i,{tabIndex:-1,ref:t,"aria-label":l.length===0?k("Row.noPeriods"):k("Row.period",{start:nn(p.start,k("dateFormat")),end:nn(c.end,k("dateFormat"))}),className:o("navds-timeline__row-periods",r),onKeyDown:y=>{(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),g(y.key))}}),l==null?void 0:l.map(y=>f.createElement("li",{key:`period-${y.id}`},f.createElement(Tg.Provider,{value:{periodId:y.id,firstFocus:(v==null?void 0:v.id)===y.id,restProps:y==null?void 0:y.restProps}},f.createElement(ji,{start:y.start,end:y.endInclusive,icon:y.icon,ref:y==null?void 0:y.ref})))))))});Fi.componentType="row";const o0=(e,t)=>e.horizontalPosition-t.horizontalPosition,l0=(e,t,n,r="left",a,s,i)=>{const o=e.start,l=e.end,d=a<s.length-1&&!hi(s[a+1].start,l),{horizontalPosition:u,width:g}=Va(Rn(o),ca(d?Rn(Ri(s[a+1].start,1)):l),t,n);return{id:`r-${i}-p-${a}`,start:o,endInclusive:l,horizontalPosition:u,direction:r,width:g,end:l,status:e.status,onSelectPeriod:e.onSelectPeriod,icon:e.icon,children:e.children,isActive:e.isActive,statusLabel:e.statusLabel}},d0=(e,t,n)=>{const r=t>0&&Wo(e.start,n[t-1].endInclusive),a=t<n.length-1&&Wo(n[t+1].start,e.endInclusive);return r&&a?Object.assign(Object.assign({},e),{cropped:"both"}):r?Object.assign(Object.assign({},e),{cropped:"left"}):a?Object.assign(Object.assign({},e),{cropped:"right"}):e},u0=e=>{let{horizontalPosition:t,width:n,cropped:r}=e;return t+n>100&&(n=100-t,r=r==="left"||r==="both"?"both":"right"),t<0&&t+n>0&&(n=t+n,t=0,r=r==="right"||r==="both"?"both":"left"),Object.assign(Object.assign({},e),{width:n,horizontalPosition:t,cropped:r})},g0=(e,t,n,r)=>m.useMemo(()=>e.map((a,s)=>{const i=a.periods.sort((o,l)=>o.start.valueOf()-l.start.valueOf()).map((o,l)=>Object.assign(Object.assign({},l0(o,t,n,r,l,a.periods,s)),{restProps:o==null?void 0:o.restProps,ref:o==null?void 0:o.ref})).sort(o0).map(d0).map(u0).filter(QT);return{id:`tl-row-${s}`,label:a.label,headingTag:a.headingTag||"h3",icon:a.icon,periods:r==="left"?i:i.reverse(),restProps:a==null?void 0:a.restProps,ref:a==null?void 0:a.ref}}),[e,t,n,r]),m0=({startDate:e,rows:t})=>m.useMemo(()=>{if(e)return e;const n=t.flat().filter(a=>a.start).map(a=>a.start);return n.length===0?new Date:n.reduce((a,s)=>s<a?s:a)},[e,t]),k0=(e,t)=>t.end>e?t.end:e,c0=e=>e.flat().reduce(k0,new Date(0)),zo=({endDate:e,rows:t})=>m.useMemo(()=>e||Pr(c0(t),1),[e,t]),f0=e=>{const t=[];return e==null||e.forEach(n=>{var r,a,s,i,o,l,d,u,g,k,c,p;const v=[];if(f.isValidElement(n)&&(!((r=n==null?void 0:n.props)===null||r===void 0)&&r.children)){if(Array.isArray(n.props.children))for(let y=0;y<n.props.children.length;y++){const T=n.props.children[y];v.push({start:(a=T==null?void 0:T.props)===null||a===void 0?void 0:a.start,end:(s=T==null?void 0:T.props)===null||s===void 0?void 0:s.end,status:((i=T==null?void 0:T.props)===null||i===void 0?void 0:i.status)||"neutral",onSelectPeriod:(o=T.props)===null||o===void 0?void 0:o.onSelectPeriod,label:n.props.label,icon:T.props.icon,children:T.props.children,isActive:T.props.isActive,statusLabel:T.props.statusLabel,restProps:Ke(T.props,["start","end","status","onSelectPeriod","label","icon","children","isActive","statusLabel"]),ref:T==null?void 0:T.ref})}else v.push({start:n.props.children.props.start,end:n.props.children.props.end,status:((l=n.props.children.props)===null||l===void 0?void 0:l.status)||"neutral",onSelectPeriod:(d=n.props.children.props)===null||d===void 0?void 0:d.onSelectPeriod,label:n.props.label,icon:(u=n.props.children.props)===null||u===void 0?void 0:u.icon,children:(g=n.props.children.props)===null||g===void 0?void 0:g.children,statusLabel:(k=n.props.children.props)===null||k===void 0?void 0:k.statusLabel,restProps:Ke(n.props.children.props,["start","end","status","onSelectPeriod","label","icon","children","isActive","statusLabel"]),ref:(p=(c=n.props)===null||c===void 0?void 0:c.children)===null||p===void 0?void 0:p.ref});t.push({label:n.props.label,icon:n.props.icon,headingTag:n.props.headingTag,periods:v,restProps:Ke(n.props,["label","icon","headingTag"]),ref:n==null?void 0:n.ref})}}),t};var p0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const y0=m.forwardRef((e,t)=>{var{label:n,interval:r,count:a}=e,s=p0(e,["label","interval","count"]);const{setStart:i,endDate:o,startDate:l,direction:d}=Pt(),u=kn("Timeline"),g=u("dateFormat"),{cn:k}=ee();let c;r==="month"?c=d==="left"?du(o,a):et(l,a):c=d==="left"?Xy(o,a):Sr(l,a);const p=Dr(d==="left"?l:o,c);return f.createElement(nr,{as:"li"},f.createElement("button",Object.assign({type:"button","aria-label":p?u("Zoom.reset"):u("Zoom.zoom",{start:nn(c,g),end:nn(o,g)}),ref:t},s,{className:k("navds-timeline__zoom-button"),onClick:()=>{i(c)},"aria-pressed":p}),n))});var v0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const xi=m.forwardRef((e,t)=>{var{className:n,children:r}=e,a=v0(e,["className","children"]);const{cn:s}=ee();return f.createElement("ul",Object.assign({ref:t,className:s(n,"navds-timeline__zoom")},a),r)});xi.Button=y0;xi.componentType="zoom";var b0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const fr=m.forwardRef((e,t)=>{var{children:n,startDate:r,endDate:a,direction:s="left",axisLabelTemplates:i}=e,o=b0(e,["children","startDate","endDate","direction","axisLabelTemplates"]);const{cn:l}=ee(),d=Array.isArray(n),u=m.useRef([]);d||(n=[n]);const g=f.Children.toArray(n).filter(q=>{var S;return((S=q==null?void 0:q.type)===null||S===void 0?void 0:S.componentType)==="row"}),k=f.Children.toArray(n).filter(q=>{var S;return((S=q==null?void 0:q.type)===null||S===void 0?void 0:S.componentType)==="pin"}).map(q=>()=>q),c=f.Children.toArray(n).find(q=>{var S;return((S=q==null?void 0:q.type)===null||S===void 0?void 0:S.componentType)==="zoom"}),p=m.useMemo(()=>f0(g),[g]),v=p.map(q=>q!=null&&q.periods?q.periods:[]),y=Rn(m0({startDate:r,rows:v})),[T,h]=m.useState(y),[b,w]=m.useState(null),[E,D]=m.useState(ca(zo({endDate:a,rows:v}))),O=ca(zo({endDate:a,rows:v})),I=g0(p,r??T,a??E,s),_=q=>{if(!(r||a))if(s==="left"){if(Dr(q,T)){h(y);return}h(q)}else{if(Dr(q,E)){D(O);return}D(q)}},x=q=>{var S,N,F,L;if(b!==null&&q==="ArrowDown"){for(let V=b+1;V<I.length;V++)if(I[V].periods.find(M=>!!M.children||!!M.onSelectPeriod)){w(V),(N=(S=u.current.find(M=>M.id===V))===null||S===void 0?void 0:S.ref)===null||N===void 0||N.focus();break}return}if(b!==null&&q==="ArrowUp"){for(let V=b-1;V>=0;V--)if(I[V].periods.find(M=>!!M.children||!!M.onSelectPeriod)){w(V),(L=(F=u.current.find(M=>M.id===V))===null||F===void 0?void 0:F.ref)===null||L===void 0||L.focus();break}return}},P=(q,S)=>{let N=u.current;N=N.filter(F=>F.id!==S),N.push({ref:q,id:S}),u.current=N};return f.createElement(bg.Provider,{value:{startDate:r??T,endDate:a??E,direction:s,setStart:q=>_(q),setEndInclusive:q=>D(q),activeRow:b,setActiveRow:q=>x(q),initiate:q=>w(q),addFocusable:P}},f.createElement("div",Object.assign({},o,{ref:t}),f.createElement("div",{className:l("navds-timeline")},f.createElement(r0,{templates:i}),k.map((q,S)=>f.createElement(q,{key:`pin-${S}`})),I.map((q,S)=>f.createElement(Rg.Provider,{key:`row-${q.id}`,value:{periods:q.periods,id:q.id,active:b===S,index:S}},f.createElement(Fi,Object.assign({},q==null?void 0:q.restProps,{ref:q==null?void 0:q.ref,label:q.label,icon:q.icon,headingTag:q.headingTag}))))),c))});fr.Row=Fi;fr.Period=ji;fr.Pin=hg;fr.Zoom=xi;const h0=e=>{const t=jr(e,"fieldset"),{inputProps:n}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":n["aria-invalid"],"aria-describedby":n["aria-describedby"]}})};var T0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Og=m.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:d,readOnly:u,inputDescriptionId:g}=h0(e),{cn:k}=ee(),c=m.useContext(Ot),{children:p,className:v,errorPropagation:y=!0,legend:T,description:h,hideLegend:b,nativeReadOnly:w=!0}=e,E=T0(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return f.createElement(Ot.Provider,{value:{error:y?(n=e.error)!==null&&n!==void 0?n:c==null?void 0:c.error:void 0,errorId:rt({[i]:o,[(r=c==null?void 0:c.errorId)!==null&&r!==void 0?r:""]:!!(c!=null&&c.error)}),size:d,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:u}},f.createElement("fieldset",Object.assign({},Ke(E,["errorId","error","size","readOnly"]),Ke(s,["aria-describedby","aria-invalid"]),{ref:t,className:k(v,"navds-fieldset",`navds-fieldset--${d}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":u})}),f.createElement(qn,{size:d,as:"legend",className:k("navds-fieldset__legend",{"navds-sr-only":!!b})},u&&(w?f.createElement(Ma,null):f.createElement(Si,null)),T),!!h&&f.createElement(qe,{className:k("navds-fieldset__description",{"navds-sr-only":!!b}),id:g,size:d??"medium",as:"div"},e.description),p,f.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:k("navds-fieldset__error")},o&&f.createElement(it,{size:d,showIcon:!0},e.error))))});var E0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Sg=m.createContext(null);m.forwardRef((e,t)=>{var n,r,{value:a,defaultValue:s,onChange:i=()=>{},children:o,className:l}=e,d=E0(e,["value","defaultValue","onChange","children","className"]);const{cn:u}=ee(),g=m.useContext(Ot),[k,c]=m.useState(s??[]),p=v=>{const y=a??k,T=y.includes(v)?y.filter(h=>h!==v):[...y,v];a===void 0&&c(T),i(T)};return f.createElement(Og,Object.assign({},d,{ref:t,className:u(l,"navds-checkbox-group",`navds-checkbox-group--${(r=(n=d.size)!==null&&n!==void 0?n:g==null?void 0:g.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),f.createElement(Sg.Provider,{value:{value:a,defaultValue:s,toggleValue:p}},f.createElement("div",{className:u("navds-checkboxes")},o)))});var R0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const A0=e=>{const t=m.useContext(Sg),n=jr(Ke(e,["description","children"]),"checkbox"),{inputProps:r,readOnly:a}=n,s=R0(n,["inputProps","readOnly"]);return t&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},s),{readOnly:a,nested:!!t,inputProps:Object.assign(Object.assign({},r),{checked:t!=null&&t.value?t.value.includes(e.value):e.checked,defaultChecked:t!=null&&t.defaultValue?t.defaultValue.includes(e.value):e.defaultChecked,onChange:i=>{var o;a||((o=e.onChange)===null||o===void 0||o.call(e,i),t==null||t.toggleValue(e.value))},onClick:i=>{var o;if(a){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)}})})},w0=m.forwardRef((e,t)=>{const{cn:n}=ee(),{inputProps:r,hasError:a,size:s,readOnly:i,nested:o}=A0(e),l=_n(),d=_n();return f.createElement("div",{className:n(e.className,"navds-checkbox",`navds-checkbox--${s}`,{"navds-checkbox--error":a,"navds-checkbox--disabled":r.disabled,"navds-checkbox--readonly":i}),"data-color":a?"danger":e["data-color"]},f.createElement("input",Object.assign({},Ke(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),Ke(r,["aria-invalid"]),{type:"checkbox",className:n("navds-checkbox__input"),ref:u=>{var g;u&&(u.indeterminate=(g=e.indeterminate)!==null&&g!==void 0?g:!1),typeof t=="function"?t(u):t!=null&&(t.current=u)},"aria-labelledby":n(l,!!e["aria-labelledby"]&&e["aria-labelledby"],{[d]:e.description})})),f.createElement("label",{htmlFor:r.id,className:n("navds-checkbox__label")},f.createElement("span",{className:n("navds-checkbox__icon")},f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},f.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),f.createElement("span",{className:n("navds-checkbox__icon-indeterminate")}),f.createElement("span",{className:n("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},f.createElement(qe,{as:"span",id:l,size:s,className:n("navds-checkbox__label-text"),"aria-hidden":!0},!o&&i&&f.createElement(Si,null),e.children),e.description&&f.createElement(qe,{as:"span",id:d,size:s,className:n("navds-form-field__subdescription navds-checkbox__description"),"aria-hidden":!0},e.description))))});var O0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Dg=f.createContext(null),S0=m.forwardRef((e,t)=>{var n,r,{children:a,className:s,name:i,defaultValue:o,value:l,onChange:d=()=>{},required:u,readOnly:g}=e,k=O0(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:c}=ee(),p=m.useContext(Ot),v=_n();return f.createElement(Og,Object.assign({},k,{readOnly:g,ref:t,className:c(s,"navds-radio-group",`navds-radio-group--${(r=(n=k.size)!==null&&n!==void 0?n:p==null?void 0:p.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),f.createElement(Dg.Provider,{value:{name:i??`radioGroupName-${v}`,defaultValue:o,value:l,onChange:d,required:u}},f.createElement("div",{className:c("navds-radio-buttons")},a)))});var D0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const I0=e=>{const t=m.useContext(Dg),n=jr(Ke(e,["description"]),"radio"),{inputProps:r,readOnly:a}=n,s=D0(n,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:a,inputProps:Object.assign(Object.assign({},r),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:i=>{var o,l;a||((o=e.onChange)===null||o===void 0||o.call(e,i),(l=t==null?void 0:t.onChange)===null||l===void 0||l.call(t,e.value))},onClick:i=>{var o;if(a){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)},required:t==null?void 0:t.required,type:"radio"})})},Xo=m.forwardRef((e,t)=>{const{cn:n}=ee(),{inputProps:r,size:a,hasError:s,readOnly:i}=I0(e),o=_n(),l=_n();return f.createElement("div",{className:n(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":s,"navds-radio--disabled":r.disabled,"navds-radio--readonly":i}),"data-color":s?"danger":e["data-color"]},f.createElement("input",Object.assign({},Ke(e,["children","size","description","readOnly"]),Ke(r,["aria-invalid"]),{"aria-labelledby":rt(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[l]:e.description}),className:n("navds-radio__input"),ref:t})),f.createElement("label",{htmlFor:r.id,className:n("navds-radio__label")},f.createElement("span",{className:n("navds-radio__content")},f.createElement(qe,{as:"span",id:o,size:a,"aria-hidden":!0},e.children),e.description&&f.createElement(qe,{as:"span",id:l,size:a,className:n("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var q0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Qo=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Zo=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Gt(e){return parseInt(e,10)||0}const _0=m.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:l,style:d,value:u}=e,g=q0(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:k}=m.useRef(u!=null),c=m.useRef(null),p=_r(c,t),v=m.useRef(null),y=m.useRef(0),[T,h]=m.useState({outerHeightStyle:0}),b=f.useCallback(()=>{const O=c.current,_=Zo(O).getComputedStyle(O);if(_.width==="0px")return{outerHeightStyle:0};const x=v.current;x.style.width=_.width,x.value=O.value||g.placeholder||"x",x.value.slice(-1)===`
`&&(x.value+=" ");const P=_.boxSizing,q=Gt(_.paddingBottom)+Gt(_.paddingTop),S=Gt(_.borderBottomWidth)+Gt(_.borderTopWidth),N=x.scrollHeight-q;x.value="x";const F=x.scrollHeight-q;let L=N;o&&(L=Math.max(Number(o)*F,L)),i&&(L=Math.min(Number(i)*F,L)),L=Math.max(L,F);const V=L+(P==="border-box"?q+S:0),U=Math.abs(L-N)<=1;return{outerHeightStyle:V,overflow:U}},[i,o,g.placeholder]),w=()=>{const O=b();Jo(O)||h(I=>Qo(I,O,y))};Qr(()=>{const O=()=>{const q=b();Jo(q)||pd.flushSync(()=>{h(S=>Qo(S,q,y))})},I=Ed(()=>{var q,S,N;if(y.current=0,!((q=c.current)===null||q===void 0)&&q.style.height||!((S=c.current)===null||S===void 0)&&S.style.width){((N=c.current)===null||N===void 0?void 0:N.style.overflow)==="hidden"&&h(F=>Object.assign(Object.assign({},F),{overflow:!1}));return}O()},166,!0),_=c.current,x=Zo(_);x.addEventListener("resize",I);let P;return typeof ResizeObserver<"u"&&(P=new ResizeObserver(I),P.observe(_)),()=>{I.clear(),x.removeEventListener("resize",I),P&&P.disconnect()}},[b]),Qr(()=>{w()}),m.useEffect(()=>{y.current=0},[u]);const E=O=>{y.current=0,k||w(),s&&s(O)},D=Object.assign({"--__ac-textarea-height":T.outerHeightStyle+"px","--__axc-textarea-height":T.outerHeightStyle+"px",overflow:T.overflow&&!l&&!(!((n=c.current)===null||n===void 0)&&n.style.height)&&!(!((r=c.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},d);return f.createElement(f.Fragment,null,f.createElement("textarea",Object.assign({value:u,onChange:E,ref:p,rows:o,style:D},g,{className:a})),f.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:v,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function Jo(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const N0=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const{cn:s}=ee(),i=kn("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=t-n,[l,d]=m.useState(o);return m.useEffect(()=>{const u=Ed(()=>{d(o)},2e3);return u(),()=>{u.clear()}},[o]),f.createElement(f.Fragment,null,f.createElement("span",{id:e,className:s("navds-sr-only")},i("maxLength",{maxLength:t})),o<20&&f.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},el(l,i)),f.createElement(qe,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:r},el(o,i)))},el=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var P0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const j0=m.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:d,inputDescriptionId:u}=jr(e,"textarea"),{label:g,className:k,description:c,maxLength:p,hideLabel:v=!1,resize:y,UNSAFE_autoScrollbar:T,i18n:h,readOnly:b}=e,w=P0(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:E}=ee(),D=_n(),O=p!==void 0&&p>0,[I,_]=m.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),x=()=>{let q=w!=null&&w.minRows?w==null?void 0:w.minRows:3;return d==="small"&&(q=w!=null&&w.minRows?w==null?void 0:w.minRows:2),q},P=rt(s["aria-describedby"],{[D??""]:O});return f.createElement("div",{className:E(k,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":l,"navds-textarea--autoscrollbar":T,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},f.createElement(qn,{htmlFor:s.id,size:d,className:E("navds-form-field__label",{"navds-sr-only":v})},b&&f.createElement(Ma,null),g),!!c&&f.createElement(qe,{className:E("navds-form-field__description",{"navds-sr-only":v}),id:u,size:d,as:"div"},c),f.createElement(_0,Object.assign({},Ke(w,["error","errorId","size"]),s,{onChange:Yr(e.onChange,e.value===void 0?q=>_(q.target.value):void 0),minRows:x(),autoScrollbar:T,ref:t,readOnly:b,className:E("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},P?{"aria-describedby":P}:{})),O&&!b&&!s.disabled&&f.createElement(N0,{maxLengthId:D,maxLength:p,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:I.length,size:d,i18n:h}),f.createElement("div",{className:E("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&f.createElement(it,{size:d,showIcon:!0},e.error)))});var F0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const x0=m.forwardRef((e,t)=>{const{cn:n}=ee(),{inputProps:r,errorId:a,showErrorMsg:s,hasError:i,size:o,inputDescriptionId:l}=jr(e,"textField"),{label:d,className:u,description:g,htmlSize:k,hideLabel:c=!1,type:p="text",readOnly:v}=e,y=F0(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return f.createElement("div",{className:n(u,"navds-form-field",`navds-form-field--${o}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!r.disabled,"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":v,"navds-text-field--readonly":v})},f.createElement(qn,{htmlFor:r.id,size:o,className:n("navds-form-field__label",{"navds-sr-only":c})},v&&f.createElement(Ma,null),d),!!g&&f.createElement(qe,{className:n("navds-form-field__description",{"navds-sr-only":c}),id:l,size:o,as:"div"},g),f.createElement("input",Object.assign({},Ke(y,["error","errorId","size"]),r,{ref:t,type:p,readOnly:v,className:n("navds-text-field__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:k})),f.createElement("div",{className:n("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},s&&f.createElement(it,{size:o,showIcon:!0},e.error)))});function M0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nl={exports:{}},ft={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl;function U0(){if(rl)return ft;rl=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:i,ref:a!==void 0?a:null,props:s}}return ft.Fragment=t,ft.jsx=n,ft.jsxs=n,ft}var tl;function B0(){return tl||(tl=1,nl.exports=U0()),nl.exports}var ln=B0();const Ig=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:ln.jsx(ci,{variant:"warning",size:"small",children:ln.jsx(An,{gap:"2",children:f.Children.map(e,t=>ln.jsx(qe,{size:"small",children:t},um(t)?t.key:t))})}),jt={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},al=Un(jt),V0=({onClick:e=()=>{},erOverstyrt:t=!1})=>{const[n,r]=m.useState(t),a=()=>{n||(r(!0),e(!0))};return m.useEffect(()=>{r(t)},[t]),ln.jsx(Xe,{variant:n?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:a,"aria-disabled":t,disabled:t,icon:n?ln.jsx(ek,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:al.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):ln.jsx(Zm,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:al.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},ha="#B7B1A9",qg=4,L0=(e,t,n)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${ha};
    border-radius: ${qg}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${n}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${ha};
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
`,K0=(e,t,n)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${ha};
    border-radius: ${qg}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${n}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${ha};
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
`,C0=(e,t,n,r)=>t?K0(e,n,r):L0(e,n,r),G0=(e,t,n)=>n?"":t?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,H0=({children:e,alignOffset:t=0,alignLeft:n=!1,marginTop:r=0,marginLeft:a=0,hideBorder:s=!1})=>ln.jsxs(ln.Fragment,{children:[ln.jsx("style",{dangerouslySetInnerHTML:{__html:C0(t,n,r,a)}}),ln.jsx("div",{className:G0(t,n,s),children:e})]});var sl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var il;function Y0(){return il||(il=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,r.call(this,o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(sl)),sl.exports}var $0=Y0();const Mi=M0($0),W0="_borderbox_1vkvn_1",z0="_error_1vkvn_5",X0="_warning_1vkvn_8",Q0={borderbox:W0,error:z0,warning:X0};Mi.bind(Q0);const Z0="_aksjonspunkt_kn1hn_1",J0="_erAksjonspunktApent_kn1hn_4",eE="_erIkkeGodkjentAvBeslutter_kn1hn_8",nE={aksjonspunkt:Z0,erAksjonspunktApent:J0,erIkkeGodkjentAvBeslutter:eE};Mi.bind(nE);const rE=({dateString:e,year:t,month:n,day:r})=>ln.jsx(ln.Fragment,{children:dd(e,{year:t,month:n,day:r})});Un(jt);const tE=({dateStringFom:e,dateStringTom:t,showTodayString:n=!1})=>ln.jsx(ln.Fragment,{children:Ws(e,t,{showTodayString:n})});Un(jt);const aE="_divider_1t980_1",sE="_dividerParagraf_1t980_8",iE="_leftPanel_1t980_11",oE="_rightPanel_1t980_14",lE={divider:aE,dividerParagraf:sE,leftPanel:iE,rightPanel:oE};Mi.bind(lE);const Ui=()=>ln.jsx("span",{"data-testid":"editedIcon",children:ln.jsx(gk,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});Un(jt);Un(jt);var Ft=e=>e.type==="checkbox",Er=e=>e instanceof Date,un=e=>e==null;const _g=e=>typeof e=="object";var ze=e=>!un(e)&&!Array.isArray(e)&&_g(e)&&!Er(e),Ng=e=>ze(e)&&e.target?Ft(e.target)?e.target.checked:e.target.value:e,dE=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Pg=(e,t)=>e.has(dE(t)),uE=e=>{const t=e.constructor&&e.constructor.prototype;return ze(t)&&t.hasOwnProperty("isPrototypeOf")},Bi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ue(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Bi&&(e instanceof Blob||r))&&(n||ze(e)))if(t=n?[]:{},!n&&!uE(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=Ue(e[a]));else return e;return t}var La=e=>/^\w*$/.test(e),je=e=>e===void 0,Ka=e=>Array.isArray(e)?e.filter(Boolean):[],Vi=e=>Ka(e.replace(/["|']|\]/g,"").split(/\.|\[/)),G=(e,t,n)=>{if(!t||!ze(e))return n;const r=(La(t)?[t]:Vi(t)).reduce((a,s)=>un(a)?a:a[s],e);return je(r)||r===e?je(e[t])?n:e[t]:r},Tn=e=>typeof e=="boolean",Oe=(e,t,n)=>{let r=-1;const a=La(t)?[t]:Vi(t),s=a.length,i=s-1;for(;++r<s;){const o=a[r];let l=n;if(r!==i){const d=e[o];l=ze(d)||Array.isArray(d)?d:isNaN(+a[r+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}};const Ta={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Sn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Qn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Li=f.createContext(null);Li.displayName="HookFormContext";const Pn=()=>f.useContext(Li),gE=e=>{const{children:t,...n}=e;return f.createElement(Li.Provider,{value:n},t)};var jg=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return t._proxyFormState[i]!==Sn.all&&(t._proxyFormState[i]=!r||Sn.all),n&&(n[i]=!0),e[i]}});return a};const Ca=typeof window<"u"?m.useLayoutEffect:m.useEffect;function mE(e){const t=Pn(),{control:n=t.control,disabled:r,name:a,exact:s}=e||{},[i,o]=f.useState(n._formState),l=f.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Ca(()=>n._subscribe({name:a,formState:l.current,exact:s,callback:d=>{!r&&o({...n._formState,...d})}}),[a,r,s]),f.useEffect(()=>{l.current.isValid&&n._setValid(!0)},[n]),f.useMemo(()=>jg(i,n,l.current,!1),[i,n])}var Yn=e=>typeof e=="string",Fg=(e,t,n,r,a)=>Yn(e)?(r&&t.watch.add(e),G(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),G(n,s))):(r&&(t.watchAll=!0),n);function kE(e){const t=Pn(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:i}=e||{},o=f.useRef(a),[l,d]=f.useState(n._getWatch(r,o.current));return Ca(()=>n._subscribe({name:r,formState:{values:!0},exact:i,callback:u=>!s&&d(Fg(r,n._names,u.values||n._formValues,!1,o.current))}),[r,n,s,i]),f.useEffect(()=>n._removeUnmounted()),l}function lt(e){const t=Pn(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,i=Pg(a._names.array,n),o=kE({control:a,name:n,defaultValue:G(a._formValues,n,G(a._defaultValues,n,e.defaultValue)),exact:!0}),l=mE({control:a,name:n,exact:!0}),d=f.useRef(e),u=f.useRef(a.register(n,{...e.rules,value:o,...Tn(e.disabled)?{disabled:e.disabled}:{}})),g=f.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!G(l.errors,n)},isDirty:{enumerable:!0,get:()=>!!G(l.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!G(l.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!G(l.validatingFields,n)},error:{enumerable:!0,get:()=>G(l.errors,n)}}),[l,n]),k=f.useCallback(y=>u.current.onChange({target:{value:Ng(y),name:n},type:Ta.CHANGE}),[n]),c=f.useCallback(()=>u.current.onBlur({target:{value:G(a._formValues,n),name:n},type:Ta.BLUR}),[n,a._formValues]),p=f.useCallback(y=>{const T=G(a._fields,n);T&&y&&(T._f.ref={focus:()=>y.focus&&y.focus(),select:()=>y.select&&y.select(),setCustomValidity:h=>y.setCustomValidity(h),reportValidity:()=>y.reportValidity()})},[a._fields,n]),v=f.useMemo(()=>({name:n,value:o,...Tn(r)||l.disabled?{disabled:l.disabled||r}:{},onChange:k,onBlur:c,ref:p}),[n,r,l.disabled,k,c,p,o]);return f.useEffect(()=>{const y=a._options.shouldUnregister||s;a.register(n,{...d.current.rules,...Tn(d.current.disabled)?{disabled:d.current.disabled}:{}});const T=(h,b)=>{const w=G(a._fields,h);w&&w._f&&(w._f.mount=b)};if(T(n,!0),y){const h=Ue(G(a._options.defaultValues,n));Oe(a._defaultValues,n,h),je(G(a._formValues,n))&&Oe(a._formValues,n,h)}return!i&&a.register(n),()=>{(i?y&&!a._state.action:y)?a.unregister(n):T(n,!1)}},[n,a,i,s]),f.useEffect(()=>{a._setDisabledField({disabled:r,name:n})},[r,n,a]),f.useMemo(()=>({field:v,formState:l,fieldState:g}),[v,l,g])}var cE=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},yn=e=>Array.isArray(e)?e:[e],ol=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},Ks=e=>un(e)||!_g(e);function kr(e,t,n=new WeakSet){if(Ks(e)||Ks(t))return e===t;if(Er(e)&&Er(t))return e.getTime()===t.getTime();const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(const s of r){const i=e[s];if(!a.includes(s))return!1;if(s!=="ref"){const o=t[s];if(Er(i)&&Er(o)||ze(i)&&ze(o)||Array.isArray(i)&&Array.isArray(o)?!kr(i,o,n):i!==o)return!1}}return!0}var dn=e=>ze(e)&&!Object.keys(e).length,Ki=e=>e.type==="file",Fn=e=>typeof e=="function",Ea=e=>{if(!Bi)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},xg=e=>e.type==="select-multiple",Ci=e=>e.type==="radio",fE=e=>Ci(e)||Ft(e),ps=e=>Ea(e)&&e.isConnected;function pE(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=je(e)?r++:e[t[r++]];return e}function yE(e){for(const t in e)if(e.hasOwnProperty(t)&&!je(e[t]))return!1;return!0}function Ye(e,t){const n=Array.isArray(t)?t:La(t)?[t]:Vi(t),r=n.length===1?e:pE(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&(ze(r)&&dn(r)||Array.isArray(r)&&yE(r))&&Ye(e,n.slice(0,-1)),e}var Mg=e=>{for(const t in e)if(Fn(e[t]))return!0;return!1};function Ra(e,t={}){const n=Array.isArray(e);if(ze(e)||n)for(const r in e)Array.isArray(e[r])||ze(e[r])&&!Mg(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Ra(e[r],t[r])):un(e[r])||(t[r]=!0);return t}function Ug(e,t,n){const r=Array.isArray(e);if(ze(e)||r)for(const a in e)Array.isArray(e[a])||ze(e[a])&&!Mg(e[a])?je(t)||Ks(n[a])?n[a]=Array.isArray(e[a])?Ra(e[a],[]):{...Ra(e[a])}:Ug(e[a],un(t)?{}:t[a],n[a]):n[a]=!kr(e[a],t[a]);return n}var pt=(e,t)=>Ug(e,t,Ra(t));const ll={value:!1,isValid:!1},dl={value:!0,isValid:!0};var Bg=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!je(e[0].attributes.value)?je(e[0].value)||e[0].value===""?dl:{value:e[0].value,isValid:!0}:dl:ll}return ll},Vg=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>je(e)?e:t?e===""?NaN:e&&+e:n&&Yn(e)?new Date(e):r?r(e):e;const ul={isValid:!1,value:null};var Lg=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,ul):ul;function gl(e){const t=e.ref;return Ki(t)?t.files:Ci(t)?Lg(e.refs).value:xg(t)?[...t.selectedOptions].map(({value:n})=>n):Ft(t)?Bg(e.refs).value:Vg(je(t.value)?e.ref.value:t.value,e)}var vE=(e,t,n,r)=>{const a={};for(const s of e){const i=G(t,s);i&&Oe(a,s,i._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Aa=e=>e instanceof RegExp,yt=e=>je(e)?e:Aa(e)?e.source:ze(e)?Aa(e.value)?e.value.source:e.value:e,Hr=e=>({isOnSubmit:!e||e===Sn.onSubmit,isOnBlur:e===Sn.onBlur,isOnChange:e===Sn.onChange,isOnAll:e===Sn.all,isOnTouch:e===Sn.onTouched});const ml="AsyncFunction";var bE=e=>!!e&&!!e.validate&&!!(Fn(e.validate)&&e.validate.constructor.name===ml||ze(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===ml)),hE=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Cs=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const zr=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=G(e,a);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],a)&&!r)return!0;if(i.ref&&t(i.ref,i.name)&&!r)return!0;if(zr(o,t))break}else if(ze(o)&&zr(o,t))break}}};function kl(e,t,n){const r=G(e,n);if(r||La(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),i=G(t,s),o=G(e,s);if(i&&!Array.isArray(i)&&n!==s)return{name:n};if(o&&o.type)return{name:s,error:o};if(o&&o.root&&o.root.type)return{name:`${s}.root`,error:o.root};a.pop()}return{name:n}}var TE=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return dn(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(i=>t[i]===(!r||Sn.all))},EE=(e,t,n)=>!e||!t||e===t||yn(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),RE=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,AE=(e,t)=>!Ka(G(e,t)).length&&Ye(e,t),Kg=(e,t,n)=>{const r=yn(G(e,n));return Oe(r,"root",t[n]),Oe(e,n,r),e},ra=e=>Yn(e);function cl(e,t,n="validate"){if(ra(e)||Array.isArray(e)&&e.every(ra)||Tn(e)&&!e)return{type:n,message:ra(e)?e:"",ref:t}}var Cr=e=>ze(e)&&!Aa(e)?e:{value:e,message:""},Gs=async(e,t,n,r,a,s)=>{const{ref:i,refs:o,required:l,maxLength:d,minLength:u,min:g,max:k,pattern:c,validate:p,name:v,valueAsNumber:y,mount:T}=e._f,h=G(n,v);if(!T||t.has(v))return{};const b=o?o[0]:i,w=q=>{a&&b.reportValidity&&(b.setCustomValidity(Tn(q)?"":q||""),b.reportValidity())},E={},D=Ci(i),O=Ft(i),I=D||O,_=(y||Ki(i))&&je(i.value)&&je(h)||Ea(i)&&i.value===""||h===""||Array.isArray(h)&&!h.length,x=cE.bind(null,v,r,E),P=(q,S,N,F=Qn.maxLength,L=Qn.minLength)=>{const V=q?S:N;E[v]={type:q?F:L,message:V,ref:i,...x(q?F:L,V)}};if(s?!Array.isArray(h)||!h.length:l&&(!I&&(_||un(h))||Tn(h)&&!h||O&&!Bg(o).isValid||D&&!Lg(o).isValid)){const{value:q,message:S}=ra(l)?{value:!!l,message:l}:Cr(l);if(q&&(E[v]={type:Qn.required,message:S,ref:b,...x(Qn.required,S)},!r))return w(S),E}if(!_&&(!un(g)||!un(k))){let q,S;const N=Cr(k),F=Cr(g);if(!un(h)&&!isNaN(h)){const L=i.valueAsNumber||h&&+h;un(N.value)||(q=L>N.value),un(F.value)||(S=L<F.value)}else{const L=i.valueAsDate||new Date(h),V=Y=>new Date(new Date().toDateString()+" "+Y),U=i.type=="time",M=i.type=="week";Yn(N.value)&&h&&(q=U?V(h)>V(N.value):M?h>N.value:L>new Date(N.value)),Yn(F.value)&&h&&(S=U?V(h)<V(F.value):M?h<F.value:L<new Date(F.value))}if((q||S)&&(P(!!q,N.message,F.message,Qn.max,Qn.min),!r))return w(E[v].message),E}if((d||u)&&!_&&(Yn(h)||s&&Array.isArray(h))){const q=Cr(d),S=Cr(u),N=!un(q.value)&&h.length>+q.value,F=!un(S.value)&&h.length<+S.value;if((N||F)&&(P(N,q.message,S.message),!r))return w(E[v].message),E}if(c&&!_&&Yn(h)){const{value:q,message:S}=Cr(c);if(Aa(q)&&!h.match(q)&&(E[v]={type:Qn.pattern,message:S,ref:i,...x(Qn.pattern,S)},!r))return w(S),E}if(p){if(Fn(p)){const q=await p(h,n),S=cl(q,b);if(S&&(E[v]={...S,...x(Qn.validate,S.message)},!r))return w(S.message),E}else if(ze(p)){let q={};for(const S in p){if(!dn(q)&&!r)break;const N=cl(await p[S](h,n),b,S);N&&(q={...N,...x(S,N.message)},w(N.message),r&&(E[v]=q))}if(!dn(q)&&(E[v]={ref:b,...q},!r))return E}}return w(!0),E};const wE={mode:Sn.onSubmit,reValidateMode:Sn.onChange,shouldFocusError:!0};function OE(e={}){let t={...wE,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Fn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const r={};let a=ze(t.defaultValues)||ze(t.values)?Ue(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:Ue(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...u};const k={array:ol(),state:ol()},c=t.criteriaMode===Sn.all,p=A=>j=>{clearTimeout(d),d=setTimeout(A,j)},v=async A=>{if(!t.disabled&&(u.isValid||g.isValid||A)){const j=t.resolver?dn((await O()).errors):await _(r,!0);j!==n.isValid&&k.state.next({isValid:j})}},y=(A,j)=>{!t.disabled&&(u.isValidating||u.validatingFields||g.isValidating||g.validatingFields)&&((A||Array.from(o.mount)).forEach(B=>{B&&(j?Oe(n.validatingFields,B,j):Ye(n.validatingFields,B))}),k.state.next({validatingFields:n.validatingFields,isValidating:!dn(n.validatingFields)}))},T=(A,j=[],B,$,H=!0,C=!0)=>{if($&&B&&!t.disabled){if(i.action=!0,C&&Array.isArray(G(r,A))){const J=B(G(r,A),$.argA,$.argB);H&&Oe(r,A,J)}if(C&&Array.isArray(G(n.errors,A))){const J=B(G(n.errors,A),$.argA,$.argB);H&&Oe(n.errors,A,J),AE(n.errors,A)}if((u.touchedFields||g.touchedFields)&&C&&Array.isArray(G(n.touchedFields,A))){const J=B(G(n.touchedFields,A),$.argA,$.argB);H&&Oe(n.touchedFields,A,J)}(u.dirtyFields||g.dirtyFields)&&(n.dirtyFields=pt(a,s)),k.state.next({name:A,isDirty:P(A,j),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Oe(s,A,j)},h=(A,j)=>{Oe(n.errors,A,j),k.state.next({errors:n.errors})},b=A=>{n.errors=A,k.state.next({errors:n.errors,isValid:!1})},w=(A,j,B,$)=>{const H=G(r,A);if(H){const C=G(s,A,je(B)?G(a,A):B);je(C)||$&&$.defaultChecked||j?Oe(s,A,j?C:gl(H._f)):N(A,C),i.mount&&v()}},E=(A,j,B,$,H)=>{let C=!1,J=!1;const ce={name:A};if(!t.disabled){if(!B||$){(u.isDirty||g.isDirty)&&(J=n.isDirty,n.isDirty=ce.isDirty=P(),C=J!==ce.isDirty);const Ie=kr(G(a,A),j);J=!!G(n.dirtyFields,A),Ie?Ye(n.dirtyFields,A):Oe(n.dirtyFields,A,!0),ce.dirtyFields=n.dirtyFields,C=C||(u.dirtyFields||g.dirtyFields)&&J!==!Ie}if(B){const Ie=G(n.touchedFields,A);Ie||(Oe(n.touchedFields,A,B),ce.touchedFields=n.touchedFields,C=C||(u.touchedFields||g.touchedFields)&&Ie!==B)}C&&H&&k.state.next(ce)}return C?ce:{}},D=(A,j,B,$)=>{const H=G(n.errors,A),C=(u.isValid||g.isValid)&&Tn(j)&&n.isValid!==j;if(t.delayError&&B?(l=p(()=>h(A,B)),l(t.delayError)):(clearTimeout(d),l=null,B?Oe(n.errors,A,B):Ye(n.errors,A)),(B?!kr(H,B):H)||!dn($)||C){const J={...$,...C&&Tn(j)?{isValid:j}:{},errors:n.errors,name:A};n={...n,...J},k.state.next(J)}},O=async A=>{y(A,!0);const j=await t.resolver(s,t.context,vE(A||o.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return y(A),j},I=async A=>{const{errors:j}=await O(A);if(A)for(const B of A){const $=G(j,B);$?Oe(n.errors,B,$):Ye(n.errors,B)}else n.errors=j;return j},_=async(A,j,B={valid:!0})=>{for(const $ in A){const H=A[$];if(H){const{_f:C,...J}=H;if(C){const ce=o.array.has(C.name),Ie=H._f&&bE(H._f);Ie&&u.validatingFields&&y([$],!0);const cn=await Gs(H,o.disabled,s,c,t.shouldUseNativeValidation&&!j,ce);if(Ie&&u.validatingFields&&y([$]),cn[C.name]&&(B.valid=!1,j))break;!j&&(G(cn,C.name)?ce?Kg(n.errors,cn,C.name):Oe(n.errors,C.name,cn[C.name]):Ye(n.errors,C.name))}!dn(J)&&await _(J,j,B)}}return B.valid},x=()=>{for(const A of o.unMount){const j=G(r,A);j&&(j._f.refs?j._f.refs.every(B=>!ps(B)):!ps(j._f.ref))&&le(A)}o.unMount=new Set},P=(A,j)=>!t.disabled&&(A&&j&&Oe(s,A,j),!kr(Y(),a)),q=(A,j,B)=>Fg(A,o,{...i.mount?s:je(j)?a:Yn(A)?{[A]:j}:j},B,j),S=A=>Ka(G(i.mount?s:a,A,t.shouldUnregister?G(a,A,[]):[])),N=(A,j,B={})=>{const $=G(r,A);let H=j;if($){const C=$._f;C&&(!C.disabled&&Oe(s,A,Vg(j,C)),H=Ea(C.ref)&&un(j)?"":j,xg(C.ref)?[...C.ref.options].forEach(J=>J.selected=H.includes(J.value)):C.refs?Ft(C.ref)?C.refs.forEach(J=>{(!J.defaultChecked||!J.disabled)&&(Array.isArray(H)?J.checked=!!H.find(ce=>ce===J.value):J.checked=H===J.value||!!H)}):C.refs.forEach(J=>J.checked=J.value===H):Ki(C.ref)?C.ref.value="":(C.ref.value=H,C.ref.type||k.state.next({name:A,values:Ue(s)})))}(B.shouldDirty||B.shouldTouch)&&E(A,H,B.shouldTouch,B.shouldDirty,!0),B.shouldValidate&&M(A)},F=(A,j,B)=>{for(const $ in j){if(!j.hasOwnProperty($))return;const H=j[$],C=A+"."+$,J=G(r,C);(o.array.has(A)||ze(H)||J&&!J._f)&&!Er(H)?F(C,H,B):N(C,H,B)}},L=(A,j,B={})=>{const $=G(r,A),H=o.array.has(A),C=Ue(j);Oe(s,A,C),H?(k.array.next({name:A,values:Ue(s)}),(u.isDirty||u.dirtyFields||g.isDirty||g.dirtyFields)&&B.shouldDirty&&k.state.next({name:A,dirtyFields:pt(a,s),isDirty:P(A,C)})):$&&!$._f&&!un(C)?F(A,C,B):N(A,C,B),Cs(A,o)&&k.state.next({...n}),k.state.next({name:i.mount?A:void 0,values:Ue(s)})},V=async A=>{i.mount=!0;const j=A.target;let B=j.name,$=!0;const H=G(r,B),C=Ie=>{$=Number.isNaN(Ie)||Er(Ie)&&isNaN(Ie.getTime())||kr(Ie,G(s,B,Ie))},J=Hr(t.mode),ce=Hr(t.reValidateMode);if(H){let Ie,cn;const Mr=j.type?gl(H._f):Ng(A),Bn=A.type===Ta.BLUR||A.type===Ta.FOCUS_OUT,Ha=!hE(H._f)&&!t.resolver&&!G(n.errors,B)&&!H._f.deps||RE(Bn,G(n.touchedFields,B),n.isSubmitted,ce,J),ut=Cs(B,o,Bn);Oe(s,B,Mr),Bn?(H._f.onBlur&&H._f.onBlur(A),l&&l(0)):H._f.onChange&&H._f.onChange(A);const gt=E(B,Mr,Bn),Ya=!dn(gt)||ut;if(!Bn&&k.state.next({name:B,type:A.type,values:Ue(s)}),Ha)return(u.isValid||g.isValid)&&(t.mode==="onBlur"?Bn&&v():Bn||v()),Ya&&k.state.next({name:B,...ut?{}:gt});if(!Bn&&ut&&k.state.next({...n}),t.resolver){const{errors:mt}=await O([B]);if(C(Mr),$){const $a=kl(n.errors,r,B),kt=kl(mt,r,$a.name||B);Ie=kt.error,B=kt.name,cn=dn(mt)}}else y([B],!0),Ie=(await Gs(H,o.disabled,s,c,t.shouldUseNativeValidation))[B],y([B]),C(Mr),$&&(Ie?cn=!1:(u.isValid||g.isValid)&&(cn=await _(r,!0)));$&&(H._f.deps&&M(H._f.deps),D(B,cn,Ie,gt))}},U=(A,j)=>{if(G(n.errors,j)&&A.focus)return A.focus(),1},M=async(A,j={})=>{let B,$;const H=yn(A);if(t.resolver){const C=await I(je(A)?A:H);B=dn(C),$=A?!H.some(J=>G(C,J)):B}else A?($=(await Promise.all(H.map(async C=>{const J=G(r,C);return await _(J&&J._f?{[C]:J}:J)}))).every(Boolean),!(!$&&!n.isValid)&&v()):$=B=await _(r);return k.state.next({...!Yn(A)||(u.isValid||g.isValid)&&B!==n.isValid?{}:{name:A},...t.resolver||!A?{isValid:B}:{},errors:n.errors}),j.shouldFocus&&!$&&zr(r,U,A?H:o.mount),$},Y=A=>{const j={...i.mount?s:a};return je(A)?j:Yn(A)?G(j,A):A.map(B=>G(j,B))},ne=(A,j)=>({invalid:!!G((j||n).errors,A),isDirty:!!G((j||n).dirtyFields,A),error:G((j||n).errors,A),isValidating:!!G(n.validatingFields,A),isTouched:!!G((j||n).touchedFields,A)}),K=A=>{A&&yn(A).forEach(j=>Ye(n.errors,j)),k.state.next({errors:A?n.errors:{}})},te=(A,j,B)=>{const $=(G(r,A,{_f:{}})._f||{}).ref,H=G(n.errors,A)||{},{ref:C,message:J,type:ce,...Ie}=H;Oe(n.errors,A,{...Ie,...j,ref:$}),k.state.next({name:A,errors:n.errors,isValid:!1}),B&&B.shouldFocus&&$&&$.focus&&$.focus()},Z=(A,j)=>Fn(A)?k.state.subscribe({next:B=>A(q(void 0,j),B)}):q(A,j,!0),z=A=>k.state.subscribe({next:j=>{EE(A.name,j.name,A.exact)&&TE(j,A.formState||u,xe,A.reRenderRoot)&&A.callback({values:{...s},...n,...j})}}).unsubscribe,W=A=>(i.mount=!0,g={...g,...A.formState},z({...A,formState:g})),le=(A,j={})=>{for(const B of A?yn(A):o.mount)o.mount.delete(B),o.array.delete(B),j.keepValue||(Ye(r,B),Ye(s,B)),!j.keepError&&Ye(n.errors,B),!j.keepDirty&&Ye(n.dirtyFields,B),!j.keepTouched&&Ye(n.touchedFields,B),!j.keepIsValidating&&Ye(n.validatingFields,B),!t.shouldUnregister&&!j.keepDefaultValue&&Ye(a,B);k.state.next({values:Ue(s)}),k.state.next({...n,...j.keepDirty?{isDirty:P()}:{}}),!j.keepIsValid&&v()},ie=({disabled:A,name:j})=>{(Tn(A)&&i.mount||A||o.disabled.has(j))&&(A?o.disabled.add(j):o.disabled.delete(j))},ke=(A,j={})=>{let B=G(r,A);const $=Tn(j.disabled)||Tn(t.disabled);return Oe(r,A,{...B||{},_f:{...B&&B._f?B._f:{ref:{name:A}},name:A,mount:!0,...j}}),o.mount.add(A),B?ie({disabled:Tn(j.disabled)?j.disabled:t.disabled,name:A}):w(A,!0,j.value),{...$?{disabled:j.disabled||t.disabled}:{},...t.progressive?{required:!!j.required,min:yt(j.min),max:yt(j.max),minLength:yt(j.minLength),maxLength:yt(j.maxLength),pattern:yt(j.pattern)}:{},name:A,onChange:V,onBlur:V,ref:H=>{if(H){ke(A,j),B=G(r,A);const C=je(H.value)&&H.querySelectorAll&&H.querySelectorAll("input,select,textarea")[0]||H,J=fE(C),ce=B._f.refs||[];if(J?ce.find(Ie=>Ie===C):C===B._f.ref)return;Oe(r,A,{_f:{...B._f,...J?{refs:[...ce.filter(ps),C,...Array.isArray(G(a,A))?[{}]:[]],ref:{type:C.type,name:A}}:{ref:C}}}),w(A,!1,void 0,C)}else B=G(r,A,{}),B._f&&(B._f.mount=!1),(t.shouldUnregister||j.shouldUnregister)&&!(Pg(o.array,A)&&i.action)&&o.unMount.add(A)}}},He=()=>t.shouldFocusError&&zr(r,U,o.mount),ae=A=>{Tn(A)&&(k.state.next({disabled:A}),zr(r,(j,B)=>{const $=G(r,B);$&&(j.disabled=$._f.disabled||A,Array.isArray($._f.refs)&&$._f.refs.forEach(H=>{H.disabled=$._f.disabled||A}))},0,!1))},se=(A,j)=>async B=>{let $;B&&(B.preventDefault&&B.preventDefault(),B.persist&&B.persist());let H=Ue(s);if(k.state.next({isSubmitting:!0}),t.resolver){const{errors:C,values:J}=await O();n.errors=C,H=Ue(J)}else await _(r);if(o.disabled.size)for(const C of o.disabled)Ye(H,C);if(Ye(n.errors,"root"),dn(n.errors)){k.state.next({errors:{}});try{await A(H,B)}catch(C){$=C}}else j&&await j({...n.errors},B),He(),setTimeout(He);if(k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:dn(n.errors)&&!$,submitCount:n.submitCount+1,errors:n.errors}),$)throw $},ue=(A,j={})=>{G(r,A)&&(je(j.defaultValue)?L(A,Ue(G(a,A))):(L(A,j.defaultValue),Oe(a,A,Ue(j.defaultValue))),j.keepTouched||Ye(n.touchedFields,A),j.keepDirty||(Ye(n.dirtyFields,A),n.isDirty=j.defaultValue?P(A,Ue(G(a,A))):P()),j.keepError||(Ye(n.errors,A),u.isValid&&v()),k.state.next({...n}))},ge=(A,j={})=>{const B=A?Ue(A):a,$=Ue(B),H=dn(A),C=H?a:$;if(j.keepDefaultValues||(a=B),!j.keepValues){if(j.keepDirtyValues){const J=new Set([...o.mount,...Object.keys(pt(a,s))]);for(const ce of Array.from(J))G(n.dirtyFields,ce)?Oe(C,ce,G(s,ce)):L(ce,G(C,ce))}else{if(Bi&&je(A))for(const J of o.mount){const ce=G(r,J);if(ce&&ce._f){const Ie=Array.isArray(ce._f.refs)?ce._f.refs[0]:ce._f.ref;if(Ea(Ie)){const cn=Ie.closest("form");if(cn){cn.reset();break}}}}for(const J of o.mount){const ce=G(C,J,G(a,J));je(ce)||(Oe(C,J,ce),L(J,G(C,J)))}}s=Ue(C),k.array.next({values:{...C}}),k.state.next({values:{...C}})}o={mount:j.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!j.keepIsValid||!!j.keepDirtyValues,i.watch=!!t.shouldUnregister,k.state.next({submitCount:j.keepSubmitCount?n.submitCount:0,isDirty:H?!1:j.keepDirty?n.isDirty:!!(j.keepDefaultValues&&!kr(A,a)),isSubmitted:j.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:H?{}:j.keepDirtyValues?j.keepDefaultValues&&s?pt(a,s):n.dirtyFields:j.keepDefaultValues&&A?pt(a,A):j.keepDirty?n.dirtyFields:{},touchedFields:j.keepTouched?n.touchedFields:{},errors:j.keepErrors?n.errors:{},isSubmitSuccessful:j.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},pe=(A,j)=>ge(Fn(A)?A(s):A,j),rn=(A,j={})=>{const B=G(r,A),$=B&&B._f;if($){const H=$.refs?$.refs[0]:$.ref;H.focus&&(H.focus(),j.shouldSelect&&Fn(H.select)&&H.select())}},xe=A=>{n={...n,...A}},Te={control:{register:ke,unregister:le,getFieldState:ne,handleSubmit:se,setError:te,_subscribe:z,_runSchema:O,_focusError:He,_getWatch:q,_getDirty:P,_setValid:v,_setFieldArray:T,_setDisabledField:ie,_setErrors:b,_getFieldArray:S,_reset:ge,_resetDefaultValues:()=>Fn(t.defaultValues)&&t.defaultValues().then(A=>{pe(A,t.resetOptions),k.state.next({isLoading:!1})}),_removeUnmounted:x,_disableForm:ae,_subjects:k,_proxyFormState:u,get _fields(){return r},get _formValues(){return s},get _state(){return i},set _state(A){i=A},get _defaultValues(){return a},get _names(){return o},set _names(A){o=A},get _formState(){return n},get _options(){return t},set _options(A){t={...t,...A}}},subscribe:W,trigger:M,register:ke,handleSubmit:se,watch:Z,setValue:L,getValues:Y,reset:pe,resetField:ue,clearErrors:K,unregister:le,setError:te,setFocus:rn,getFieldState:ne};return{...Te,formControl:Te}}var lr=()=>{if(typeof crypto<"u"&&crypto.randomUUID)return crypto.randomUUID();const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const n=(Math.random()*16+e)%16|0;return(t=="x"?n:n&3|8).toString(16)})},ys=(e,t,n={})=>n.shouldFocus||je(n.shouldFocus)?n.focusName||`${e}.${je(n.focusIndex)?t:n.focusIndex}.`:"",vs=(e,t)=>[...e,...yn(t)],bs=e=>Array.isArray(e)?e.map(()=>{}):void 0;function hs(e,t,n){return[...e.slice(0,t),...yn(n),...e.slice(t)]}var Ts=(e,t,n)=>Array.isArray(e)?(je(e[n])&&(e[n]=void 0),e.splice(n,0,e.splice(t,1)[0]),e):[],Es=(e,t)=>[...yn(t),...yn(e)];function SE(e,t){let n=0;const r=[...e];for(const a of t)r.splice(a-n,1),n++;return Ka(r).length?r:[]}var Rs=(e,t)=>je(t)?[]:SE(e,yn(t).sort((n,r)=>n-r)),As=(e,t,n)=>{[e[t],e[n]]=[e[n],e[t]]},fl=(e,t,n)=>(e[t]=n,e);function DE(e){const t=Pn(),{control:n=t.control,name:r,keyName:a="id",shouldUnregister:s,rules:i}=e,[o,l]=f.useState(n._getFieldArray(r)),d=f.useRef(n._getFieldArray(r).map(lr)),u=f.useRef(o),g=f.useRef(r),k=f.useRef(!1);g.current=r,u.current=o,n._names.array.add(r),i&&n.register(r,i),Ca(()=>n._subjects.array.subscribe({next:({values:D,name:O})=>{if(O===g.current||!O){const I=G(D,g.current);Array.isArray(I)&&(l(I),d.current=I.map(lr))}}}).unsubscribe,[n]);const c=f.useCallback(D=>{k.current=!0,n._setFieldArray(r,D)},[n,r]),p=(D,O)=>{const I=yn(Ue(D)),_=vs(n._getFieldArray(r),I);n._names.focus=ys(r,_.length-1,O),d.current=vs(d.current,I.map(lr)),c(_),l(_),n._setFieldArray(r,_,vs,{argA:bs(D)})},v=(D,O)=>{const I=yn(Ue(D)),_=Es(n._getFieldArray(r),I);n._names.focus=ys(r,0,O),d.current=Es(d.current,I.map(lr)),c(_),l(_),n._setFieldArray(r,_,Es,{argA:bs(D)})},y=D=>{const O=Rs(n._getFieldArray(r),D);d.current=Rs(d.current,D),c(O),l(O),!Array.isArray(G(n._fields,r))&&Oe(n._fields,r,void 0),n._setFieldArray(r,O,Rs,{argA:D})},T=(D,O,I)=>{const _=yn(Ue(O)),x=hs(n._getFieldArray(r),D,_);n._names.focus=ys(r,D,I),d.current=hs(d.current,D,_.map(lr)),c(x),l(x),n._setFieldArray(r,x,hs,{argA:D,argB:bs(O)})},h=(D,O)=>{const I=n._getFieldArray(r);As(I,D,O),As(d.current,D,O),c(I),l(I),n._setFieldArray(r,I,As,{argA:D,argB:O},!1)},b=(D,O)=>{const I=n._getFieldArray(r);Ts(I,D,O),Ts(d.current,D,O),c(I),l(I),n._setFieldArray(r,I,Ts,{argA:D,argB:O},!1)},w=(D,O)=>{const I=Ue(O),_=fl(n._getFieldArray(r),D,I);d.current=[..._].map((x,P)=>!x||P===D?lr():d.current[P]),c(_),l([..._]),n._setFieldArray(r,_,fl,{argA:D,argB:I},!0,!1)},E=D=>{const O=yn(Ue(D));d.current=O.map(lr),c([...O]),l([...O]),n._setFieldArray(r,[...O],I=>I,{},!0,!1)};return f.useEffect(()=>{if(n._state.action=!1,Cs(r,n._names)&&n._subjects.state.next({...n._formState}),k.current&&(!Hr(n._options.mode).isOnSubmit||n._formState.isSubmitted)&&!Hr(n._options.reValidateMode).isOnSubmit)if(n._options.resolver)n._runSchema([r]).then(D=>{const O=G(D.errors,r),I=G(n._formState.errors,r);(I?!O&&I.type||O&&(I.type!==O.type||I.message!==O.message):O&&O.type)&&(O?Oe(n._formState.errors,r,O):Ye(n._formState.errors,r),n._subjects.state.next({errors:n._formState.errors}))});else{const D=G(n._fields,r);D&&D._f&&!(Hr(n._options.reValidateMode).isOnSubmit&&Hr(n._options.mode).isOnSubmit)&&Gs(D,n._names.disabled,n._formValues,n._options.criteriaMode===Sn.all,n._options.shouldUseNativeValidation,!0).then(O=>!dn(O)&&n._subjects.state.next({errors:Kg(n._formState.errors,O,r)}))}n._subjects.state.next({name:r,values:Ue(n._formValues)}),n._names.focus&&zr(n._fields,(D,O)=>{if(n._names.focus&&O.startsWith(n._names.focus)&&D.focus)return D.focus(),1}),n._names.focus="",n._setValid(),k.current=!1},[o,r,n]),f.useEffect(()=>(!G(n._formValues,r)&&n._setFieldArray(r),()=>{const D=(O,I)=>{const _=G(n._fields,O);_&&_._f&&(_._f.mount=I)};n._options.shouldUnregister||s?n.unregister(r):D(r,!1)}),[r,n,a,s]),{swap:f.useCallback(h,[c,r,n]),move:f.useCallback(b,[c,r,n]),prepend:f.useCallback(v,[c,r,n]),append:f.useCallback(p,[c,r,n]),remove:f.useCallback(y,[c,r,n]),insert:f.useCallback(T,[c,r,n]),update:f.useCallback(w,[c,r,n]),replace:f.useCallback(E,[c,r,n]),fields:f.useMemo(()=>o.map((D,O)=>({...D,[a]:d.current[O]||lr()})),[o,a])}}function Cg(e={}){const t=f.useRef(void 0),n=f.useRef(void 0),[r,a]=f.useState({isDirty:!1,isValidating:!1,isLoading:Fn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Fn(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!Fn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...o}=OE(e);t.current={...o,formState:r}}const s=t.current.control;return s._options=e,Ca(()=>{const i=s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0});return a(o=>({...o,isReady:!0})),s._formState.isReady=!0,i},[s]),f.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),f.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode)},[s,e.mode,e.reValidateMode]),f.useEffect(()=>{e.errors&&(s._setErrors(e.errors),s._focusError())},[s,e.errors]),f.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),f.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==r.isDirty&&s._subjects.state.next({isDirty:i})}},[s,r.isDirty]),f.useEffect(()=>{e.values&&!kr(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[s,e.values]),f.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=jg(r,s),t.current}function IE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pl={exports:{}},vt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl;function qE(){if(yl)return vt;yl=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:i,ref:a!==void 0?a:null,props:s}}return vt.Fragment=t,vt.jsx=n,vt.jsxs=n,vt}var vl;function _E(){return vl||(vl=1,pl.exports=qE()),pl.exports}var fe=_E();const dt=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),qr=(e,t)=>{var n;return(n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e))==null?void 0:n.message},bl=({label:e,validate:t=[],readOnly:n=!1,onChange:r,onClick:a,className:s,...i})=>{const{name:o,control:l,disabled:d}=i,{formState:{errors:u}}=Pn(),{field:g}=lt({name:o,control:l,rules:{validate:m.useMemo(()=>dt(t),[t])}}),k=qr(u,o);return fe.jsxs(fe.Fragment,{children:[fe.jsx(w0,{size:"small",disabled:d||n,checked:g.value===!0,className:s,error:!!k,...g,onChange:c=>{g.onChange(c),r&&r(c.currentTarget.checked)},onClick:()=>{a&&a()},children:e}),k&&fe.jsx(it,{children:qr(u,o)})]})};var Hs={exports:{}},NE=Hs.exports,hl;function PE(){return hl||(hl=1,function(e,t){(function(n,r){e.exports=r()})(NE,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},d=function(y){return(y=+y)+(y>68?1900:2e3)},u=function(y){return function(T){this[y]=+T}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(T){if(!T||T==="Z")return 0;var h=T.match(/([+-]|\d\d)/g),b=60*h[1]+(+h[2]||0);return b===0?0:h[0]==="+"?-b:b}(y)}],k=function(y){var T=l[y];return T&&(T.indexOf?T:T.s.concat(T.f))},c=function(y,T){var h,b=l.meridiem;if(b){for(var w=1;w<=24;w+=1)if(y.indexOf(b(w,0,T))>-1){h=w>12;break}}else h=y===(T?"pm":"PM");return h},p={A:[o,function(y){this.afternoon=c(y,!1)}],a:[o,function(y){this.afternoon=c(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[s,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[s,u("day")],Do:[o,function(y){var T=l.ordinal,h=y.match(/\d+/);if(this.day=h[0],T)for(var b=1;b<=31;b+=1)T(b).replace(/\[|\]/g,"")===y&&(this.day=b)}],w:[i,u("week")],ww:[s,u("week")],M:[i,u("month")],MM:[s,u("month")],MMM:[o,function(y){var T=k("months"),h=(k("monthsShort")||T.map(function(b){return b.slice(0,3)})).indexOf(y)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[o,function(y){var T=k("months").indexOf(y)+1;if(T<1)throw new Error;this.month=T%12||T}],Y:[/[+-]?\d+/,u("year")],YY:[s,function(y){this.year=d(y)}],YYYY:[/\d{4}/,u("year")],Z:g,ZZ:g};function v(y){var T,h;T=y,h=l&&l.formats;for(var b=(y=T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,P,q){var S=q&&q.toUpperCase();return P||h[q]||n[q]||h[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(N,F,L){return F||L.slice(1)})})).match(r),w=b.length,E=0;E<w;E+=1){var D=b[E],O=p[D],I=O&&O[0],_=O&&O[1];b[E]=_?{regex:I,parser:_}:D.replace(/^\[|\]$/g,"")}return function(x){for(var P={},q=0,S=0;q<w;q+=1){var N=b[q];if(typeof N=="string")S+=N.length;else{var F=N.regex,L=N.parser,V=x.slice(S),U=F.exec(V)[0];L.call(P,U),x=x.replace(U,"")}}return function(M){var Y=M.afternoon;if(Y!==void 0){var ne=M.hours;Y?ne<12&&(M.hours+=12):ne===12&&(M.hours=0),delete M.afternoon}}(P),P}}return function(y,T,h){h.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(d=y.parseTwoDigitYear);var b=T.prototype,w=b.parse;b.parse=function(E){var D=E.date,O=E.utc,I=E.args;this.$u=O;var _=I[1];if(typeof _=="string"){var x=I[2]===!0,P=I[3]===!0,q=x||P,S=I[2];P&&(S=I[2]),l=this.$locale(),!x&&S&&(l=h.Ls[S]),this.$d=function(V,U,M,Y){try{if(["x","X"].indexOf(U)>-1)return new Date((U==="X"?1e3:1)*V);var ne=v(U)(V),K=ne.year,te=ne.month,Z=ne.day,z=ne.hours,W=ne.minutes,le=ne.seconds,ie=ne.milliseconds,ke=ne.zone,He=ne.week,ae=new Date,se=Z||(K||te?1:ae.getDate()),ue=K||ae.getFullYear(),ge=0;K&&!te||(ge=te>0?te-1:ae.getMonth());var pe,rn=z||0,xe=W||0,Ce=le||0,Te=ie||0;return ke?new Date(Date.UTC(ue,ge,se,rn,xe,Ce,Te+60*ke.offset*1e3)):M?new Date(Date.UTC(ue,ge,se,rn,xe,Ce,Te)):(pe=new Date(ue,ge,se,rn,xe,Ce,Te),He&&(pe=Y(pe).week(He).toDate()),pe)}catch{return new Date("")}}(D,_,O,h),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),q&&D!=this.format(_)&&(this.$d=new Date("")),l={}}else if(_ instanceof Array)for(var N=_.length,F=1;F<=N;F+=1){I[1]=_[F-1];var L=h.apply(this,I);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}F===N&&(this.$d=new Date(""))}else w.call(this,E)}}})}(Hs)),Hs.exports}var jE=PE();const FE=IE(jE),xE="_textarea_1snk6_1",ME="_readOnlyField_1snk6_7",Tl={textarea:xE,readOnlyField:ME},UE=e=>e!=null&&e!=="",Ga=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>UE(t)?fe.jsxs(An,{gap:"1",children:[e&&!a&&fe.jsx(qn,{size:s,children:e}),fe.jsxs(bn,{gap:"2",align:"center",wrap:!1,children:[fe.jsx(Td,{className:r==="textarea"?Tl.textarea:Tl.readOnlyField,size:s,children:t}),n&&fe.jsx(Ui,{})]})]}):null;Fe.extend(FE);const BE=({label:e,description:t,validate:n=[],hideLabel:r=!1,isReadOnly:a=!1,onChange:s,disabledDays:i,isEdited:o,defaultMonth:l,fromDate:d,toDate:u,size:g="small",...k})=>{const{name:c,control:p,disabled:v}=k,{formState:{errors:y}}=Pn(),{field:T}=lt({name:c,control:p,rules:{validate:m.useMemo(()=>dt(n),[n])}}),h=T.value?Fe(T.value,ur,!0).format(Ut):"",[b,w]=m.useState(h),{datepickerProps:E,inputProps:D}=hT({onDateChange:_=>{if(_!==void 0){const x=Fe(_).format(ur);s&&s(x),T.onChange(x),w(Fe(x,ur,!0).format(Ut))}},defaultSelected:T.value?Fe(T.value,ur,!0).toDate():void 0,defaultMonth:l||(!T.value&&u?u:void 0),disabled:i}),O=m.useCallback(_=>{const x=Fe(_.target.value,Ut,!0).format(ur),P=x!=="Invalid Date";w(_.target.value),s&&s(P?x:_.target.value),T.onChange(P?x:_.target.value)},[w,s,T]);if(a)return fe.jsx(Ga,{label:e,value:T.value?Fe(T.value,ur,!0).format(Ut):void 0,isEdited:o,hideLabel:r,size:g});const I={...E,fromDate:d,toDate:u,dropdownCaption:d&&u?!0:void 0};return fe.jsx(ba,{...I,children:fe.jsx(ba.Input,{...D,hideLabel:r,onChange:O,value:b,size:g,label:e,description:t,disabled:v,error:qr(y,c)})})},VE=/^(\d+[,]?(\d{1,2})?)$/,LE=/^(\d{1,20}[,.]?(\d{1,10})?)$/,ta=({label:e,hideLabel:t,validate:n=[],readOnly:r=!1,description:a,autoFocus:s,isEdited:i,forceTwoDecimalDigits:o=!1,className:l,returnAsNumber:d=!1,onChange:u,...g})=>{const{name:k,control:c,disabled:p}=g,[v,y]=m.useState(!1),{formState:{errors:T}}=Pn(),{field:h}=lt({name:k,control:c,rules:{validate:m.useMemo(()=>dt(n),[n])}});if(r)return fe.jsx(Ga,{label:e,value:h.value,isEdited:i,hideLabel:t});const b=o?VE:LE,w=h.value!==void 0&&h.value!==null?h.value.toString():"",E=!v&&o&&w!==""&&!Number.isNaN(w)?parseFloat(w).toFixed(2):w;return fe.jsx(x0,{size:"small",description:a,label:e,error:qr(T,k),...h,value:E.replace(".",","),autoFocus:s,autoComplete:"off",disabled:p,type:"text",hideLabel:t,inputMode:"decimal",className:l,onChange:D=>{y(!0);const O=D.currentTarget.value;let I;return O===""?I=null:b.test(O)?I=O.replace(",","."):I=h.value,u&&u(I),I&&d&&(I=parseFloat(I),Number.isNaN(I)&&(I=null)),h.onChange(I)},onBlur:()=>{y(!1),h.onBlur(),o&&w.slice(-1)==="."&&h.onChange(w+0)}})},KE="_hideRadioLabels_1u3xf_1",CE={hideRadioLabels:KE},El=({label:e,description:t,validate:n=[],radios:r,onChange:a,isReadOnly:s=!1,isHorizontal:i=!1,parse:o=p=>p,isTrueOrFalseSelection:l=!1,hideLegend:d=!1,hideRadioLabels:u=!1,isEdited:g=!1,size:k="small",...c})=>{const{name:p,control:v,disabled:y}=c,{formState:{errors:T}}=Pn(),{field:h}=lt({name:p,control:v,rules:{validate:m.useMemo(()=>dt(n),[n])}}),b=l?E=>E==="true":o,w=fe.jsxs(bn,{justify:"center",gap:"2",children:[e,s&&g&&fe.jsx(Ui,{})]});return fe.jsxs(S0,{name:p,value:h.value!==void 0?h.value:null,onChange:E=>{a&&a(E),h.onChange(E)},size:k,legend:w,description:t,error:qr(T,p),className:u?CE.hideRadioLabels:"",hideLegend:d,children:[!i&&r.map(E=>fe.jsxs(m.Fragment,{children:[fe.jsx(Xo,{size:k,value:b(E.value),disabled:E.disabled||y||s,children:E.label}),h.value===b(E.value)&&E.element]},E.value)),i&&fe.jsxs(fe.Fragment,{children:[fe.jsx(bn,{gap:"4",children:r.map(E=>fe.jsx(Xo,{size:k,value:b(E.value),disabled:E.disabled||y||s,children:E.label},E.value))}),r.filter(E=>h.value===b(E.value)).map(E=>fe.jsx(m.Fragment,{children:E.element},E.value))]})]})},wa=({label:e,selectValues:t,validate:n=[],readOnly:r=!1,description:a,hideValueOnDisable:s=!1,onChange:i,className:o,hideLabel:l,isEdited:d,size:u,...g})=>{const{name:k,control:c,disabled:p}=g,{formState:{errors:v}}=Pn(),{field:y}=lt({name:k,control:c,rules:{validate:m.useMemo(()=>dt(n),[n])}});if(r){const b=t.map(E=>E.props).find(E=>E.value===y.value),w=b?b.children:void 0;return fe.jsx(Ga,{value:w,label:e,hideLabel:l,isEdited:d,size:u})}const T=y.value||"",h=!t.map(b=>b.props.value).includes(T)&&T!=="";return h&&console.warn(`No corresponding option found for value '${T}'`),fe.jsxs(Vs,{size:"small",className:o,error:qr(v,k),label:e,description:a,value:s&&p||h?"":y.value,disabled:p,onChange:b=>{i&&i(b),y.onChange(b)},hideLabel:l,children:[fe.jsx("option",{style:{display:"none"}}),",",t]})},GE="_textAreaFieldWithBadges_bdz0b_1",HE="_etikettWrapper_bdz0b_4",Rl={textAreaFieldWithBadges:GE,etikettWrapper:HE},YE=({name:e,control:t,label:n,readOnly:r,maxLength:a,badges:s,validate:i=[],parse:o=c=>c,className:l,description:d,isEdited:u,size:g="small",...k})=>{const{formState:{errors:c}}=Pn(),{field:p}=lt({name:e,control:t,rules:{validate:m.useMemo(()=>dt(i),[i])}});return r?fe.jsx(Ga,{size:g,label:n,value:p.value,type:"textarea",isEdited:u,hideLabel:k.hideLabel}):fe.jsxs("div",{className:s?Rl.textAreaFieldWithBadges:null,children:[s&&fe.jsx("div",{className:Rl.etikettWrapper,children:s.map(({type:v,titleText:y})=>fe.jsx(WT,{variant:v,size:"small",children:y},y))}),fe.jsx(j0,{size:g,label:n,description:d,className:l,autoComplete:"off",...p,onChange:v=>p.onChange(v.currentTarget.value!==""?o(v.currentTarget.value):null),value:p.value?p.value:"",error:qr(c,e),maxLength:a,...k})]})},Gg=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return m.useEffect(()=>()=>{a&&a(i())},[]),fe.jsx(gE,{...e,children:fe.jsx("form",{className:r,onSubmit:t?s(o=>t(o)):void 0,children:n})})},xt={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};Un(xt);Un(xt);Un(xt);Un(xt);Un(xt);const $E=(e,...t)=>{const n=t.find(r=>r===e);if(!n)throw Error(`Det finnes ikke enum for kode ${e}`);return n},WE="_modal_mcjz4_1",zE="_dager_mcjz4_6",Al={modal:WE,dager:zE},XE=(e,t,n)=>r=>!Fe(r).isBefore(e)&&Fe(r).isBefore(t)?null:n.formatMessage({id:"DelOppPeriodeModal.UgyldigDato"}),Hg=({fomDato:e,tomDato:t,submit:n,cancel:r})=>{const a=ar(),s=Cg(),i=s.watch("dato"),o=aa(e,i);return R.jsx(Gg,{formMethods:s,onSubmit:l=>n(l.dato),children:R.jsxs(cr,{open:!0,"aria-label":a.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:r,className:Al.modal,children:[R.jsx(cr.Header,{children:R.jsx(Qs,{size:"small",children:R.jsx(oe,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),R.jsx(cr.Body,{children:R.jsxs(An,{gap:"4",children:[R.jsxs(An,{gap:"1",children:[R.jsx(nr,{children:R.jsx(oe,{id:"DelOppPeriodeModalImpl.Periode"})}),R.jsx(qe,{size:"small",children:R.jsx(tE,{dateStringFom:e,dateStringTom:t})})]}),R.jsxs(bn,{justify:"space-between",children:[R.jsx(BE,{name:"dato",control:s.control,label:R.jsx(oe,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[On,gm,XE(e,t,a)],defaultMonth:new Date(e),fromDate:Fe(e).toDate(),toDate:Fe(t).toDate()}),i&&R.jsx(qe,{size:"small",className:Al.dager,children:o.formattedString})]})]})}),R.jsxs(cr.Footer,{children:[R.jsx(Xe,{size:"small",variant:"primary",children:R.jsx(oe,{id:"DelOppPeriodeModalImpl.Ok"})}),R.jsx(Xe,{size:"small",variant:"secondary",onClick:r,type:"button",children:R.jsx(oe,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};Hg.__docgenInfo={description:"",methods:[],displayName:"SplittPeriodeModal",props:{fomDato:{required:!0,tsType:{name:"string"},description:""},tomDato:{required:!0,tsType:{name:"string"},description:""},cancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"(dato: string) => void",signature:{arguments:[{type:{name:"string"},name:"dato"}],return:{name:"void"}}},description:""}}};const Gi={ORDINÆRT_ARBEID:"RenderUttakTable.ArbeidType.ORDINÆRT_ARBEID",FRILANS:"RenderUttakTable.ArbeidType.FRILANS",SELVSTENDIG_NÆRINGSDRIVENDE:"RenderUttakTable.ArbeidType.SELVSTENDIG_NÆRINGSDRIVENDE",ANNET:"RenderUttakTable.ArbeidType.ANNET"},QE="_weekPosition_14dys_1",ZE="_tableOverflow_14dys_7",JE="_forsteKolWidth_14dys_10",eR="_utbetalingsgrad_14dys_17",nR="_selectStonad_14dys_23",rR="_numberWidth_14dys_29",dr={weekPosition:QE,tableOverflow:ZE,forsteKolWidth:JE,utbetalingsgrad:eR,selectStonad:nR,numberWidth:rR},wl=ud(3),tR=km(0),aR=gd(100),Ys=(e,t,n)=>{const{prosentArbeid:r,arbeidsgiverReferanse:a,eksternArbeidsforholdId:s,uttakArbeidType:i}=e,o=typeof r<"u"?`${r}%`:"";let l;if(i&&i!==Sa.ORDINÆRT_ARBEID&&(l=n.formatMessage({id:Gi[i]})),a){const d=t[a];l=d?md(d,s):a}return{prosentArbeidText:o,arbeidsforhold:l||""}},sR=(e,t,n)=>r=>!t&&(!n||n==="-")&&parseFloat(r)>0?e.formatMessage({id:"RenderUttakTable.MerEnNullUtaksprosent"}):null,iR=(e,t,n,r)=>a=>{const s=!t.periodeType&&t.aktiviteter[0].stønadskontoType==="-";return t.utsettelseType==="-"&&!s&&r&&parseFloat(a)<=0&&n===0?e.formatMessage({id:"ValidationMessage.HøyereEnn0NårInnvilgetUttak"}):null},oR=(e,t)=>n=>{const r=t("samtidigUttak"),a=t("samtidigUttaksprosent");return r&&a&&a<n?e.formatMessage({id:"ValidationMessage.utbetalingsgradErMerSamtidigUttaksprosent"}):null},lR=(e,t,n)=>r=>{const s=t("aktiviteter")[n];return parseFloat(s.weeks)===0&&parseFloat(s.days)===0&&parseFloat(r)>0?e.formatMessage({id:"ValidationMessage.ukerOgDagerVidNullUtbetalningsgradMessage"}):null},dR=[en.FELLESPERIODE,en.FEDREKVOTE,en.FORELDREPENGER_FOR_FODSEL,en.FORELDREPENGER,en.MODREKVOTE,en.UDEFINERT],uR=e=>e.filter(({kode:t})=>dR.some(n=>n===t)).map(({kode:t,navn:n})=>R.jsx("option",{value:t,children:n},t)),gR=(e,t)=>n=>{const r=e(`aktiviteter.${t}.weeks`),a=e(`aktiviteter.${t}.days`);if(parseFloat(r)!==0||parseFloat(a)!==0){const i=On(n);if(i)return i;const o=sa(n);if(o)return o}return null},Ol=(e,t,n)=>r=>t&&t!=="-"&&e("erOppfylt")&&parseFloat(r)>0?n.formatMessage({id:"ValidationMessage.trekkdagerErMerEnnNullUtsettelse"}):null,Yg=({periodeTyper:e,isReadOnly:t,arbeidsgiverOpplysningerPerId:n,aktiviteter:r,erOppfylt:a,valgtPeriode:s})=>{const i=ar(),{control:o,getValues:l,watch:d}=Pn(),{fields:u}=DE({control:o,name:"aktiviteter"}),g=uR(e),{utsettelseType:k}=s,c=d("aktiviteter");return R.jsx("div",{className:dr.tableOverflow,children:u.length>0&&R.jsxs(ve,{children:[R.jsx(ve.Header,{children:R.jsxs(ve.Row,{children:[R.jsx(ve.HeaderCell,{scope:"col",children:R.jsx(oe,{id:"RenderUttakTable.PeriodeData.Aktivitet"})}),R.jsx(ve.HeaderCell,{scope:"col",children:R.jsx(oe,{id:"RenderUttakTable.PeriodeData.Stonadskonto"})}),R.jsx(ve.HeaderCell,{scope:"col",children:R.jsx(oe,{id:"RenderUttakTable.PeriodeData.Trekk"})}),R.jsx(ve.HeaderCell,{scope:"col",children:R.jsx(oe,{id:"RenderUttakTable.PeriodeData.Andel"})}),R.jsx(ve.HeaderCell,{scope:"col",children:R.jsx(oe,{id:"RenderUttakTable.PeriodeData.Utbetalingsgrad"})})]})}),R.jsx(ve.Body,{children:u.map((p,v)=>{const y=Ys(r[v],n,i),T=c.reduce((h,b,w)=>w!==v?h+parseInt(b.utbetalingsgrad,10):h,0);return R.jsxs(ve.Row,{children:[R.jsx(ve.DataCell,{children:R.jsx(qe,{size:"small",className:dr.forsteKolWidth,children:y.arbeidsforhold})}),R.jsx(ve.DataCell,{children:R.jsx("div",{className:dr.selectStonad,children:R.jsx(wa,{name:`aktiviteter.${v}.stønadskontoType`,control:o,selectValues:g,hideLabel:!0,label:"",readOnly:t,validate:[gR(l,v)]})})}),R.jsx(ve.DataCell,{children:R.jsxs(bn,{gap:"2",align:"center",children:[R.jsx("span",{className:dr.weekPosition,children:R.jsx(ta,{name:`aktiviteter.${v}.weeks`,control:o,className:dr.numberWidth,readOnly:t,validate:[On,mm,wl,Ol(l,k,i)]})}),t?R.jsx("div",{children:"/"}):R.jsx("div",{className:dr.verticalCharPlacementInTable,children:"/"}),R.jsx(ta,{name:`aktiviteter.${v}.days`,control:o,className:dr.numberWidth,readOnly:t,validate:[On,Ss,wl,Ol(l,k,i)]})]})}),R.jsx(ve.DataCell,{children:R.jsx(qe,{size:"small",children:y.prosentArbeidText})}),R.jsx(ve.DataCell,{children:R.jsx("div",{className:dr.utbetalingsgrad,children:R.jsx(ta,{name:`aktiviteter.${v}.utbetalingsgrad`,control:o,validate:[On,tR,aR,Ss,iR(i,s,T,a),sR(i,a,k),lR(i,l,v),oR(i,l),h=>k&&k!=="-"&&l("erOppfylt")&&parseFloat(h)>0?i.formatMessage({id:"ValidationMessage.utbetalingMerEnnNullUtsettelse"}):null],readOnly:t,forceTwoDecimalDigits:!0})})})]},p.id)})})]})})};Yg.__docgenInfo={description:"",methods:[],displayName:"UttakAktiviteterTabell",props:{periodeTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const mR="_orangeDetailsPeriod_m6wvn_1",kR="_greenDetailsPeriod_m6wvn_6",cR="_redDetailsPeriod_m6wvn_11",fR="_suffix_m6wvn_16",pR="_select_m6wvn_25",yR="_numberFieldLength_m6wvn_29",Xr={orangeDetailsPeriod:mR,greenDetailsPeriod:kR,redDetailsPeriod:cR,suffix:fR,select:pR,numberFieldLength:yR},vR=gd(100),bR={INGEN:"Ingen årsak",UTTAK_MØDREKVOTE_ANNEN_FORELDER:"Mødrekvote",UTTAK_FEDREKVOTE_ANNEN_FORELDER:"Fedrekvote",UTTAK_FELLESP_ANNEN_FORELDER:"Fellesperiode",UTTAK_FORELDREPENGER_ANNEN_FORELDER:"Foreldrepenger",UDEFINERT:"-"},hR=(e,t)=>e.periodeResultatType===Ze.INNVILGET&&!t?Xr.greenDetailsPeriod:e.periodeResultatType===Ze.MANUELL_BEHANDLING||t?Xr.orangeDetailsPeriod:Xr.redDetailsPeriod,TR=e=>e.periodeResultatType===Ze.INNVILGET,ER=(e,t)=>{let n="";if(e.gradertAktivitet){const{arbeidsgiverReferanse:r,uttakArbeidType:a}=e.gradertAktivitet;if(a&&a!==Sa.ORDINÆRT_ARBEID)return R.jsx(oe,{id:Gi[a]});if(r&&t[r]){const{navn:s,identifikator:i}=t[r];n=s?`${s}`:n,n=i?`${n} (${i})`:n}}return n},RR=(e,t,n)=>{var r;return e.utsettelseType==="-"&&!n?R.jsx(oe,{id:"UttakActivity.Uttak"}):e.utsettelseType!=="-"?R.jsx(oe,{id:"UttakActivity.Utsettelse",values:{utsettelseType:(r=t.UttakUtsettelseType.find(a=>a.kode===e.utsettelseType))==null?void 0:r.navn}}):n?R.jsx(oe,{id:"UttakActivity.IngenKonto"}):""},AR=(e,t)=>{var n,r;return TR(e)?R.jsx(oe,{id:"UttakActivity.InnvilgelseAarsak",values:{innvilgelseAarsak:(n=t.PeriodeResultatÅrsak.find(a=>a.kode===e.periodeResultatÅrsak))==null?void 0:n.navn,b:a=>R.jsx("b",{children:a})}}):R.jsx(oe,{id:"UttakActivity.IkkeOppfyltAarsak",values:{avslagAarsak:(r=t.PeriodeResultatÅrsak.find(a=>a.kode===e.periodeResultatÅrsak))==null?void 0:r.navn,b:a=>R.jsx("b",{children:a})}})},wR=(e,t,n)=>{var a;let r="";return n||(r=((a=t.StønadskontoType.find(s=>{var i;return s.kode===((i=e.aktiviteter[0])==null?void 0:i.stønadskontoType)}))==null?void 0:a.navn)??""),r},OR=[Gn.UTTAK_MØDREKVOTE_ANNEN_FORELDER,Gn.UTTAK_FEDREKVOTE_ANNEN_FORELDER,Gn.UTTAK_FELLESP_ANNEN_FORELDER,Gn.UTTAK_FORELDREPENGER_ANNEN_FORELDER],SR=e=>e.filter(({kode:t})=>OR.some(n=>n===t)).map(({kode:t})=>R.jsx("option",{value:t,children:bR[t]},t)),DR=(e,t,n)=>e.periodeResultatType===Ze.INNVILGET&&!!e.gradertAktivitet&&n===!1&&t,$g=({valgtPeriode:e,isReadOnly:t,graderingInnvilget:n,erSamtidigUttak:r,harSoktOmFlerbarnsdager:a,alleKodeverk:s,arbeidsgiverOpplysningerPerId:i,erTilknyttetStortinget:o,erOppfylt:l,valgtInnvilgelsesÅrsak:d})=>{var p;const u=ar(),{control:g}=Pn(),k=s.OppholdÅrsak,c=!e.periodeType&&e.aktiviteter[0].stønadskontoType==="-";return R.jsxs(An,{gap:"4",className:hR(e,o),children:[e.oppholdÅrsak==="-"&&R.jsxs(bn,{justify:"space-between",children:[R.jsxs("div",{children:[R.jsx(qn,{size:"small",children:RR(e,s,c)}),R.jsx(qe,{children:wR(e,s,c)})]}),R.jsx("div",{children:t&&AR(e,s)}),R.jsxs("div",{children:[a&&R.jsx(bl,{name:"flerbarnsdager",control:g,label:u.formatMessage({id:"UttakActivity.Flerbarnsdager"}),readOnly:t}),R.jsx(bl,{name:"samtidigUttak",control:g,label:u.formatMessage({id:"UttakActivity.SamtidigUttak"}),readOnly:t,validate:[v=>l&&v!==!0&&d==="2038"?u.formatMessage({id:"ValidationMessage.SamtidigUttakErObligatorisk"}):null]},"samtidigUttak"),r&&R.jsxs(bn,{gap:"2",children:[R.jsx(ta,{name:"samtidigUttaksprosent",control:g,className:Xr.numberFieldLength,readOnly:t,label:u.formatMessage({id:"UttakInfo.SamtidigUttaksprosent"}),validate:[On,vR,Ss],forceTwoDecimalDigits:!0}),!t&&R.jsx("div",{className:Xr.suffix,children:"%"})]})]})]}),R.jsxs(bn,{gap:"10",children:[R.jsxs("div",{children:[R.jsx(qn,{size:"small",children:Ws(e.fom,e.tom)}),e.oppholdÅrsak==="-"&&R.jsx(qe,{children:aa(e.fom,e.tom).formattedString})]}),R.jsxs("div",{children:[e.gradertAktivitet&&R.jsx(nr,{children:R.jsx(oe,{id:"UttakActivity.Gradering"})}),e.oppholdÅrsak!=="-"&&R.jsx("div",{children:aa(e.fom,e.tom).formattedString}),ER(e,i)]}),DR(e,t,n)&&R.jsxs("div",{children:[R.jsxs("b",{children:[R.jsx(oe,{id:"UttakActivity.GraderingIkkeOppfylt"}),":"]}),(p=s.GraderingAvslagÅrsak.find(v=>v.kode===e.graderingAvslagÅrsak))==null?void 0:p.navn]})]}),e.oppholdÅrsak!=="-"&&R.jsxs("div",{className:Xr.select,children:[R.jsx(nr,{children:R.jsx(oe,{id:"UttakInfo.Opphold.AnnenForelder"})}),R.jsx(wa,{name:"oppholdArsak",control:g,selectValues:SR(k),label:"",hideLabel:!0,readOnly:t,validate:[On,sa]})]}),e.mottattDato&&R.jsx(qe,{children:R.jsx(oe,{id:"UttakInfo.MottattDato",values:{dato:dd(e.mottattDato)}})})]})};$g.__docgenInfo={description:"",methods:[],displayName:"UttakPeriodeInfo",props:{valgtPeriode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erTilknyttetStortinget:{required:!0,tsType:{name:"boolean"},description:""},erOppfylt:{required:!1,tsType:{name:"boolean"},description:""},valgtInnvilgelsesÅrsak:{required:!1,tsType:{name:"string"},description:""}}};const IR="_alert_1ojrb_5",qR={alert:IR},_R=cm(3),NR=ud(1500),PR=(e,t)=>{if(e.periodeResultatType&&e.periodeResultatType===Ze.INNVILGET)return!0;if(!e.periodeType&&e.aktiviteter[0].stønadskontoType==="-")return!1;if(e.periodeResultatType&&e.periodeResultatType===Ze.MANUELL_BEHANDLING){const r=t.find(a=>a.kode===e.periodeResultatÅrsak);return r&&r.utfallType==="INNVILGET"||e.oppholdÅrsak!==Gn.UDEFINERT?!0:r&&r.utfallType==="AVSLÅTT"?!1:void 0}return!1},jR=(e,t)=>e.sortering<t.sortering?-1:e.sortering>t.sortering?1:e.navn<t.navn?-1:e.navn>t.navn?1:0,FR=(e,t,n,r,a,s)=>{e.sort(jR);const i=e.filter(l=>!n||l.utfallType===n).filter(xR(r,t)).filter(MR(r)),o=l=>R.jsx("option",{value:l.kode,children:l.navn},l.kode);return s&&s!=="-"?i.filter(l=>{var d;return(d=l.uttakTyper)==null?void 0:d.includes("UTSETTELSE")}).map(o):i.filter(l=>{var d;return(d=l.uttakTyper)==null?void 0:d.includes("UTTAK")}).filter(l=>{var d;return a==="-"||((d=l.valgbarForKonto)==null?void 0:d.includes(a))}).map(o)},xR=(e,t)=>n=>n.gyldigForLovendringer===void 0?!0:Fe(t).isAfter(e.kreverSammenhengendeUttakTom)?e.utenMinsterett?n.gyldigForLovendringer.includes("FRITT_UTTAK"):n.gyldigForLovendringer.includes("MINSTERETT_2022"):n.gyldigForLovendringer.includes("KREVER_SAMMENHENGENDE_UTTAK"),MR=e=>t=>t.synligForRolle===void 0?!0:e.søkerErMor?t.synligForRolle.includes("MOR"):t.synligForRolle.includes("IKKE_MOR"),UR=(e,t)=>t.periodeResultatType&&!e.trekkdagerDesimaler&&t.periodeResultatType===Ze.MANUELL_BEHANDLING||e.trekkdagerDesimaler&&e.trekkdagerDesimaler<0?"0":e.trekkdagerDesimaler?Math.floor(e.trekkdagerDesimaler/5).toString():"0",BR=(e,t)=>t.periodeResultatType&&!e.trekkdagerDesimaler&&t.periodeResultatType===Ze.MANUELL_BEHANDLING||e.trekkdagerDesimaler&&e.trekkdagerDesimaler<0?"0":e.trekkdagerDesimaler?parseFloat((e.trekkdagerDesimaler%5).toFixed(1)).toString():"0",VR=(e,t)=>e.navn<t.navn?-1:e.navn>t.navn?1:0,LR=e=>[...e.GraderingAvslagÅrsak].sort(VR).map(({kode:n,navn:r})=>R.jsx("option",{value:n,children:r},n)),KR=(e,t,n,r)=>{if(e&&e===hd.ARBEID&&r&&t&&t.reduce((s,i)=>s+(i.prosentArbeid??0),0)<100)return n.formatMessage({id:"UttakActivity.MerEn100ProsentOgOgyldigUtsettlse"})},CR=(e,t,n)=>e.some((a,s)=>parseFloat(a.utbetalingsgrad)+(t[s].prosentArbeid??0)>100)?n.formatMessage({id:"UttakActivity.MerEn100Prosent"}):void 0,GR=(e,t)=>(n,r)=>{const a=Ys(n,e,t),s=Ys(r,e,t);return a.arbeidsforhold.localeCompare(s.arbeidsforhold)},HR=(e,t,n)=>{const r=!e.periodeType&&e.aktiviteter[0].stønadskontoType==="-";return{begrunnelse:e.begrunnelse,erOppfylt:PR(e,n),periodeAarsak:e.periodeResultatÅrsak,graderingInnvilget:e.graderingInnvilget,samtidigUttak:e.samtidigUttak,graderingAvslagAarsak:e.graderingAvslagÅrsak??"-",samtidigUttaksprosent:e.samtidigUttaksprosent?e.samtidigUttaksprosent.toString():void 0,flerbarnsdager:e.flerbarnsdager,oppholdArsak:e.oppholdÅrsak,aktiviteter:t.map(a=>({stønadskontoType:a.stønadskontoType,weeks:UR(a,e),days:BR(a,e),utbetalingsgrad:!r&&a.utbetalingsgrad?a.utbetalingsgrad.toString():"0"}))}},YR=(e,t,n)=>({...t,begrunnelse:e.begrunnelse,graderingInnvilget:e.erOppfylt?e.graderingInnvilget:!1,oppholdÅrsak:e.oppholdArsak,periodeResultatType:e.erOppfylt||e.oppholdArsak!==Gn.UDEFINERT?Ze.INNVILGET:Ze.AVSLATT,graderingAvslagÅrsak:e.graderingAvslagAarsak,periodeResultatÅrsak:e.periodeAarsak,samtidigUttaksprosent:e.samtidigUttaksprosent?parseFloat(e.samtidigUttaksprosent):void 0,samtidigUttak:e.samtidigUttak,flerbarnsdager:e.flerbarnsdager,aktiviteter:n.map((r,a)=>{const s=e.aktiviteter[a];return{...r,stønadskontoType:s.stønadskontoType,utbetalingsgrad:parseFloat(s.utbetalingsgrad),trekkdagerDesimaler:parseFloat(s.weeks)*5+parseFloat(s.days)}})}),Wg=({valgtPeriode:e,oppdaterPeriode:t,lukkPeriodeVisning:n,isReadOnly:r,erHovedsøkersPeriode:a,alleKodeverk:s,årsakFilter:i,arbeidsgiverOpplysningerPerId:o,harSoktOmFlerbarnsdager:l,erTilknyttetStortinget:d})=>{const u=ar(),g=s.PeriodeResultatÅrsak,k=m.useMemo(()=>{const x=GR(o,u);return[...e.aktiviteter].sort(x)},[e.aktiviteter]),c=m.useMemo(()=>HR(e,k,g),[e,k,o]),p=Cg({defaultValues:c});m.useEffect(()=>{p.reset(c)},[c]);const v=p.watch("erOppfylt"),y=p.watch("graderingInnvilget"),T=p.watch("samtidigUttak"),h=p.watch("periodeAarsak"),b=p.watch("aktiviteter"),w=b.length===1?b[0].stønadskontoType:Q.UDEFINERT,E=FR(g,e.fom,v?"INNVILGET":"AVSLÅTT",i,w,e.utsettelseType),D=LR(s),O=KR(e.utsettelseType,e.aktiviteter,u,v),I=CR(b,k,u),_=O??I;return R.jsx(Gg,{formMethods:p,onSubmit:x=>t([YR(x,e,k)]),children:R.jsxs(An,{gap:"4",children:[R.jsx($g,{valgtPeriode:e,alleKodeverk:s,isReadOnly:r,arbeidsgiverOpplysningerPerId:o,harSoktOmFlerbarnsdager:l,graderingInnvilget:y,erSamtidigUttak:T,erTilknyttetStortinget:d,erOppfylt:v,valgtInnvilgelsesÅrsak:h}),e.oppholdÅrsak===Gn.UDEFINERT&&R.jsx(Yg,{isReadOnly:r,periodeTyper:s.UttakPeriodeType,arbeidsgiverOpplysningerPerId:o,aktiviteter:k,erOppfylt:v,valgtPeriode:e}),a&&R.jsx(YE,{name:"begrunnelse",control:p.control,label:u.formatMessage({id:"UttakActivity.Vurdering"}),validate:[On,_R,NR,fm],maxLength:1500,readOnly:r}),a&&!r&&R.jsxs(R.Fragment,{children:[R.jsx(El,{name:"erOppfylt",control:p.control,hideLegend:!0,validate:[On],isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:u.formatMessage({id:"UttakActivity.Oppfylt"}),value:"true"},{label:u.formatMessage({id:"UttakActivity.IkkeOppfylt"}),value:"false"}]}),v!==void 0&&R.jsx(H0,{alignOffset:v?0:92,children:R.jsxs(An,{gap:"4",children:[R.jsx(wa,{name:"periodeAarsak",control:p.control,label:u.formatMessage({id:v?"UttakActivity.InnvilgelseAarsaker":"UttakActivity.AvslagAarsak"}),selectValues:E,validate:[On,sa]}),e.gradertAktivitet&&v&&R.jsxs(R.Fragment,{children:[R.jsx(El,{name:"graderingInnvilget",control:p.control,label:u.formatMessage({id:"UttakActivity.Gradering"}),validate:[On],isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:u.formatMessage({id:"UttakActivity.Oppfylt"}),value:"true"},{label:u.formatMessage({id:"UttakActivity.IkkeOppfylt"}),value:"false"}]}),y===!1&&R.jsx(wa,{name:"graderingAvslagAarsak",control:p.control,label:u.formatMessage({id:"UttakActivity.GraderingAvslagAarsaker"}),validate:[On,sa],selectValues:D})]})]})}),_&&R.jsx(ci,{size:"small",variant:"info",className:qR.alert,children:_}),R.jsxs(bn,{gap:"2",children:[R.jsx(Xe,{size:"small",variant:"primary",disabled:!p.formState.isDirty,children:R.jsx(oe,{id:"UttakActivity.Oppdater"})}),R.jsx(Xe,{size:"small",variant:"secondary",onClick:n,type:"button",children:R.jsx(oe,{id:"UttakActivity.Avbryt"})})]})]})]})})};Wg.__docgenInfo={description:"",methods:[],displayName:"UttakPeriodeForm",props:{valgtPeriode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},harSoktOmFlerbarnsdager:{required:!0,tsType:{name:"boolean"},description:""},erTilknyttetStortinget:{required:!0,tsType:{name:"boolean"},description:""}}};const $R=(e,t,n,r)=>{const a=[];let s=!1;const i=r!=null&&r.stonadskontoer?r==null?void 0:r.stonadskontoer[n]:void 0;return i!=null&&i.aktivitetSaldoDtoList&&i.aktivitetSaldoDtoList.forEach(o=>{var l;if(o.saldo===0)if(o.aktivitetIdentifikator.arbeidsgiverReferanse){const d=t[o.aktivitetIdentifikator.arbeidsgiverReferanse];a.push(d.navn)}else{const d=(l=e.UttakArbeidType.find(u=>u.kode===o.aktivitetIdentifikator.uttakArbeidType))==null?void 0:l.navn;d&&a.push(d)}else s=!0}),s?a:[]},WR=(e,t,n,r,a)=>{var i,o;const s=[];if(e===be.STØNADSKONTO_TOM_FOR_STØNADSDAGER){const l=$R(t,n,a,r),d=l.join();l.length>1?s.push(R.jsx(oe,{id:"UttakPanel.manuellBehandlingÅrsakArbeidsforhold",values:{arbeidsforhold:d}},"manuellÅrsak")):l.length===1?s.push(R.jsx(oe,{id:"UttakPanel.manuellBehandlingÅrsakEnskiltArbeidsforhold",values:{arbeidsforhold:l}},"manuellÅrsak")):s.push(R.jsx(f.Fragment,{children:(i=t.ManuellBehandlingÅrsak.find(u=>u.kode===e))==null?void 0:i.navn},`kode-${e}`))}else s.push(R.jsx(f.Fragment,{children:(o=t.ManuellBehandlingÅrsak.find(l=>l.kode===e))==null?void 0:o.navn},`kode-${e}`));return s},zR=(e,t,n,r)=>{let a=e.gradering&&e.prosentArbeid?(100-e.prosentArbeid)/100:1;a=n&&r?r/100:a;const s=a*t;return parseFloat(s.toFixed(1))},Sl=(e,t,n)=>{const{aktiviteter:r,samtidigUttak:a,samtidigUttaksprosent:s}=e,i=cd(t,n),o=r.map(l=>l.trekkdagerDesimaler&&l.trekkdagerDesimaler>0?{...l,trekkdagerDesimaler:zR(l,i,a,s)}:l);return{...e,fom:t,tom:n,begrunnelse:e.begrunnelse||" ",aktiviteter:o}},zg=({perioderSøker:e,behandling:t,uttaksresultat:n,valgtPeriodeIndex:r,oppdaterPeriode:a,isReadOnly:s,alleKodeverk:i,arbeidsgiverOpplysningerPerId:o,uttakStonadskontoer:l,setValgtPeriodeIndex:d,erTilknyttetStortinget:u,harÅpneAksjonspunkter:g,endringsdato:k})=>{const c=ar(),[p,v]=m.useState(!1),y=()=>v(P=>!P),{perioderAnnenpart:T}=n,h=T.concat(e),b=h[r],w=r+1>T.length,E=P=>{const q=Sl(b,b.fom,P),S=Sl(b,Fe(P).add(1,"days").format("YYYY-MM-DD"),b.tom);a([q,S]),y()},D=()=>d(void 0),O=w?e.some(P=>P.flerbarnsdager):T.some(P=>P.flerbarnsdager),I=t.type===kd.REVURDERING&&b.tom<k,_=()=>{d(P=>P===0||P===void 0?P:P-1)},x=()=>{d(P=>P===h.length-1||P===void 0?P:P+1)};return R.jsx(mg,{borderWidth:"1",padding:"4",children:R.jsxs(An,{gap:"4",children:[R.jsxs(bn,{align:"center",justify:"space-between",children:[R.jsxs(qn,{size:"small",children:[R.jsx(oe,{id:"UttakTimeLineData.PeriodeData.Detaljer"}),!!b.begrunnelse&&!g&&R.jsx(Ui,{})]}),!s&&w&&!I&&R.jsxs(R.Fragment,{children:[R.jsx(Xe,{size:"xsmall",icon:R.jsx(yk,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"UttakTimeLineData.PeriodeData.DelOppPerioden"}),children:R.jsx(oe,{id:"UttakTimeLineData.PeriodeData.DelOppPerioden"})}),p&&R.jsx(Hg,{cancel:y,fomDato:b.fom,tomDato:b.tom,submit:E})]}),R.jsxs(bn,{gap:"2",children:[R.jsx(Xe,{size:"xsmall",icon:R.jsx(Zs,{"aria-hidden":!0}),onClick:_,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"UttakPeriodePanel.prevPeriod"}),children:R.jsx(oe,{id:"UttakPeriodePanel.prevPeriodShort"})}),R.jsx(Xe,{size:"xsmall",icon:R.jsx(Js,{"aria-hidden":!0}),onClick:x,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"UttakPeriodePanel.nextPeriod"}),iconPosition:"right",children:R.jsx(oe,{id:"UttakPeriodePanel.nextPeriodShort"})}),R.jsx(Xe,{size:"xsmall",icon:R.jsx(ei,{"aria-hidden":!0}),onClick:D,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"UttakPeriodePanel.LukkPeriode"})})]})]}),b.manuellBehandlingÅrsak&&b.manuellBehandlingÅrsak!=="-"&&R.jsx(Ig,{children:WR(b.manuellBehandlingÅrsak,i,o,l,b.periodeType)}),R.jsx(Wg,{valgtPeriode:b,oppdaterPeriode:a,isReadOnly:s||!w||I,erHovedsøkersPeriode:w,lukkPeriodeVisning:D,alleKodeverk:i,årsakFilter:n.årsakFilter,arbeidsgiverOpplysningerPerId:o,harSoktOmFlerbarnsdager:O,erTilknyttetStortinget:u})]})})};zg.__docgenInfo={description:"",methods:[],displayName:"UttakPeriodePanel",props:{perioderSøker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},setValgtPeriodeIndex:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number | undefined>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number | undefined>",elements:[{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}]}]},description:""},erTilknyttetStortinget:{required:!0,tsType:{name:"boolean"},description:""},harÅpneAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},endringsdato:{required:!0,tsType:{name:"string"},description:""}}};var ws={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Dl;function XR(){return Dl||(Dl=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,r.call(this,o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(ws)),ws.exports}var QR=XR();const ZR=od(QR),JR="_tabs_1ay00_1",eA="_tab_1ay00_1",nA="_aktiv_1ay00_8",rA="_error_1ay00_17",tA="_tabInner_1ay00_20",Xg={tabs:JR,tab:eA,aktiv:nA,error:rA,tabInner:tA},Il=ZR.bind(Xg),aA=e=>{switch(e){case Q.FEDREKVOTE:return"TimeLineTab.Stonadinfo.Fedrekvote";case Q.MØDREKVOTE:return"TimeLineTab.Stonadinfo.Modrekvote";case Q.FELLESPERIODE:return"TimeLineTab.Stonadinfo.Fellesperiode";case Q.FORELDREPENGER_FØR_FØDSEL:return"TimeLineTab.Stonadinfo.ForeldrepengerFF";case Q.FLERBARNSDAGER:return"TimeLineTab.Stonadinfo.Flerbarnsdager";case Q.FORELDREPENGER:return"TimeLineTab.Stonadinfo.ForeldrePenger";case Q.UTEN_AKTIVITETSKRAV:return"TimeLineTab.Stonadinfo.UtenAktivitetskrav";case Q.MINSTERETT:return"TimeLineTab.Stonadinfo.Minsterett";case Q.MINSTERETT_NESTE_STØNADSPERIODE:return"TimeLineTab.Stonadinfo.MinsterettNesteStønadsperiode";default:return"TimeLineTab.Stonadinfo.Empty"}},Qg=e=>{const t=e<0?-1:1,n=e*t;return{uker:Math.floor(n/5)*t,dager:n%5*t}},Zg=({stønadskonto:e,visDagerForKonto:t,aktiv:n=!1})=>{const r=Qg(e.saldo),a=aA(e.stonadskontotype),s=()=>t(e.stonadskontotype),i=Math.floor(e.maxDager/5);return R.jsx("div",{className:Xg.tabs,children:R.jsx("li",{role:"presentation",className:Il("tab",{aktiv:n,error:e&&!e.gyldigForbruk}),children:R.jsx("button",{role:"tab",className:Il("tabInner",{error:e&&!e.gyldigForbruk}),type:"button",onClick:s,"aria-selected":n,children:R.jsxs(An,{gap:"1",children:[R.jsx(nr,{children:R.jsx(oe,{id:a,values:{uker:i,dager:e.maxDager-i*5}})}),R.jsx(qe,{size:"small",children:R.jsx(oe,{id:"TimeLineTab.Stonadinfo.UkerDager",values:{ukerVerdi:r.uker,dagerVerdi:r.dager,b:Ds}})})]})})})})};Zg.__docgenInfo={description:"",methods:[],displayName:"StonadsdagerTab",props:{stønadskonto:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},visDagerForKonto:{required:!0,tsType:{name:"signature",type:"function",raw:"(stønadskontotype: string) => void",signature:{arguments:[{type:{name:"string"},name:"stønadskontotype"}],return:{name:"void"}}},description:""},aktiv:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const sA="_disponibeltUttak_1nqn2_1",iA="_tabs_1nqn2_9",oA="_visKonto_1nqn2_19",Os={disponibeltUttak:sA,tabs:iA,visKonto:oA},ql={[Q.FORELDREPENGER_FØR_FØDSEL]:0,[Q.FELLESPERIODE]:1,[Q.MØDREKVOTE]:2,[Q.FEDREKVOTE]:3,[Q.FORELDREPENGER]:4,[Q.UTEN_AKTIVITETSKRAV]:5,[Q.MINSTERETT]:6,[Q.MINSTERETT_NESTE_STØNADSPERIODE]:7,[Q.FLERBARNSDAGER]:8},lA=(e,t)=>ql[e.stonadskontotype]-ql[t.stonadskontotype],dA=(e,t)=>{const{uttakArbeidType:n,arbeidsgiverReferanse:r,arbeidsforholdId:a}=e.aktivitetIdentifikator,s=r?t[r]:void 0;let i=n;return i=s?`${i} ${s.navn}`:i,i=a?`${i} ${a}`:i,i=s?`${i} ${s.identifikator}`:i,`${i} ${e.saldo}`},uA=e=>{if(!e)return{uker:0,dager:0};const t=e.reduce((r,a)=>{const s=a.stonadskontotype;return s!==Q.FLERBARNSDAGER&&s!==Q.UTEN_AKTIVITETSKRAV&&s!==Q.MINSTERETT&&s!==Q.MINSTERETT_NESTE_STØNADSPERIODE?r+(a.maxDager??0):r},0),n=Math.floor(t/5);return{uker:n,dager:t-n*5}},gA=(e,t,n)=>{const{arbeidsgiverReferanse:r,uttakArbeidType:a}=e;if(a&&a!==Sa.ORDINÆRT_ARBEID)return n.formatMessage({id:Gi[a]});if(r){const s=t[r];return s?md(s):r}return n.formatMessage({id:"RenderUttakTable.ArbeidType.ANNET"})},Jg=({stønadskontoer:e,arbeidsgiverOpplysningerPerId:t})=>{const n=ar(),[r,a]=m.useState(),s=d=>{a(u=>u===d?void 0:d)},i=e?Object.values(e).sort(lA):[],o=uA(e),l=m.useMemo(()=>{if(!r)return;const d=i.find(g=>g.stonadskontotype===r);return((d==null?void 0:d.aktivitetSaldoDtoList)??[]).map(g=>({...g,navn:gA(g.aktivitetIdentifikator,t,n)})).sort((g,k)=>g.navn.localeCompare(k.navn))},[r,i]);return R.jsxs("div",{className:Os.disponibeltUttak,children:[R.jsxs(bn,{gap:"4",children:[R.jsx(qn,{size:"small",children:R.jsx(oe,{id:"TimeLineInfo.Stonadinfo.DisponibleStonadsdager"})}),R.jsx(qe,{size:"small",children:R.jsx(oe,{id:"TimeLineInfo.Stonadinfo.Total",values:{uker:o.uker,dager:o.dager,b:Ds}})})]}),R.jsx("div",{className:Os.tabs,children:R.jsx("ul",{children:i.map(d=>R.jsx(Zg,{aktiv:d.stonadskontotype===r,stønadskonto:d,visDagerForKonto:s},d.stonadskontotype))})}),r&&l&&l.length>0&&R.jsx("div",{className:Os.visKonto,children:R.jsxs(ve,{children:[R.jsx(ve.Header,{children:R.jsxs(ve.Row,{children:[R.jsx(ve.HeaderCell,{scope:"col",children:R.jsx(oe,{id:"TimeLineInfo.Aktivitet"})}),R.jsx(ve.HeaderCell,{scope:"col",children:R.jsx(oe,{id:"TimeLineInfo.Disponibelt"})})]})}),R.jsx(ve.Body,{children:l.map(d=>{const u=Qg(d.saldo);return R.jsxs(ve.Row,{children:[R.jsx(ve.DataCell,{textSize:"small",children:d.navn}),R.jsx(ve.DataCell,{textSize:"small",children:d.saldo&&R.jsx(oe,{id:"TimeLineInfo.Stonadinfo.UkerDager",values:{ukerVerdi:u.uker,dagerVerdi:u.dager,b:Ds}})})]},dA(d,t))})})]})})]})};Jg.__docgenInfo={description:"",methods:[],displayName:"DisponibleStonadskontoerPanel",props:{stønadskontoer:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const mA={[en.MODREKVOTE]:R.jsx(Bt,{}),[en.FEDREKVOTE]:R.jsx(Bt,{}),[en.FELLESPERIODE]:R.jsx(Bt,{}),[en.FORELDREPENGER]:R.jsx(Bt,{}),[en.FORELDREPENGER_FOR_FODSEL]:R.jsx(kk,{})},kA={[en.MODREKVOTE]:"UttakTidslinje.Modrekvote",[en.FEDREKVOTE]:"UttakTidslinje.Fedrekvote",[en.FELLESPERIODE]:"UttakTidslinje.Fellesperiode",[en.FORELDREPENGER]:"UttakTidslinje.Foreldrepenger",[en.FORELDREPENGER_FOR_FODSEL]:"UttakTidslinje.ForeldrepengerForFodsel"},cA=(e,t)=>e.periode.fom<t.periode.fom?-1:e.periode.fom>t.periode.fom?1:0,fA=(e,t)=>e.periodeResultatType===Ze.MANUELL_BEHANDLING||t?"warning":e.gradertAktivitet&&e.graderingInnvilget&&e.periodeResultatType===Ze.INNVILGET?"success":"erOppfylt"in e&&e.erOppfylt===!1?"danger":"erOppfylt"in e&&e.erOppfylt===!0||e.periodeResultatType===Ze.INNVILGET&&!t?"success":"danger",pA=e=>{var n,r;return!(e.aktiviteter.length===0||!e.periodeType&&e.aktiviteter[0].stønadskontoType==="-")&&((n=e.aktiviteter[0])!=null&&n.stønadskontoType)?(r=e.aktiviteter[0])==null?void 0:r.stønadskontoType:""},yA=(e,t=[])=>t.map(n=>({...n,start:n.periode.fom,end:n.periode.tom,status:fA(n.periode,e),periodeType:pA(n.periode),erGradert:!!n.periode.gradertAktivitet&&!!n.periode.graderingInnvilget,erOpphold:n.periode.oppholdÅrsak!==Gn.UDEFINERT,harUtsettelse:n.periode.utsettelseType!=="-",begrunnelse:n.periode.begrunnelse})),vA=(e=[])=>e.every(t=>!t.hovedsoker)?[1,2]:e.reduce((t,n)=>(t.some(a=>a.group===n.group)||t.push(n),t),[]).map(t=>t.group),bA=(e,t)=>{const n=t?e.relasjonsRolleType:e.annenpartBehandling.relasjonsRolleType;return n===Xa.MOR||n===Xa.MEDMOR?R.jsx(Wm,{width:20,height:20,color:"var(--a-red-200)"}):n===Xa.FAR?R.jsx(bk,{width:20,height:20,color:"var(--a-blue-600)"}):R.jsx(Ym,{width:20,height:20})},Ht=(e,t)=>Fe(e).isBefore(t)?t.subtract(1,"days").format(ur):e,hA=e=>e.reduce((t,n)=>{const r=t.findIndex(a=>a.datoITidslinjen===n.datoITidslinjen);return r!==-1?t.filter((a,s)=>s!==r).concat({dato:n.dato,datoITidslinjen:n.datoITidslinjen,tekstIder:n.tekstIder.concat(t[r].tekstIder)}):t.concat(n)},[]),TA=(e,t)=>{const n=new Array;return e.dodSoker&&n.push({dato:e.dodSoker,datoITidslinjen:Ht(e.dodSoker,t),tekstIder:["UttakTidslinje.DodSoker"]}),e.fodsel&&n.push({dato:e.fodsel,datoITidslinjen:Ht(e.fodsel,t),tekstIder:["UttakTidslinje.Fodsel"]}),e.revurdering&&n.push({dato:e.revurdering,datoITidslinjen:Ht(e.revurdering,t),tekstIder:["UttakTidslinje.Revurdering"]}),e.soknad&&n.push({dato:e.soknad,datoITidslinjen:Ht(e.soknad,t),tekstIder:["UttakTidslinje.Soknad"]}),hA(n)},EA=(e,t,n)=>{const r=Ws(e.start,e.end),a=aa(e.start,e.end).formattedString;let s="";e.periodeType!=="-"&&e.periodeType!==""&&(s=n.formatMessage({id:kA[e.periodeType]}));let i="";e.erGradert?i=n.formatMessage({id:"UttakTidslinje.GradertPeriode"}):e.harUtsettelse?i=n.formatMessage({id:"UttakTidslinje.UtsettelsePeriode"}):e.erOpphold&&(i=n.formatMessage({id:"UttakTidslinje.OppholdPeriode"}));const o=e.begrunnelse&&t===fd.FATTER_VEDTAK?n.formatMessage({id:"UttakTidslinje.ManueltEditert"}):"";return R.jsxs(R.Fragment,{children:[R.jsx(qe,{children:R.jsx(oe,{id:"UttakTidslinje.Stonadskonto",values:{periodeType:s||"-"}})}),R.jsx(qe,{children:R.jsx(oe,{id:"UttakTidslinje.Periode",values:{periodeString:r}})}),R.jsxs(An,{gap:"2",children:[R.jsx(qe,{children:R.jsx(oe,{id:"UttakTidslinje.Dager",values:{dager:a}})}),i]}),o]})},RA=(e,t)=>e.erGradert?R.jsx(ok,{}):e.begrunnelse&&t===fd.FATTER_VEDTAK?R.jsx(dk,{}):e.harUtsettelse?R.jsx(sk,{}):e.erOpphold?R.jsx(Km,{}):mA[e.periodeType],AA=(e,t,n)=>{var s;const r=t.RelasjonsRolleType,a=n?e.relasjonsRolleType:e.annenpartBehandling.relasjonsRolleType;return((s=r.find(i=>i.kode===a))==null?void 0:s.navn)??"-"},em=({tidslinjeTider:e,selectedPeriod:t,uttakPerioder:n,tilknyttetStortinget:r,setValgtPeriodeIndex:a,behandlingStatusKode:s,fagsak:i,alleKodeverk:o})=>{const l=ar(),d=vA(n),u=yA(r,n),g=[...n].sort(cA),k=t?{fom:t.periode.fom,tom:t.periode.tom,id:t.id}:void 0,c=Fe(g[0].periode.fom),p=Fe(g[g.length-1].periode.tom),v=TA(e,c),[y,T]=m.useState(c),[h,b]=m.useState(p),w=()=>{y.subtract(1,"month").isBefore(c)||(T(y.subtract(1,"month")),b(h.subtract(1,"month")))},E=()=>{h.add(1,"month").isAfter(p)||(T(y.add(1,"month")),b(h.add(1,"month")))},D=()=>{y.add(3,"month").isAfter(h)||(T(y.add(1,"month")),b(h.subtract(1,"month")))},O=()=>{h.add(1,"month").diff(y.subtract(1,"month"),"months")<36&&(T(y.subtract(1,"month")),b(h.add(1,"month")))};return R.jsxs(An,{gap:"6",children:[R.jsxs(fr,{startDate:Fe(y).toDate(),endDate:Fe(h).add(1,"days").toDate(),children:[v.map(I=>R.jsxs(fr.Pin,{date:Fe(I.datoITidslinjen).toDate(),children:[R.jsx(An,{gap:"1",children:I.tekstIder.map(_=>R.jsx(qn,{size:"small",children:R.jsx(oe,{id:_})},_))}),R.jsx(qe,{size:"small",children:R.jsx(rE,{dateString:I.dato})})]},I.dato)),d.map((I,_)=>{const x=d.length===1||_>0;return R.jsx(fr.Row,{label:AA(i,o,x),icon:bA(i,x),children:u.filter(P=>P.group===I).map(P=>R.jsx(fr.Period,{start:Fe(P.start).toDate(),end:Fe(P.end).toDate(),status:P.status,onSelectPeriod:()=>a(P.id),isActive:P.id===(k==null?void 0:k.id),icon:RA(P,s),placement:_===0?"top":"bottom",children:EA(P,s,l)},P.id))},I)})]}),R.jsxs(bn,{gap:"2",justify:"end",children:[R.jsx(Xe,{size:"small",icon:R.jsx(fk,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"UttakTidslinje.ZoomInn"})}),R.jsx(Xe,{size:"small",icon:R.jsx(rk,{"aria-hidden":!0}),onClick:O,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"UttakTidslinje.ZoomUt"})}),R.jsx(Xe,{size:"small",icon:R.jsx(Zs,{"aria-hidden":!0}),onClick:w,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"UttakTidslinje.ScrollTilVenstre"})}),R.jsx(Xe,{size:"small",icon:R.jsx(Js,{"aria-hidden":!0}),onClick:E,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"UttakTidslinje.ScrollTilHogre"})})]})]})};em.__docgenInfo={description:`UttakTidslinje

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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const wA={INGEN:Q.UDEFINERT,UTTAK_MØDREKVOTE_ANNEN_FORELDER:Q.MØDREKVOTE,UTTAK_FEDREKVOTE_ANNEN_FORELDER:Q.FEDREKVOTE,UTTAK_FELLESP_ANNEN_FORELDER:Q.FELLESPERIODE,UTTAK_FORELDREPENGER_ANNEN_FORELDER:Q.FORELDREPENGER},OA=e=>{var r;const{mottattDato:t}=e,n=((r=e.søknadsfrist)==null?void 0:r.mottattDato)??e.mottattDato;return Fe(t)<Fe(n)?t:n},SA=(e,t)=>{if(t!=null&&t.avklartBarn&&t.avklartBarn.length>0)return t.avklartBarn[0].fodselsdato;const{fodselsdatoer:n,termindato:r,adopsjonFodelsedatoer:a}=e;if(n&&Object.keys(n).length>0)return Object.values(n)[0];if(r)return r;if(a&&Object.keys(a).length>0)return Object.values(a)[0]},DA=(e,t,n,r,a)=>{var c,p;const s=n==null?void 0:n.gjeldende,i=SA(t,s),o=s!=null&&s.avklartBarn&&s.avklartBarn.length>0?s.avklartBarn[0].fodselsdato:void 0,l=t.soknadType===bd.FODSEL?o??i:t.omsorgsovertakelseDato,d=e.type===kd.REVURDERING,u=((c=n.register)==null?void 0:c.avklartBarn)??[],g=s&&!s.brukAntallBarnFraTps&&s.avklartBarn&&s.avklartBarn.length>0?s.avklartBarn.filter(v=>v.dodsdato):u.filter(v=>v.dodsdato),k={soknad:OA(t),fodsel:l,revurdering:d?a:void 0,dodSoker:((p=r==null?void 0:r.bruker)==null?void 0:p.dødsdato)??void 0};return g.forEach((v,y)=>{Object.defineProperty(k,`barndod${y}`,{value:Fe(v.dodsdato,ur).toDate(),enumerable:!0})}),k},_l=(e,t,n)=>(e?t:n).map((a,s)=>({periode:a,id:s,tomMoment:Fe(a.tom).add(1,"days"),hovedsoker:e,group:n.length>0&&e?2:1})),IA=e=>e.map(t=>{const{...n}=t;if(t.oppholdÅrsak!==Gn.UDEFINERT){const a={stønadskontoType:wA[t.oppholdÅrsak],trekkdagerDesimaler:cd(t.fom,t.tom)};n.aktiviteter=[a]}return n}),nm=({behandling:e,søknad:t,personoversikt:n,perioderSøker:r,perioderAnnenpart:a,valgtPeriodeIndex:s,familiehendelse:i,endringsdato:o,tilknyttetStortinget:l,setValgtPeriodeIndex:d,fagsak:u,alleKodeverk:g})=>{const k=IA(r),c=_l(!0,k,a),p=_l(!1,k,a),v=p.concat(c.map(T=>({...T,id:T.id+p.length}))),y=DA(e,t,i,n,o);return R.jsx(em,{tidslinjeTider:y,selectedPeriod:s!==void 0?v[s]:void 0,uttakPerioder:v,tilknyttetStortinget:l,setValgtPeriodeIndex:d,behandlingStatusKode:e.status,fagsak:u,alleKodeverk:g})};nm.__docgenInfo={description:"",methods:[],displayName:"UttakTidslinjeIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const qA={5067:"UttakPanel.Aksjonspunkt.5067",5069:"UttakPanel.Aksjonspunkt.5069",5072:"UttakPanel.Aksjonspunkt.5072",5073:"UttakPanel.Aksjonspunkt.5073",5074:"UttakPanel.Aksjonspunkt.5074",5075:"UttakPanel.Aksjonspunkt.5075",5076:"UttakPanel.Aksjonspunkt.5076",5077:"UttakPanel.Aksjonspunkt.5077",5078:"UttakPanel.Aksjonspunkt.5078",5079:"UttakPanel.Aksjonspunkt.5079",5098:"UttakPanel.Aksjonspunkt.5098"},Nl={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},_A=(e,t)=>{const n=t.filter(a=>a.definisjon!==Be.FASTSETT_UTTAKPERIODER&&a.definisjon!==Be.OVERSTYRING_AV_UTTAKPERIODER),r=[];return n.forEach(a=>{const s=qA[a.definisjon];s&&r.push(R.jsx(oe,{id:s},s))}),e.perioderSøker.some(a=>a.periodeResultatType===Ze.MANUELL_BEHANDLING)&&r.push(R.jsx(oe,{id:"UttakPanel.Aksjonspunkt.Generell"},"generellTekst")),t.length===1&&t[0].definisjon===Be.OVERSTYRING_AV_UTTAKPERIODER&&(t[0].status!=="UTFO"?r.push(R.jsx(oe,{id:"UttakPanel.Overstyrt.KontrollerPaNytt"},"aksjonspunktTekst")):r.push(R.jsx(oe,{id:"UttakPanel.Overstyrt.Utfort"},"aksjonspunktTekst"))),r},NA=(e,t,n)=>{const r=new Array;if(e.forEach(s=>{const i=s.aktiviteter.filter(o=>t.stonadskontoer[o.stønadskontoType]===void 0&&!!o.trekkdagerDesimaler&&o.trekkdagerDesimaler>0);if(s.periodeResultatType===Ze.INNVILGET&&i.length>0){const o=n.formatMessage({id:"UttakPanel.InvalidStonadskonto"},{konto:Nl[i[0].stønadskontoType]});r.includes(o)||r.push(o)}}),r.length===0){const s=Object.values(t.stonadskontoer).filter(i=>!i.gyldigForbruk);s.length>0&&r.push(n.formatMessage({id:"UttakPanel.KontoMedUgyldigForbruk"},{konto:Nl[s[0].stonadskontotype]}))}const a=t[Q.FLERBARNSDAGER];return r.length===0&&a&&!a.gyldigForbruk&&r.push(n.formatMessage({id:"UttakPanel.InvalidTrekkDagerFlerbarnsdager"},{maxDays:a.maxDager})),r},PA=(e,t)=>{const n=t.some(s=>s.definisjon===Be.OVERSTYRING_AV_UTTAKPERIODER);return(t.length===0||t.length===1&&n?[Be.OVERSTYRING_AV_UTTAKPERIODER]:t.filter(s=>s.definisjon!==Be.OVERSTYRING_AV_UTTAKPERIODER).map(s=>s.definisjon)).map(s=>({kode:$E(s,Be.FASTSETT_UTTAKPERIODER,Be.OVERSTYRING_AV_UTTAKPERIODER,Be.TILKNYTTET_STORTINGET,Be.ANNENPART_EØS,Be.TETTE_SAKER,Be.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,Be.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN,Be.KONTROLLER_OPPLYSNINGER_OM_DØD,Be.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,Be.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET,Be.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT),perioder:e}))},jA=(e,t)=>e.fom<t.fom?-1:e.fom>t.fom?1:0,rm=({uttaksresultat:e,uttakStonadskontoer:t,familiehendelse:n,soknad:r,personoversikt:a,kanOverstyre:s,oppdaterStønadskontoer:i,arbeidsgiverOpplysningerPerId:o})=>{const l=ar(),{fagsak:d,behandling:u,submitCallback:g,alleKodeverk:k,isReadOnly:c,aksjonspunkterForPanel:p}=pm(),[v,y]=m.useState(!1),[T,h]=m.useState(!1),[b,w]=m.useState(!1),E=()=>{y(Z=>!Z)},{mellomlagretFormData:D,setMellomlagretFormData:O}=ym(),[I,_]=m.useState(D??e.perioderSøker),[x,P]=m.useState(),[q,S]=m.useState(t);m.useEffect(()=>()=>O(I),[I]);const N=e.perioderAnnenpart.concat(I),F=Z=>{const z=Z.findIndex(W=>W.periodeResultatType===Ze.MANUELL_BEHANDLING);z!==-1?P(z):x!==void 0&&P(void 0)};m.useEffect(()=>{F(N)},[]);const L=()=>{w(!0),g(PA(I,p))},V=Z=>{const W=[...I.filter(le=>le.fom!==Z[0].fom).concat(Z)].sort(jA);_(W),h(!0),i({behandlingUuid:u.uuid,perioder:W}).then(le=>{if(S(le),Z.length===2){const ie=W.findIndex(ke=>ke.fom===Z[0].fom);P(e.perioderAnnenpart.length+ie)}else F(e.perioderAnnenpart.concat(W))})},U=p.some(Z=>Z.status===Is.OPPRETTET),M=p.some(Z=>Z.definisjon===Be.TILKNYTTET_STORTINGET&&U),Y=m.useMemo(()=>p.some(Z=>Z.definisjon===Be.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE)?!1:I.some(Z=>Z.periodeResultatType===Ze.MANUELL_BEHANDLING)?!0:x!==void 0||!T,[I,q,x,T]),ne=!T||x!==void 0?[]:NA(I,q,l),K=p.filter(Z=>Z.definisjon!==Be.OVERSTYRING_AV_UTTAKPERIODER).length===0||p.some(Z=>Z.toTrinnsBehandlingGodkjent===!0&&Z.status===Is.UTFORT),te=p.some(Z=>Z.definisjon===Be.OVERSTYRING_AV_UTTAKPERIODER);return R.jsxs(An,{gap:"6",children:[R.jsxs(bn,{gap:"4",children:[R.jsx(Qs,{size:"small",children:R.jsx(oe,{id:"UttakPanel.Title"})}),!c&&s&&(!U||te)&&R.jsx(V0,{onClick:E,erOverstyrt:v})]}),p.length>0&&U&&R.jsx(Ig,{children:_A(e,p)}),R.jsx(Jg,{stønadskontoer:q.stonadskontoer?Object.values(q.stonadskontoer):void 0,arbeidsgiverOpplysningerPerId:o}),R.jsx(nm,{perioderSøker:I,perioderAnnenpart:e.perioderAnnenpart,valgtPeriodeIndex:x,setValgtPeriodeIndex:P,behandling:u,søknad:r,personoversikt:a,familiehendelse:n,endringsdato:e.endringsdato,tilknyttetStortinget:M,fagsak:d,alleKodeverk:k}),x!==void 0&&R.jsx(zg,{perioderSøker:I,behandling:u,uttaksresultat:e,valgtPeriodeIndex:x,oppdaterPeriode:V,isReadOnly:(K||c)&&!v,alleKodeverk:k,arbeidsgiverOpplysningerPerId:o,uttakStonadskontoer:q,setValgtPeriodeIndex:P,erTilknyttetStortinget:M,harÅpneAksjonspunkter:U,endringsdato:e.endringsdato},x),(!K&&!c||v)&&R.jsxs(R.Fragment,{children:[ne.length>0&&R.jsx(R.Fragment,{children:ne.map(Z=>R.jsx(ci,{size:"small",variant:"error",children:Z},Z))}),R.jsx("div",{children:R.jsx(Xe,{size:"small",variant:"primary",disabled:ne.length>0||b||Y,loading:b,onClick:L,type:"button",children:R.jsx(oe,{id:"Uttak.Confirm"})})})]})]})};rm.__docgenInfo={description:"",methods:[],displayName:"UttakProsessPanel",props:{uttaksresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const FA={"UttakPanel.Aksjonspunkt.5067":"Innvilget perioder etter start neste stønadsperiode pga minsterett ved tette saker. Vurder evt overlapp med brukers senere stønadsperioder.","UttakPanel.Aksjonspunkt.5069":"Annen forelder har godkjent opptjening i EØS. Vurder annen parts uttak i EØS.","UttakPanel.Aksjonspunkt.5072":"Søker er stortingsrepresentant. Vurder alle periodene og sett utbetalingsgrad til 0.","UttakPanel.Aksjonspunkt.5073":"Kontroller realitetsbehandling/klage.","UttakPanel.Aksjonspunkt.5074":"Kontroller opplysninger om medlemskap.","UttakPanel.Aksjonspunkt.5075":"Kontroller opplysninger om fordeling av stønadsperioden.","UttakPanel.Aksjonspunkt.5076":"Kontroller opplysninger om død. Opphør stønadsperioden fra riktig dato.","UttakPanel.Aksjonspunkt.5077":"Kontroller opplysninger om søknadsfrist.","UttakPanel.Aksjonspunkt.5078":"Kontroller tilstøtende ytelser innvilget.","UttakPanel.Aksjonspunkt.5079":"Kontroller tilstøtende ytelser opphørt.","UttakPanel.Aksjonspunkt.5098":"Adopsjon ikke implementert, må behandles manuelt.","UttakPanel.Aksjonspunkt.Generell":"Alle aksjonspunkter skal vurderes manuelt. Kontakt søker ved behov.","UttakPanel.Aksjonspunkt.Behandlet":"Fastsett uttaksperioder manuelt.","UttakPanel.Overstyrt.KontrollerPaNytt":"Perioden var overstyrt i forrige behandling, vurder om perioden fortsatt må overstyres.","UttakPanel.Overstyrt.Utfort":"Perioder er overstyrt.","UttakPanel.Title":"Uttak","UttakPanel.manuellBehandlingÅrsakEnskiltArbeidsforhold":"{arbeidsforhold} er tom for stønadsdager. Vurder å endre stønadskonto eller sette trekkdager og utbetalingsgrad til null. Kontakt søker ved behov.","UttakPanel.manuellBehandlingÅrsakArbeidsforhold":"{arbeidsforhold} er tomme for stønadsdager. Vurder å endre stønadskonto eller sette trekkdager og utbetalingsgrad til null. Kontakt søker ved behov.","PeriodeResultatType.INNVILGET":"Innvilget","PeriodeResultatType.AVSLÅTT":"Avslått","PeriodeResultatType.IKKE_FASTSATT":"Ikke fastsatt","PeriodeResultatType.GYLDIG_UTSETTELSE":"Gyldig utsettelse","PeriodeResultatType.UGYLDIG_UTSETTELSE":"Ugyldig utsettelse","Uttak.Confirm":"Bekreft og fortsett","Uttak.ManuellOverstyring":"Manuell overstyring","Uttak.Overstyrt":"Kun overstyrer kan endre på periodene","RenderUttakTable.ArbeidType.ANNET":"Annet","RenderUttakTable.ArbeidType.FRILANS":"Frilanser","RenderUttakTable.ArbeidType.SELVSTENDIG_NÆRINGSDRIVENDE":"Selvstendig næringsdrivende","RenderUttakTable.ArbeidType.ORDINÆRT_ARBEID":"Arbeidstaker","RenderUttakTable.PeriodeData.Aktivitet":"Aktivitet","RenderUttakTable.PeriodeData.Stonadskonto":"Stønadskonto","RenderUttakTable.PeriodeData.Stillingsprosent":"Stillingsprosent","RenderUttakTable.PeriodeData.SamtidigUttak":"Samtidig uttak","RenderUttakTable.PeriodeData.SamtidigUttakProsent":"Prosentandel samtidig uttak","RenderUttakTable.PeriodeData.Trekk":"Trekk antall uker/dager","RenderUttakTable.PeriodeData.Andel":"Andel i arbeid","RenderUttakTable.PeriodeData.Utbetalingsgrad":"Utbetalingsgrad (%)","RenderUttakTable.MerEnNullUtaksprosent":"Uttak av foreldrepenger i denne perioden er avslått, utbetalingsgrad kan ikke være større enn 0.","UttakTimeLineData.PeriodeData.Detaljer":"Detaljer for valgt periode","UttakTimeLineData.PeriodeData.DelOppPerioden":"Del opp perioden","TimeLineInfo.Aktivitet":"Aktivitet","TimeLineInfo.Disponibelt":"Disponibelt","TimeLineInfo.Stonadinfo.DisponibleStonadsdager":"Disponible stønadsdager (u/d)","TimeLineInfo.Stonadinfo.Total":"Sum permisjon: <b>{uker} </b> uker {dager, select, 0 {} other {og <b>{dager}</b> dager}}","TimeLineInfo.Stonadinfo.MaksDato":"Maks dato: <b>{dato} </b>","TimeLineInfo.Stonadinfo.UkerDager":"<b>{ukerVerdi}/{dagerVerdi}</b>","TimeLineTab.Stonadinfo.UkerDager":"<b>{ukerVerdi}/{dagerVerdi}</b>","TimeLineTab.Stonadinfo.ForeldrepengerFF":"Før fødsel","TimeLineTab.Stonadinfo.UtenAktivitetskrav":"Uten aktivitetskrav","TimeLineTab.Stonadinfo.Minsterett":"Minsterett ({uker}u{dager, select, 0 {} other {, {dager}d}})","TimeLineTab.Stonadinfo.MinsterettNesteStønadsperiode":"Gjenværende rett ({uker}u)","TimeLineTab.Stonadinfo.Fellesperiode":"Fellesperiode","TimeLineTab.Stonadinfo.Modrekvote":"Mødrekvote","TimeLineTab.Stonadinfo.Fedrekvote":"Fedrekvote","TimeLineTab.Stonadinfo.SamtidigUttak":"Samtidig uttak","TimeLineTab.Stonadinfo.Flerbarnsdager":"Flerbarnsdager","TimeLineTab.Stonadinfo.ForeldrePenger":"Foreldrepenger","TimeLineTab.Stonadinfo.Empty":" ","UttakTidslinje.DodSoker":"Dødstidspunkt","UttakTidslinje.Fodsel":"Tidspunkt for familiehendelse","UttakTidslinje.Revurdering":"Startpunkt for revurdering","UttakTidslinje.Soknad":"Tidspunkt for mottatt søknad","UttakTidslinje.ZoomInn":"Zoom inn","UttakTidslinje.ZoomUt":"Zoom ut","UttakTidslinje.ScrollTilVenstre":"Scroll til venstre","UttakTidslinje.ScrollTilHogre":"Scroll til høyre","UttakTidslinje.GradertPeriode":"Gradert","UttakTidslinje.ManueltEditert":"Endret av saksbehandler","UttakTidslinje.UtsettelsePeriode":"Utsettelse","UttakTidslinje.OppholdPeriode":"Opphold","UttakTidslinje.Modrekvote":"Mødrekvote","UttakTidslinje.Fedrekvote":"Fedrekvote","UttakTidslinje.Fellesperiode":"Fellesperiode","UttakTidslinje.Foreldrepenger":"Foreldrepenger","UttakTidslinje.ForeldrepengerForFodsel":"Foreldrepenger før fødsel","UttakTidslinje.Stonadskonto":"Stønadskonto: {periodeType}","UttakTidslinje.Periode":"Periode: {periodeString}","UttakTidslinje.Dager":"Dager: {dager}","UttakActivity.Vurdering":"Vurdering: ","UttakActivity.Oppfylt":"Oppfylt","UttakActivity.IkkeOppfylt":"Ikke oppfylt","UttakActivity.IkkeOppfyltAarsak":"<b>Ikke oppfylt: </b> {avslagAarsak}","UttakActivity.InnvilgelseAarsak":"<b>Innvilget: </b> {innvilgelseAarsak}","UttakActivity.InnvilgelseAarsaker":"Årsak til innvilgelse","UttakActivity.GraderingLabel":"Gradering","UttakActivity.GraderingAvslagAarsaker":"Årsak til avslag om gradering","UttakActivity.Oppdater":"Oppdater","UttakActivity.Avbryt":"Avbryt","UttakActivity.AvslagAarsak":"Årsak til avslag","UttakActivity.Flerbarnsdager":"Flerbarnsdager","UttakActivity.SamtidigUttak":"Samtidig uttak","UttakActivity.Gradering":"Gradering av arbeidsforhold","UttakActivity.GraderingIkkeOppfylt":"Gradering ikke oppfylt","UttakActivity.Uttak":"Uttak","UttakActivity.IngenKonto":"Ingen stønadskonto","UttakActivity.Utsettelse":"Utsettelse - {utsettelseType}","UttakInfo.MottattDato":"Mottatt dato: {dato}","UttakInfoPanel.FaktaUttak":"Fakta om uttak","UttakInfoPanel.Aksjonspunkt.5070":"Kontakt søker ved behov. Fastsett korrekt og dokumentert søknadsperiode og andel i arbeid.","UttakInfoPanel.Aksjonspunkt.5081":"Første dato for uttak er {value}. Rediger søknadsperiodene så de stemmer overens med startdato. Kontakt søker ved behov.","UttakInfoPanel.Aksjonspunkt.5088":`Søker har oppgitt at annen forelder ikke har rett, men annen forelder har uttak av foreldrepenger for samme barn.
Endre søknadsperiodene under til perioder med kvoter. Ved behov ta kontakt med bruker`,"UttakInfoPanel.Aksjonspunkt.6070":"Saksbehandler initierer kontroll av søknadsperiodene","UttakInfoPanel.Aksjonspunkt.5086":`Vurder om den andre forelderen har rett til foreldrepenger. Slå opp i relevant fagsystem for å finne informasjon om inntekt.
Dersom den andre forelderen har rett må du endre til riktige kvoter i alle søknadsperiodene.`,"UttakInfoPanel.Aksjonspunkt.6013":"Perioder er overstyrt.","UttakInfoPanel.Aksjonspunkt.FarSøkerFør6Uker":"Far/medmor søker fedrekvote før 7. uke etter fødsel. Vurder om far/medmor har gyldig grunn for uttak av fedrekvote i denne perioden. Kontakt søker ved behov.","UttakInfoPanel.TilpassSoknadsperiode":"Tilpass søknadsperiode til inntektsmeldingen","UttakInfoPanel.SykdomSkadenDokumentertAngiAvklartPeriode":"Sykdommen/skaden er dokumentert, angi periode","UttakInfoPanel.SykdomSkadenIkkeDokumentert":"Sykdommen/skaden er ikke dokumentert","UttakInfoPanel.InnleggelsenErDokumentertAngiAvklartPeriode":"Innleggelsen er dokumentert, angi avklart periode","UttakInfoPanel.ForeldreansvarErIkkeDokumentert":"Overføringen er ikke dokumentert","UttakInfoPanel.ForeldreansvarErDokumentertAngiAvklartPeriode":"Overføringen er dokumentert, angi avklart periode","UttakInfoPanel.InnleggelsenErIkkeDokumentert":"Innleggelsen er ikke dokumentert","UttakInfoPanel.PeriodeKanIkkeAvklares":"Perioden kan ikke avklares","UttakInfoPanel.VelgPeriodeFraInntektsmeldingen":"Velg periode fra inntektsmeldingen","UttakInfoPanel.BegrunnEndringene":"Begrunn endringene","UttakInfoPanel.BegrunnEndringen":"Begrunn endringen","UttakInfoPanel.Vurdering":"Vurdering","UttakInfoPanel.OverlappendePeriode":"Overlappende periode","UttakInfoPanel.OverlappendePerioder":"En eller flere perioder overlapper","UttakInfoPanel.AndelIArbeid":"Andel i arbeid","UttakInfoPanel.BekreftOgFortsett":"Bekreft og fortsett","UttakInfoPanel.SoknadsPeriode":"Søknadsperiode","UttakInfoPanel.PeriodenErOk":"Perioden er ok","UttakInfoPanel.FraSøknad":"Fra søknad","UttakInfoPanel.AvvikiInntektsmelding":"Avvikende inntektsmelding","UttakInfoPanel.EndreSoknadsperioden":"Endre søknadsperioden","UttakInfoPanel.PeriodenKanIkkeAvklares":"Gå videre med avvikende opplysninger og vurder om ytelsen skal reduseres","UttakInfoPanel.PeriodenErOverlappende":"Perioden er overlappende","UttakInfoPanel.Periode":"Periode","UttakInfoPanel.NyPeriode":"Ny periode","UttakInfoPanel.PeriodeType":"Periodetype","UttakInfoPanel.PeriodeArsak":"Periodeårsak","UttakInfoPanel.ArsakUtsettelse":"Årsak for utsettelse","UttakInfoPanel.AngiArsakforOverforing":"Angi årsak for overføring av kvote","UttakInfoPanel.AvklartPeriode":"Avklart periode","UttakInfoPanel.Ok":"OK","UttakInfoPanel.Avbryt":"Avbryt","UttakInfoPanel.Nullstill":"Nullstill","UttakInfoPanel.Oppdater":"Oppdater","UttakInfoPanel.SlettPerioden":"Slett perioden","UttakInfoPanel.EndrePerioden":"Endre perioden","UttakInfoPanel.Gradering":"Gradering","UttakInfoPanel.IkkeOppgittGradering":"Ikke oppgitt gradering","UttakInfoPanel.SamtidigUttak":"Samtidig uttak","UttakInfoPanel.SamtidigUttakProsentandel":"Uttak","UttakInfoPanel.Flerbarnsdager":"Flerbarnsdager","UttakInfoPanel.ArbeidsForhold":"Arbeidsforhold","UttakInfoPanel.Aktivitet":"Aktivitet","UttakInfoPanel.ErArbeidstaker":"Er arbeidstaker","UttakInfoPanel.StonadsKonto":"Stønadskonto","UttakInfoPanel.TypeUttak":"Type Uttak","UttakInfoPanel.LeggTilPeriode":"Legg til periode","UttakInfoPanel.FulltUttak":"Fullt uttak","UttakInfoPanel.GradertUttak":"Gradert uttak","UttakInfoPanel.Utsettelse":"Utsettelse","UttakInfoPanel.OverføringMedÅrsak":"Overføring: {årsak}","UttakInfoPanel.UtsettelseMedÅrsak":"Utsettelse: {årsak}","UttakInfoPanel.OppholdMedÅrsak":"Opphold: annen forelders uttak","UttakInfoPanel.UttakMedGradering":"Uttak: Gradering","UttakInfoPanel.Uttak":"Uttak","UttakInfoPanel.GraderPerioden":"Grader perioden","UttakInfoPanel.FastsettResultat":"Fastsett resultat for perioden","UttakInfoPanel.TomPeriode":"Tom periode","UttakInfoPanel.PeriodenharTommeDagerFremTilNestePeriode":"Perioden har tomme dager frem til neste periode","UttakInfoPanel.DokumentertSykdom":"Sykdommen/skaden er vurdert som dokumentert i Fakta om fødsel. Vurderingene må være like.","UttakInfoPanel.IkkeDokumentertSykdom":"Sykdommen/skaden er vurdert som ikke dokumentert i Fakta om fødsel. Vurderingene må være like.","UttakInfoPanel.PeriodeMellomFørsteuttaksdatoOgEndringsdato":"Endringstidspunktet i denne behandlingen er {endringsdato}. Perioder før endringstidspunktet vises først i uttaksresultat fordi de i utgangspunktet ikke skal vurderes på nytt i denne behandlingen. Ved behov legg inn søknadsperioder før endringsdato. De nye periodene vil medføre flytting av endringsdatoen og ny vurdering av tidligere vedtatte perioder. Du kan ikke legge inn perioder som er før første uttaksdag {førsteuttaksdato}.","UttakInfoPanel.OrginaleStartdatoKanIkkeEndres":`Den originale startdatoen til søknadsperioden må ikke endres.
Original startdato: {originalStartDato}`,"UttakInfoPanel.manglerPeriodeEtterFørsteuttaksdato":"Mangler periode etter første uttaksdag: {førsteuttaksdato}","UttakInfoPanel.periodeFørFørsteuttaksdato":"Første søknadsperiode {nyStartDato} kan ikke starte før første uttaksdag {førsteUttaksdato}","UttakInfoPanel.ForHoyArbeidstidsprosent":"En eller flere perioder har en arbeidstidsprosent over 100%.","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","UttakInfoPanel.AnnenForelderHarRett":"Annen forelder har rett","UttakInfoPanel.AnnenForelderHarIkkeRett":"Annen forelder har ikke rett","UttakInfoPanel.ManuellOverstyring":"Manuell overstyring","UttakInfo.Uttaksdager":"Prosentandel samtidig uttak","UttakPeriodePanel.nextPeriod":"Neste periode","UttakPeriodePanel.nextPeriodShort":"Neste","UttakPeriodePanel.prevPeriod":"Forrige periode","UttakPeriodePanel.prevPeriodShort":"Forrige","UttakPeriodePanel.LukkPeriode":"Lukk periode","UttakInfo.SamtidigUttaksprosent":"Uttak","UttakInfo.Opphold.AnnenForelder":"Opphold i uttak grunnet annen foreldres uttak","Person.Age":"{age} år","Person.ImageText":"Personinformasjon","Person.Woman":"Kvinne","Person.Man":"Mann","Person.Unknown":"Ukjent","Person.ManglerDodsdato":"Dødsdato mangler","Person.HarIkkeNorskFnrEllerDnr":"Har ikke norsk f.nr. eller d-nr.","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.prevPeriod":"Forrige periode","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode","ValidationMessage.MerEn100Prosent":"Samlet utbetalingsgrad og andel i arbeid bør ikke overskride 100%.","ValidationMessage.UtsettelseUtenFullArbeid":"Søker har ikke 100% stilling, vurder om perioden kan utsettes.","ValidationMessage.ukerOgDagerVidNullUtbetalningsgradMessage":"Trekk minst en dag når utbetalingsgraden er høyre enn 0%","ValidationMessage.utbetalingsgradErMerSamtidigUttaksprosent":"Feltet kan ikke være høyere enn samtidig uttaksprosent","ValidationMessage.trekkdagerErMerEnnNullUtsettelse":"Ingen trekkdager for utsettelse","ValidationMessage.utbetalingMerEnnNullUtsettelse":"Ingen utbetalingsgrad for utsettelse","ValidationMessage.HøyereEnn0NårInnvilgetUttak":"Feltet må være høyere enn 0","ValidationMessage.SamtidigUttakErObligatorisk":"Feltet er obligatorisk","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","UttakPanel.NegativeSaldo":"Antall dager kan ikke overstige dagene som gjenstår på {periode}. Det er oppgitt {days} dager for mye.","UttakPanel.KontoMedUgyldigForbruk":"Antall dager valgt for {konto} er ikke gyldig","UttakPanel.InvalidTrekkDagerFlerbarnsdager":"Antall dager med flerbarnsdager kan ikke være høyere enn {maxDays}","UttakPanel.InvalidStonadskonto":"Stønadskonto {konto} er ikke tilgjengelig","UttakActivity.MerEn100Prosent":"Samlet utbetalingsgrad og andel i arbeid bør ikke overskride 100%.","UttakActivity.MerEn100ProsentOgOgyldigUtsettlse":"Samlet utbetalingsgrad og andel i arbeid bør ikke overskride 100%. Søker har ikke 100% stilling, vurder om perioden kan utsettes."},xA=Un(FA),$s=({uttaksresultat:e,uttakStonadskontoer:t,familiehendelse:n,soknad:r,personoversikt:a,kanOverstyre:s,oppdaterStønadskontoer:i,arbeidsgiverOpplysningerPerId:o})=>R.jsx(vm,{value:xA,children:R.jsx(rm,{uttaksresultat:e,uttakStonadskontoer:t,familiehendelse:n,soknad:r,personoversikt:a,kanOverstyre:s,oppdaterStønadskontoer:i,arbeidsgiverOpplysningerPerId:o})});$s.__docgenInfo={description:"",methods:[],displayName:"UttakProsessIndex",props:{uttakStonadskontoer:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const{action:tm}=__STORYBOOK_MODULE_ACTIONS__,xr=[{definisjon:Be.FASTSETT_UTTAKPERIODER,status:Is.OPPRETTET,begrunnelse:null,toTrinnsBehandling:!0,aksjonspunktType:vd.MANUELL,kanLoses:!0}],MA={gjeldende:{skjaringstidspunkt:"2019-11-04",avklartBarn:[{fodselsdato:"2019-11-04"}]}},UA={uuid:"1",versjon:1,type:"BT-002",behandlingsresultat:{skjæringstidspunkt:{dato:"2019-10-14"}},status:"UTRED",språkkode:"-"},At={tapteDagerFpff:1,stonadskontoer:{FEDREKVOTE:{stonadskontotype:"FEDREKVOTE",maxDager:75,saldo:50,aktivitetSaldoDtoList:[{aktivitetIdentifikator:{uttakArbeidType:"ORDINÆRT_ARBEID",arbeidsgiverReferanse:"910909088"},saldo:50}],gyldigForbruk:!0},MØDREKVOTE:{stonadskontotype:"MØDREKVOTE",maxDager:75,saldo:35,aktivitetSaldoDtoList:[{aktivitetIdentifikator:{uttakArbeidType:"ORDINÆRT_ARBEID",arbeidsgiverReferanse:"910909088"},saldo:35}],gyldigForbruk:!0},FELLESPERIODE:{stonadskontotype:"FELLESPERIODE",maxDager:80,saldo:80,aktivitetSaldoDtoList:[{aktivitetIdentifikator:{uttakArbeidType:"ORDINÆRT_ARBEID",arbeidsgiverReferanse:"910909088"},saldo:80}],gyldigForbruk:!0},FORELDREPENGER_FØR_FØDSEL:{stonadskontotype:"FORELDREPENGER_FØR_FØDSEL",maxDager:15,saldo:0,aktivitetSaldoDtoList:[{aktivitetIdentifikator:{uttakArbeidType:"ORDINÆRT_ARBEID",arbeidsgiverReferanse:"910909088"},saldo:0}],gyldigForbruk:!0}}},BA={soknadType:"ST-001",mottattDato:"2019-11-18",fodselsdatoer:{1:"2019-11-04"},søknadsfrist:{mottattDato:"2019-11-18",utledetSøknadsfrist:"2020-01-31",søknadsperiodeStart:"2019-10-14",søknadsperiodeSlutt:"2020-02-02",dagerOversittetFrist:-74}},VA={342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},910909088:{erPrivatPerson:!1,referanse:"910909088",identifikator:"910909088",navn:"BEDRIFT AS"},994884174:{erPrivatPerson:!1,referanse:"994884174",identifikator:"994884174",navn:"Nav"}},GA={title:"prosess/prosess-uttak",component:$s,decorators:[bm,hm],args:{behandling:UA,uttakStonadskontoer:At,soknad:BA,personoversikt:{bruker:{kjønn:Xs.KVINNE}},kanOverstyre:!1,familiehendelse:MA,oppdaterStønadskontoer:e=>(tm("button-click")(e),Promise.resolve(At)),arbeidsgiverOpplysningerPerId:VA},render:e=>R.jsx($s,{...e})},Yt={args:{aksjonspunkterForPanel:xr,uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15},{stønadskontoType:Q.FORELDREPENGER,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c1",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:14}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.ÅRSAK_5002,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0},{fom:"2022-11-10",tom:"2022-12-21",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:30}],periodeResultatType:"AVSLÅTT",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4103,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:void 0,gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},$t={args:{kanOverstyre:!0,uttaksresultat:{perioderSøker:[{fom:"2019-10-11",tom:"2019-10-31",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER_FØR_FØDSEL,prosentArbeid:0,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2006,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER_FØR_FØDSEL",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-11-01",gradertAktivitet:void 0},{fom:"2019-11-01",tom:"2019-12-12",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:30}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-11-01",gradertAktivitet:void 0},{fom:"2019-12-13",tom:"2020-01-23",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:50,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:50,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!0,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2031,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!0,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-11-01",gradertAktivitet:{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:50,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:50,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!0,trekkdagerDesimaler:15}},{fom:"2020-01-24",tom:"2020-02-13",aktiviteter:[{stønadskontoType:Q.UDEFINERT,prosentArbeid:100,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2011,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2019-11-01",gradertAktivitet:void 0},{fom:"2020-02-14",tom:"2020-02-20",aktiviteter:[{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:0,arbeidsforholdId:"efaf22ef-76aa-4576-8c96-92bd31af8815",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:5}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2002,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FELLESPERIODE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2020-01-24",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!0,søkerErMor:!0},endringsdato:"2019-10-11"}}},Wt={args:{aksjonspunkterForPanel:xr,uttaksresultat:{perioderSøker:[{fom:"2019-10-11",tom:"2019-10-31",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER_FØR_FØDSEL,prosentArbeid:0,arbeidsforholdId:"0716ce9f-d93d-40cd-a52c-c7c569995948",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15},{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:51,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:50,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2006,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER_FØR_FØDSEL",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-09-20",gradertAktivitet:void 0},{fom:"2019-11-01",tom:"2019-12-12",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"0716ce9f-d93d-40cd-a52c-c7c569995948",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:30}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2019-09-20",gradertAktivitet:void 0},{fom:"2019-12-13",tom:"2019-12-26",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:100,arbeidsforholdId:"0716ce9f-d93d-40cd-a52c-c7c569995948",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:10}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4082,manuellBehandlingÅrsak:be.ÅRSAK_5010,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2019-12-27",gradertAktivitet:void 0},{fom:"2019-12-27",tom:"2020-01-09",aktiviteter:[{stønadskontoType:Q.UDEFINERT,prosentArbeid:100,arbeidsforholdId:"0716ce9f-d93d-40cd-a52c-c7c569995948",eksternArbeidsforholdId:"ARB001-001",arbeidsgiverReferanse:"910909088",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2011,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2019-12-27",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!0,søkerErMor:!0},endringsdato:"2019-10-11"}}},zt={args:{uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER_FØR_FØDSEL,prosentArbeid:0,arbeidsforholdId:"7272d1a7-8dbb-4953-bb39-e0742635b2a5",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2006,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER_FØR_FØDSEL",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-10",gradertAktivitet:void 0},{fom:"2022-11-10",tom:"2022-12-21",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"7272d1a7-8dbb-4953-bb39-e0742635b2a5",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:30}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-10",gradertAktivitet:void 0},{fom:"2022-12-22",tom:"2022-12-28",aktiviteter:[{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:0,arbeidsforholdId:"7272d1a7-8dbb-4953-bb39-e0742635b2a5",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:5}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2002,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FELLESPERIODE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-12-01",gradertAktivitet:void 0},{fom:"2022-12-29",tom:"2023-01-04",aktiviteter:[{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:0,arbeidsforholdId:"7272d1a7-8dbb-4953-bb39-e0742635b2a5",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:5}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FELLESPERIODE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-12-01",gradertAktivitet:void 0}],perioderAnnenpart:[{fom:"2022-10-27",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:"b97a7bc5-26ef-4fd8-874e-b475a732c7a8",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:10}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!0,samtidigUttaksprosent:100,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-17",gradertAktivitet:void 0},{fom:"2022-12-22",tom:"2022-12-28",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:"b97a7bc5-26ef-4fd8-874e-b475a732c7a8",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"AVSLÅTT",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4084,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-17",gradertAktivitet:void 0},{fom:"2023-01-05",tom:"2023-02-01",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:"b97a7bc5-26ef-4fd8-874e-b475a732c7a8",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:20}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-17",gradertAktivitet:void 0}],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},Xt={args:{aksjonspunkterForPanel:xr,personoversikt:{bruker:{kjønn:Xs.MANN}},uttaksresultat:{perioderSøker:[{fom:"2022-11-10",tom:"2022-11-11",aktiviteter:[{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:34,arbeidsforholdId:"f41fad23-a318-4ecb-8949-8a8492b65c56",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!0,trekkdagerDesimaler:2}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.UDEFINERT,manuellBehandlingÅrsak:be.ÅRSAK_5010,graderingAvslagÅrsak:Ae.ÅRSAK_4501,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FELLESPERIODE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:{stønadskontoType:Q.FELLESPERIODE,prosentArbeid:34,arbeidsforholdId:"f41fad23-a318-4ecb-8949-8a8492b65c56",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!0,trekkdagerDesimaler:2}},{fom:"2022-11-12",tom:"2022-11-23",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:"f41fad23-a318-4ecb-8949-8a8492b65c56",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:8}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!0,samtidigUttaksprosent:100,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0},{fom:"2022-12-22",tom:"2023-01-04",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"f41fad23-a318-4ecb-8949-8a8492b65c56",eksternArbeidsforholdId:"ARB001-003",arbeidsgiverReferanse:"910909088",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:10}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2021,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"MØDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],perioderAnnenpart:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.FORELDREPENGER_FØR_FØDSEL,prosentArbeid:0,arbeidsforholdId:"a94992b7-e454-458c-800c-a74b4f072c00",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2006,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER_FØR_FØDSEL",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0},{fom:"2022-11-10",tom:"2022-12-21",aktiviteter:[{stønadskontoType:Q.UDEFINERT,prosentArbeid:0,arbeidsforholdId:"a94992b7-e454-458c-800c-a74b4f072c00",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2027,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.SYKDOM_SKADE,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!1},endringsdato:"2022-11-10"}}},Pl={...At,stonadskontoer:{...At.stonadskontoer,MØDREKVOTE:{...At.stonadskontoer.MØDREKVOTE,gyldigForbruk:!1}}},Qt={args:{aksjonspunkterForPanel:xr,uttakStonadskontoer:Pl,oppdaterStønadskontoer:e=>(tm("button-click")(e),Promise.resolve(Pl)),uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.ÅRSAK_5002,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},Zt={args:{aksjonspunkterForPanel:xr,uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:0,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:void 0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.ÅRSAK_5002,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},Jt={args:{aksjonspunkterForPanel:xr,uttaksresultat:{perioderSøker:[{fom:"2022-10-20",tom:"2022-11-09",aktiviteter:[{stønadskontoType:Q.MØDREKVOTE,prosentArbeid:51,arbeidsforholdId:"de6cb16e-9520-418c-a438-aa781b0833c2",eksternArbeidsforholdId:"ARB001-002",arbeidsgiverReferanse:"994884174",utbetalingsgrad:50,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:15}],periodeResultatType:"MANUELL_BEHANDLING",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4002,manuellBehandlingÅrsak:be.ÅRSAK_5002,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FORELDREPENGER",utsettelseType:Ee.ARBEID,oppholdÅrsak:"-",mottattDato:"2023-01-05",gradertAktivitet:void 0}],perioderAnnenpart:[],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!1,søkerErMor:!0},endringsdato:"2022-10-20"}}},ea={args:{aksjonspunkterForPanel:xr,uttaksresultat:{perioderSøker:[{fom:"2023-02-15",tom:"2023-05-05",aktiviteter:[],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.UDEFINERT,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"-",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",mottattDato:"2023-01-18",gradertAktivitet:void 0}],perioderAnnenpart:[{fom:"2023-02-03",tom:"2023-02-14",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"886998562",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:8},{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"987195428",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:8},{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"972315575",utbetalingsgrad:100,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:8}],periodeResultatType:"INNVILGET",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_2003,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-28",gradertAktivitet:void 0},{fom:"2023-05-16",tom:"2023-05-17",aktiviteter:[{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"987195428",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0},{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"886998562",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0},{stønadskontoType:Q.FEDREKVOTE,prosentArbeid:0,arbeidsforholdId:void 0,eksternArbeidsforholdId:void 0,arbeidsgiverReferanse:"972315575",utbetalingsgrad:0,uttakArbeidType:"ORDINÆRT_ARBEID",gradering:!1,trekkdagerDesimaler:0}],periodeResultatType:"AVSLÅTT",begrunnelse:void 0,periodeResultatÅrsak:Re.ÅRSAK_4084,manuellBehandlingÅrsak:be.UDEFINERT,graderingAvslagÅrsak:Ae.UDEFINERT,flerbarnsdager:!1,samtidigUttak:!1,samtidigUttaksprosent:void 0,graderingInnvilget:!1,periodeType:"FEDREKVOTE",utsettelseType:Ee.UDEFINERT,oppholdÅrsak:"-",mottattDato:"2022-11-28",gradertAktivitet:void 0}],årsakFilter:{kreverSammenhengendeUttakTom:"2021-09-30",utenMinsterett:!0,søkerErMor:!0},endringsdato:"2023-02-03"}}};var jl,Fl,xl;Yt.parameters={...Yt.parameters,docs:{...(jl=Yt.parameters)==null?void 0:jl.docs,source:{originalSource:`{
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
}`,...(xl=(Fl=Yt.parameters)==null?void 0:Fl.docs)==null?void 0:xl.source}}};var Ml,Ul,Bl;$t.parameters={...$t.parameters,docs:{...(Ml=$t.parameters)==null?void 0:Ml.docs,source:{originalSource:`{
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
}`,...(Bl=(Ul=$t.parameters)==null?void 0:Ul.docs)==null?void 0:Bl.source}}};var Vl,Ll,Kl;Wt.parameters={...Wt.parameters,docs:{...(Vl=Wt.parameters)==null?void 0:Vl.docs,source:{originalSource:`{
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
}`,...(Kl=(Ll=Wt.parameters)==null?void 0:Ll.docs)==null?void 0:Kl.source}}};var Cl,Gl,Hl;zt.parameters={...zt.parameters,docs:{...(Cl=zt.parameters)==null?void 0:Cl.docs,source:{originalSource:`{
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
}`,...(Hl=(Gl=zt.parameters)==null?void 0:Gl.docs)==null?void 0:Hl.source}}};var Yl,$l,Wl;Xt.parameters={...Xt.parameters,docs:{...(Yl=Xt.parameters)==null?void 0:Yl.docs,source:{originalSource:`{
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
}`,...(Wl=($l=Xt.parameters)==null?void 0:$l.docs)==null?void 0:Wl.source}}};var zl,Xl,Ql;Qt.parameters={...Qt.parameters,docs:{...(zl=Qt.parameters)==null?void 0:zl.docs,source:{originalSource:`{
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
}`,...(Ql=(Xl=Qt.parameters)==null?void 0:Xl.docs)==null?void 0:Ql.source}}};var Zl,Jl,ed;Zt.parameters={...Zt.parameters,docs:{...(Zl=Zt.parameters)==null?void 0:Zl.docs,source:{originalSource:`{
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
}`,...(ed=(Jl=Zt.parameters)==null?void 0:Jl.docs)==null?void 0:ed.source}}};var nd,rd,td;Jt.parameters={...Jt.parameters,docs:{...(nd=Jt.parameters)==null?void 0:nd.docs,source:{originalSource:`{
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
}`,...(td=(rd=Jt.parameters)==null?void 0:rd.docs)==null?void 0:td.source}}};var ad,sd,id;ea.parameters={...ea.parameters,docs:{...(ad=ea.parameters)==null?void 0:ad.docs,source:{originalSource:`{
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
}`,...(id=(sd=ea.parameters)==null?void 0:sd.docs)==null?void 0:id.source}}};const HA=["AksjonspunktDerValgtStønadskontoIkkeFinnes","PeriodeMedGraderingUtenAksjonspunkt","AksjonspunktIRevurdering","ProsessUttakToParter","AksjonspunktForFar","StønadskontoMedUgyldigForbruk","VisAdvarselNårProsentIArbeidTotaltErMindreEnn100Prosent","VisAdvarselNårUtbetalingsgradOgProsentArbeidOverstiger100Prosent","VisOppholdsperiode"];export{Yt as AksjonspunktDerValgtStønadskontoIkkeFinnes,Xt as AksjonspunktForFar,Wt as AksjonspunktIRevurdering,$t as PeriodeMedGraderingUtenAksjonspunkt,zt as ProsessUttakToParter,Qt as StønadskontoMedUgyldigForbruk,Zt as VisAdvarselNårProsentIArbeidTotaltErMindreEnn100Prosent,Jt as VisAdvarselNårUtbetalingsgradOgProsentArbeidOverstiger100Prosent,ea as VisOppholdsperiode,HA as __namedExportsOrder,GA as default};
